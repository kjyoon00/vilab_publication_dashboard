const dataset = window.VILAB_PUBLICATIONS_DATA || { publications: [] };
const publications = (dataset.publications || []).map((publication, index) => ({
  ...publication,
  id: publication.id || `publication-${index + 1}`
}));

const els = {
  heroCount: document.getElementById("hero-count"),
  summaryGrid: document.getElementById("summary-grid"),
  paperGrid: document.getElementById("paper-grid"),
  resultCount: document.getElementById("result-count"),
  tableBody: document.getElementById("table-body"),
  yearBars: document.getElementById("year-bars"),
  keywordCloud: document.getElementById("keyword-cloud"),
  venueList: document.getElementById("venue-list"),
  authorList: document.getElementById("author-list"),
  activeAuthor: document.getElementById("active-author"),
  searchInput: document.getElementById("search-input"),
  yearFilter: document.getElementById("year-filter"),
  typeFilter: document.getElementById("type-filter"),
  venueFilter: document.getElementById("venue-filter"),
  excludePatents: document.getElementById("exclude-patents"),
  quickFilters: Array.from(document.querySelectorAll(".quick-filter")),
  modeTabs: Array.from(document.querySelectorAll(".mode-tab"))
};

const topVenueSet = new Set(["CVPR", "ICCV", "ECCV", "NeurIPS", "ICLR", "WACV", "TPAMI"]);
const stackedTypes = ["conference", "journal", "patent"];

const state = {
  mode: "all",
  selectedAuthor: ""
};

const typeLabels = {
  conference: "Conference",
  journal: "Journal",
  patent: "Patent",
  preprint: "Preprint"
};

const safeText = (value) => String(value || "").trim();

const normalizeVenue = (value) => {
  const venue = safeText(value);
  if (!venue) return "Unknown";
  if (venue.includes("TPAMI")) return "TPAMI";
  return venue;
};

const cleanAuthorName = (author) => safeText(author).replace(/\*/g, "");

const publicationsWithDerived = publications.map((publication) => ({
  ...publication,
  venueGroup: normalizeVenue(publication.venue),
  cleanedAuthors: (publication.authors || []).map(cleanAuthorName),
  searchBlob: [
    publication.title,
    ...(publication.authors || []),
    publication.venue,
    ...(publication.keywords || []),
    publication.abstract,
    publication.status
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase()
}));

const getUniqueSorted = (items, selector, sortFn) =>
  [...new Set(items.map(selector).filter(Boolean))].sort(sortFn);

const countBy = (items, selector) =>
  items.reduce((acc, item) => {
    const key = selector(item);
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

const sortEntriesDesc = (record) =>
  Object.entries(record).sort((a, b) => b[1] - a[1] || String(a[0]).localeCompare(String(b[0])));

const buildSelectOptions = () => {
  getUniqueSorted(publicationsWithDerived, (item) => item.year, (a, b) => b - a).forEach((year) => {
    const option = document.createElement("option");
    option.value = String(year);
    option.textContent = String(year);
    els.yearFilter.append(option);
  });

  getUniqueSorted(publicationsWithDerived, (item) => item.type, (a, b) => a.localeCompare(b)).forEach((type) => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = typeLabels[type] || type;
    els.typeFilter.append(option);
  });

  sortEntriesDesc(countBy(publicationsWithDerived, (item) => item.venueGroup))
    .slice(0, 18)
    .forEach(([venue]) => {
      const option = document.createElement("option");
      option.value = venue;
      option.textContent = venue;
      els.venueFilter.append(option);
    });
};

const createSummaryCards = (items) => {
  const byType = countBy(items, (item) => item.type || "unknown");
  const recent = items.filter((item) => Number(item.year) >= 2024 && item.type !== "patent").length;
  const topVenues = items.filter((item) => topVenueSet.has(item.venueGroup)).length;

  const cards = [
    { label: "전체 항목", value: String(items.length), sub: "논문, 저널, 특허 포함" },
    { label: "최근 논문", value: String(recent), sub: "2024년 이후, 특허 제외" },
    { label: "Conference", value: String(byType.conference || 0), sub: "학회 논문" },
    { label: "Top Venue", value: String(topVenues), sub: "CVPR·ICCV·ECCV·ICLR 등" }
  ];

  els.summaryGrid.innerHTML = cards
    .map(
      (card) => `
        <article class="summary-card">
          <p class="section-label">${card.label}</p>
          <strong class="summary-number">${card.value}</strong>
          <p class="caption">${card.sub}</p>
        </article>
      `
    )
    .join("");
};

const pickPaperLinks = (publication) => {
  const candidates = [
    ["Paper", publication.pdf_url],
    ["ArXiv", publication.arxiv_url],
    ["Code", publication.code_url || publication.code_url2],
    ["Project", publication.project_url || publication.project_url2],
    ["Supp", publication.supp_url]
  ];
  return candidates.filter(([, url]) => safeText(url));
};

const createPaperCards = (items) => {
  if (!items.length) {
    els.paperGrid.innerHTML = '<div class="empty-card">조건에 맞는 논문이 없습니다. 검색어나 필터를 조금 넓혀보세요.</div>';
    return;
  }

  const sorted = [...items].sort((a, b) => {
    const yearDiff = Number(b.year || 0) - Number(a.year || 0);
    if (yearDiff) return yearDiff;
    const featuredDiff = Number(Boolean(b.presentation)) - Number(Boolean(a.presentation));
    if (featuredDiff) return featuredDiff;
    return a.title.localeCompare(b.title);
  });

  els.paperGrid.innerHTML = sorted
    .slice(0, 24)
    .map((publication) => {
      const description =
        publication.abstract ||
        `${publication.venueGroup} ${publication.year}에 등재된 ${typeLabels[publication.type] || publication.type} 항목입니다.`;
      const links = pickPaperLinks(publication);
      const keywords = (publication.keywords || []).slice(0, 4);

      return `
        <article class="paper-card">
          <div class="paper-top">
            <span class="chip ${publication.type}">${typeLabels[publication.type] || publication.type}</span>
            <span class="paper-meta">${publication.venueGroup} ${publication.year || ""}</span>
          </div>
          <h3 class="paper-title">${publication.title}</h3>
          <p class="paper-authors">${(publication.authors || []).join(", ")}</p>
          <p class="paper-desc">${description}</p>
          <div class="tags">
            ${keywords.map((keyword) => `<span class="tag">${keyword}</span>`).join("")}
            ${publication.presentation ? `<span class="tag">${publication.presentation}</span>` : ""}
          </div>
          <div class="paper-footer">
            <span class="paper-meta">${publication.status || "published"}</span>
            <span>
              ${links
                .slice(0, 2)
                .map(([label, url]) => `<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`)
                .join(" · ")}
            </span>
          </div>
        </article>
      `;
    })
    .join("");
};

const renderYearBars = (items) => {
  const years = getUniqueSorted(
    items.filter((item) => item.year),
    (item) => item.year,
    (a, b) => b - a
  ).slice(0, 8);

  if (!years.length) {
    els.yearBars.innerHTML = '<div class="empty-card">표시할 연도별 데이터가 없습니다.</div>';
    return;
  }

  const grouped = years.map((year) => {
    const rowItems = items.filter((item) => Number(item.year) === Number(year));
    const counts = countBy(rowItems, (item) => item.type);
    const total = stackedTypes.reduce((sum, type) => sum + (counts[type] || 0), 0);
    return { year, counts, total };
  });

  const maxTotal = Math.max(...grouped.map((entry) => entry.total), 1);

  const rows = grouped
    .map(({ year, counts, total }) => {
      const normalizedTotal = total / maxTotal;
      const segments = stackedTypes
        .filter((type) => counts[type])
        .map((type) => {
          const width = (counts[type] / total) * normalizedTotal * 100;
          return `<div class="bar-fill ${type}" style="width:${width}%"></div>`;
        })
        .join("");

      return `
        <div class="bar-row">
          <span class="bar-label">${year}</span>
          <div class="bar-track">${segments}</div>
          <span class="bar-value">${total}</span>
        </div>
      `;
    })
    .join("");

  const legend = `
    <div class="chart-legend">
      <span class="legend-item"><span class="legend-swatch conference"></span>Conference</span>
      <span class="legend-item"><span class="legend-swatch journal"></span>Journal</span>
      <span class="legend-item"><span class="legend-swatch patent"></span>Patent</span>
    </div>
  `;

  els.yearBars.innerHTML = rows + legend;
};

const renderKeywordCloud = (items) => {
  const keywords = sortEntriesDesc(
    items.reduce((acc, publication) => {
      (publication.keywords || []).forEach((keyword) => {
        if (keyword !== "Patent") acc[keyword] = (acc[keyword] || 0) + 1;
      });
      return acc;
    }, {})
  ).slice(0, 18);

  els.keywordCloud.innerHTML = keywords.length
    ? keywords.map(([keyword, count]) => `<span class="keyword-pill">${keyword} · ${count}</span>`).join("")
    : '<div class="empty-card">키워드 데이터가 없습니다.</div>';
};

const renderVenueList = (items) => {
  const venues = sortEntriesDesc(countBy(items, (item) => item.venueGroup)).slice(0, 8);
  els.venueList.innerHTML = venues.length
    ? venues
        .map(
          ([venue, count]) => `
            <div class="venue-item">
              <span>${venue}</span>
              <strong>${count}</strong>
            </div>
          `
        )
        .join("")
    : '<div class="empty-card">표시할 venue가 없습니다.</div>';
};

const renderActiveAuthor = () => {
  if (!state.selectedAuthor) {
    els.activeAuthor.classList.add("hidden");
    els.activeAuthor.innerHTML = "";
    return;
  }

  els.activeAuthor.classList.remove("hidden");
  els.activeAuthor.innerHTML = `
    <span>저자 필터: <strong>${state.selectedAuthor}</strong></span>
    <button class="clear-author" id="clear-author">해제</button>
  `;
  document.getElementById("clear-author").addEventListener("click", () => {
    state.selectedAuthor = "";
    filterPublications();
  });
};

const renderAuthorList = (items) => {
  const authors = sortEntriesDesc(
    items.reduce((acc, publication) => {
      publication.cleanedAuthors.forEach((author) => {
        acc[author] = (acc[author] || 0) + 1;
      });
      return acc;
    }, {})
  ).slice(0, 10);

  els.authorList.innerHTML = authors.length
    ? authors
        .map(
          ([author, count]) => `
            <div class="venue-item">
              <button class="author-button" data-author="${author}">${author}</button>
              <strong>${count}</strong>
            </div>
          `
        )
        .join("")
    : '<div class="empty-card">표시할 저자 집계가 없습니다.</div>';

  els.authorList.querySelectorAll(".author-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedAuthor = button.dataset.author;
      filterPublications();
    });
  });
};

const renderTable = (items) => {
  if (!items.length) {
    els.tableBody.innerHTML = '<tr><td colspan="6">표시할 논문이 없습니다.</td></tr>';
    return;
  }

  const sorted = [...items].sort((a, b) => Number(b.year || 0) - Number(a.year || 0) || a.title.localeCompare(b.title));
  els.tableBody.innerHTML = sorted
    .slice(0, 50)
    .map(
      (publication) => `
        <tr>
          <td>${publication.year || "-"}</td>
          <td>${publication.title}</td>
          <td>${publication.cleanedAuthors.slice(0, 4).join(", ")}${publication.cleanedAuthors.length > 4 ? " ..." : ""}</td>
          <td>${publication.venueGroup}</td>
          <td>${typeLabels[publication.type] || publication.type}</td>
          <td>${(publication.keywords || []).slice(0, 3).join(", ")}</td>
        </tr>
      `
    )
    .join("");
};

const syncQuickFilterState = () => {
  const currentVenue = els.venueFilter.value;
  els.quickFilters.forEach((button) => {
    button.classList.toggle("active", button.dataset.venueQuick === currentVenue);
  });
};

const syncModeTabs = () => {
  els.modeTabs.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === state.mode);
  });
};

const applyQuickVenue = (venue) => {
  els.venueFilter.value = venue;
  syncQuickFilterState();
  filterPublications();
};

const filterPublications = () => {
  const query = safeText(els.searchInput.value).toLowerCase();
  const year = els.yearFilter.value;
  const type = els.typeFilter.value;
  const venue = els.venueFilter.value;
  const excludePatents = els.excludePatents.checked;

  const filtered = publicationsWithDerived.filter((publication) => {
    const matchesQuery = !query || publication.searchBlob.includes(query);
    const matchesYear = year === "all" || String(publication.year) === year;
    const matchesType = type === "all" || publication.type === type;
    const matchesVenue = venue === "all" || publication.venueGroup === venue;
    const matchesPatentToggle = !excludePatents || publication.type !== "patent";
    const matchesAuthor = !state.selectedAuthor || publication.cleanedAuthors.includes(state.selectedAuthor);
    const matchesMode =
      state.mode === "all" ||
      (state.mode === "papers" && publication.type !== "patent") ||
      (state.mode === "patents" && publication.type === "patent");

    return matchesQuery && matchesYear && matchesType && matchesVenue && matchesPatentToggle && matchesAuthor && matchesMode;
  });

  els.heroCount.textContent = `${publicationsWithDerived.length} records`;
  els.resultCount.textContent = `${filtered.length}개 항목 표시 중`;

  createSummaryCards(filtered);
  createPaperCards(filtered);
  renderYearBars(filtered);
  renderKeywordCloud(filtered);
  renderVenueList(filtered);
  renderActiveAuthor();
  renderAuthorList(filtered);
  renderTable(filtered);
};

buildSelectOptions();
syncQuickFilterState();
syncModeTabs();
filterPublications();

["input", "change"].forEach((eventName) => {
  els.searchInput.addEventListener(eventName, filterPublications);
  els.yearFilter.addEventListener(eventName, filterPublications);
  els.typeFilter.addEventListener(eventName, filterPublications);
  els.venueFilter.addEventListener(eventName, () => {
    syncQuickFilterState();
    filterPublications();
  });
});

els.excludePatents.addEventListener("change", filterPublications);
els.quickFilters.forEach((button) => {
  button.addEventListener("click", () => applyQuickVenue(button.dataset.venueQuick));
});
els.modeTabs.forEach((button) => {
  button.addEventListener("click", () => {
    state.mode = button.dataset.mode;
    syncModeTabs();
    filterPublications();
  });
});
