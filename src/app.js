const projects = [
  {
    id: 1,
    title: "생성AI 선도인재양성사업 및 독자 AI 파운데이션 모델 참여",
    category: "생성AI",
    status: "확장",
    updatedAt: "2025-08-13",
    type: "국가 R&D",
    summary:
      "KAIST가 생성AI 선도인재양성사업 3개 과제에 공동연구기관으로 참여하고, 독자 AI 파운데이션 모델 개발 사업에서는 5개 컨소시엄 중 4곳에 핵심 연구진으로 참여 중입니다.",
    highlights: [
      "생성AI 선도인재양성사업은 2028년 말까지 진행",
      "LG AI연구원, NC AI, KETI 등과 산학 협력",
      "피지컬 AI, 멀티모달 AI, 버티컬 모델 중심"
    ],
    sourceLabel: "KAIST 뉴스",
    sourceUrl:
      "https://www.kaist.ac.kr/news/html/news/?sval=ICCV+2025"
  },
  {
    id: 2,
    title: "InnoCORE 초거대언어모델 혁신 연구단",
    category: "초거대언어모델",
    status: "진행중",
    updatedAt: "2025-06-19",
    type: "AI+S&T",
    summary:
      "InnoCORE 사업 내 KAIST 주관 4대 연구단 가운데 하나로, 생성AI, 멀티모달 AI, 신뢰성까지 포함한 초거대언어모델 고도화를 담당합니다.",
    highlights: [
      "2025년 7월부터 본격 연구 착수",
      "글로벌 포닥 유치형 구조",
      "AI 핵심기술과 융합기술의 허브 역할"
    ],
    sourceLabel: "KAIST News Center",
    sourceUrl:
      "https://www.kaist.ac.kr/newsen/html/news/%3Fskey%3Ddepartment%26sval%3DOffice%2Bof%2Bthe%2BPresident"
  },
  {
    id: 3,
    title: "InnoCORE AI 기반 지능형 설계-제조 통합 연구단",
    category: "제조 AI",
    status: "진행중",
    updatedAt: "2025-06-19",
    type: "AI+제조",
    summary:
      "제조 산업 전 주기의 AI 플랫폼 구축과 설계·공정 혁신을 목표로 하는 연구단으로, KAIST가 InnoCORE에서 직접 운영합니다.",
    highlights: [
      "라이프사이클 단위 제조 데이터 통합",
      "설계 자동화와 공정 혁신 초점",
      "산업 확산형 AI+제조 과제"
    ],
    sourceLabel: "KAIST News Center",
    sourceUrl:
      "https://www.kaist.ac.kr/newsen/html/news/%3Fskey%3Ddepartment%26sval%3DOffice%2Bof%2Bthe%2BPresident"
  },
  {
    id: 4,
    title: "InnoCORE AI-혁신신약 연구단",
    category: "바이오 AI",
    status: "진행중",
    updatedAt: "2025-06-19",
    type: "AI+바이오",
    summary:
      "신약개발 전 주기에서 AI 기반 기술을 확보하고 난치성 질환 극복을 겨냥하는 KAIST 주관 융합 연구단입니다.",
    highlights: [
      "AI 기반 후보물질 발굴과 개발 전주기 지원",
      "의생명 융합형 AI 과제",
      "인재 유치와 글로벌 협력 구조 포함"
    ],
    sourceLabel: "KAIST News Center",
    sourceUrl:
      "https://www.kaist.ac.kr/newsen/html/news/%3Fskey%3Ddepartment%26sval%3DOffice%2Bof%2Bthe%2BPresident"
  },
  {
    id: 5,
    title: "InnoCORE 항공우주 AI 전환 연구단",
    category: "항공우주 AI",
    status: "진행중",
    updatedAt: "2025-06-19",
    type: "AI+항공우주",
    summary:
      "항공우주 시스템 전 주기의 AI 전환과 자율비행, 우주통신 등 신기술 개발을 목표로 하는 InnoCORE 연구단입니다.",
    highlights: [
      "항공우주 시스템 전환형 AI",
      "자율비행·우주통신 기술 포함",
      "전략 산업 지향 과제"
    ],
    sourceLabel: "KAIST News Center",
    sourceUrl:
      "https://www.kaist.ac.kr/newsen/html/news/%3Fskey%3Ddepartment%26sval%3DOffice%2Bof%2Bthe%2BPresident"
  },
  {
    id: 6,
    title: "국가 AI 연구거점(NAIRL) 및 글로벌 AI 프론티어 연계",
    category: "AI 연구 인프라",
    status: "운영중",
    updatedAt: "2025-10-27",
    type: "연구거점",
    summary:
      "KAIST는 국가 AI 연구거점과 글로벌 AI 프론티어 랩을 연결해 국제 심포지엄과 연구 네트워크를 확장하고 있습니다.",
    highlights: [
      "Global AI Frontier Symposium 2025 공동 주최",
      "국내외 산학연 전문가 500명 이상 참여",
      "연구거점형 생태계 운영 신호"
    ],
    sourceLabel: "KAIST News Center",
    sourceUrl:
      "https://www.kaist.ac.kr/newsen/html/news/?mng_no=54570&mode=V"
  },
  {
    id: 7,
    title: "KAIST-NIK AI 공동연구센터",
    category: "국제협력 AI",
    status: "협력",
    updatedAt: "2025-04-30",
    type: "국제 공동연구",
    summary:
      "KAIST와 일본 국립정보학연구소(NII)의 협력으로 출범한 공동연구센터로, AI 공동연구와 인재 교류를 추진합니다.",
    highlights: [
      "한일 공동 AI 연구 플랫폼",
      "연구자 교류와 장기 협력 기반",
      "센터형 국제협력 과제"
    ],
    sourceLabel: "KAIST 뉴스",
    sourceUrl:
      "https://news.kaist.ac.kr/news/html/news/?mode=V&mng_no=38890"
  },
  {
    id: 8,
    title: "신경과학-인공지능 융합 연구센터",
    category: "융합 AI",
    status: "운영중",
    updatedAt: "2024-09-01",
    type: "연구센터",
    summary:
      "KAIST 연구원 산하 융합형 연구센터로, 신경과학과 인공지능의 접점을 중심으로 장기 연구를 수행하는 조직입니다.",
    highlights: [
      "KAIST 연구원 산하 센터",
      "뇌과학과 AI의 융합 연구",
      "상시 운영형 중장기 연구 기반"
    ],
    sourceLabel: "KAIST 연구",
    sourceUrl:
      "https://www.kaist.ac.kr/kr/html/research/04.html"
  },
  {
    id: 9,
    title: "AI 거버넌스 글로벌 협력 프로그램",
    category: "AI 정책",
    status: "협력",
    updatedAt: "2025-09-01",
    type: "정책·거버넌스",
    summary:
      "KAIST가 해외 대학 및 글로벌 기업과 함께 AI 거버넌스, 생성AI의 사회적 방향성을 논의하는 국제 협력 흐름입니다.",
    highlights: [
      "Yejin Choi, Yann LeCun 등 글로벌 참여",
      "기술 개발과 정책 논의를 함께 전개",
      "거버넌스 트랙 확장에 적합"
    ],
    sourceLabel: "KAIST News Center",
    sourceUrl:
      "https://www.kaist.ac.kr/newsen/html/news/?mng_no=54570&mode=V"
  },
  {
    id: 10,
    title: "AI 엔터테크 연구센터",
    category: "콘텐츠 AI",
    status: "협력",
    updatedAt: "2025-04-09",
    type: "산학 공동연구",
    summary:
      "KAIST와 갤럭시코퍼레이션이 설립한 연구센터로, AI 기반 인터랙티브 공연 기술과 몰입형 콘텐츠 등 엔터테크 융합 연구를 추진합니다.",
    highlights: [
      "갤럭시코퍼레이션과 공동 설립",
      "K-콘텐츠 기술 확장형 AI 연구",
      "예술·공학 융합 트랙"
    ],
    sourceLabel: "KAIST 뉴스",
    sourceUrl:
      "https://www.kaist.ac.kr/news/html/news/?mng_no=45530&mode=V"
  },
  {
    id: 11,
    title: "디지털바이오헬스AI연구센터 AI 스타펠로우십",
    category: "의료 AI",
    status: "진행중",
    updatedAt: "2025-05-23",
    type: "대형 국가과제",
    summary:
      "디지털바이오헬스AI연구센터가 AI 스타펠로우십에 선정되어, 질병 추론과 판단, 신약 발굴을 위한 바이오·의료 특화 AI 플랫폼을 2030년까지 개발합니다.",
    highlights: [
      "2025년 5월부터 2030년 12월까지 진행",
      "총 115억 원 규모",
      "삼성서울병원·네이버클라우드·히츠와 협력"
    ],
    sourceLabel: "KAIST 뉴스",
    sourceUrl:
      "https://news.kaist.ac.kr/news/html/news/?mng_no=46811&mode=V"
  },
  {
    id: 12,
    title: "인공지능반도체 스타트업 발굴 프로그램",
    category: "AI 반도체",
    status: "확장",
    updatedAt: "2026-03-17",
    type: "기술사업화",
    summary:
      "KAIST 연구실의 AI 반도체 요소기술을 발굴해 PoC와 창업으로 연결하는 프로그램으로, K-ASIC Center와 IT-AI융합연구소, 인공지능반도체대학원이 공동 추진합니다.",
    highlights: [
      "2026년도 연구실 모집 공고 기준",
      "총 1.5억 원 내외 지원",
      "기술 발굴부터 사업화 연계까지 포함"
    ],
    sourceLabel: "KAIST 전기및전자공학부",
    sourceUrl:
      "https://ee.kaist.ac.kr/notices/2026%EB%85%84%EB%8F%84-%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%EB%B0%98%EB%8F%84%EC%B2%B4-%EC%8A%A4%ED%83%80%ED%8A%B8%EC%97%85-%EB%B0%9C%EA%B5%B4-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8-%EC%B0%B8%EA%B0%80/"
  },
  {
    id: 13,
    title: "AI Platform Center for Manufacturing",
    category: "제조 AI",
    status: "운영중",
    updatedAt: "2026-03-31",
    type: "연구센터",
    summary:
      "KAIST의 제조 AI 플랫폼 센터는 디지털 소재, 공정 AI, 스마트 물류, 로봇 제조, 인간-로봇 협업 등 자율 제조 핵심기술을 통합해 검증 가능한 테스트베드로 확산하는 것을 목표로 합니다.",
    highlights: [
      "자율 제조 핵심기술 통합",
      "테스트베드 기반 실증 지향",
      "산학연 확산과 인재 양성 목표"
    ],
    sourceLabel: "KAIST AIPCM",
    sourceUrl:
      "https://aipcm.kaist.ac.kr/"
  },
  {
    id: 14,
    title: "딥테크 스케일업 밸리 피지컬 AI 사업",
    category: "피지컬 AI",
    status: "확장",
    updatedAt: "2026-01-27",
    type: "사업화·생태계",
    summary:
      "KAIST가 과기정통부, 대전광역시와 함께 로봇 중심 피지컬 AI 전략을 추진하는 사업으로, 딥테크 기술의 사업화와 로봇 혁신 생태계 구축을 목표로 합니다.",
    highlights: [
      "2025년부터 3년 6개월 추진",
      "총 136억 5천만 원 규모",
      "로봇 얼라이언스 기반 확산 구조"
    ],
    sourceLabel: "KAIST 뉴스",
    sourceUrl:
      "https://www.kaist.ac.kr/news/html/news/?GotoPage=1&list_e_date=&list_s_date=&mng_no=55670&mode=V&skey=&sval=%EA%B3%BC%ED%95%99"
  },
  {
    id: 15,
    title: "AI for Global Development 포럼 및 연구 트랙",
    category: "AI 정책",
    status: "협력",
    updatedAt: "2025-12-11",
    type: "정책·국제협력",
    summary:
      "KAIST 과학기술과 글로벌발전 연구센터(G-CODEs)가 국제개발 분야에서 AI의 제도, 거버넌스, 포용적 혁신을 다루기 위해 운영하는 연구·포럼 트랙입니다.",
    highlights: [
      "KAIDEC와 공동 포럼 개최",
      "개발협력과 AI 거버넌스 접점 탐색",
      "정책·제도 중심의 AI 확산 연구"
    ],
    sourceLabel: "KAIST 뉴스",
    sourceUrl:
      "https://kaist.ac.kr/news/html/news/?GotoPage=1&list_e_date=&list_s_date=&mng_no=55750&mode=V&skey=keyword&sval=AI+%EC%A0%95%EC%B1%85"
  }
];

const els = {
  summaryGrid: document.getElementById("summary-grid"),
  projectGrid: document.getElementById("project-grid"),
  tableBody: document.getElementById("table-body"),
  timeline: document.getElementById("timeline"),
  resultCount: document.getElementById("result-count"),
  searchInput: document.getElementById("search-input"),
  statusFilter: document.getElementById("status-filter"),
  categoryFilter: document.getElementById("category-filter")
};

const formatDate = (value) =>
  new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(new Date(value));

const getUniqueValues = (key) => [...new Set(projects.map((project) => project[key]))];

const buildSelectOptions = () => {
  getUniqueValues("status").forEach((status) => {
    const option = document.createElement("option");
    option.value = status;
    option.textContent = status;
    els.statusFilter.append(option);
  });

  getUniqueValues("category").forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    els.categoryFilter.append(option);
  });
};

const renderSummary = (items) => {
  const statusCount = items.reduce((acc, item) => {
    acc[item.status] = (acc[item.status] || 0) + 1;
    return acc;
  }, {});

  const cards = [
    {
      label: "추적 중 과제",
      value: `${items.length}`,
      sub: "공식 공개 자료 기준"
    },
    {
      label: "진행중/확장",
      value: `${(statusCount["진행중"] || 0) + (statusCount["확장"] || 0)}`,
      sub: "본격 추진 또는 스케일업"
    },
    {
      label: "협력형 과제",
      value: `${statusCount["협력"] || 0}`,
      sub: "국제 또는 산학 협력 트랙"
    },
    {
      label: "분야 수",
      value: `${new Set(items.map((item) => item.category)).size}`,
      sub: "생성AI·제조·바이오 등"
    }
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

const renderProjects = (items) => {
  els.resultCount.textContent = `${items.length}개 과제 표시 중`;

  if (!items.length) {
    els.projectGrid.innerHTML = `
      <article class="project-card">
        <h3 class="project-title">조건에 맞는 과제가 없습니다</h3>
        <p class="project-desc">검색어나 필터를 조금 넓혀 보면 다시 표시됩니다.</p>
      </article>
    `;
    return;
  }

  els.projectGrid.innerHTML = items
    .map(
      (project) => `
        <article class="project-card">
          <div class="project-top">
            <span class="chip status-${project.status}">${project.status}</span>
            <span class="project-meta">${project.type}</span>
          </div>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.summary}</p>
          <div class="tags">
            <span class="tag">${project.category}</span>
            ${project.highlights.map((item) => `<span class="tag">${item}</span>`).join("")}
          </div>
          <div class="card-footer">
            <span class="project-meta">최근 공개 업데이트 ${formatDate(project.updatedAt)}</span>
            <a href="${project.sourceUrl}" target="_blank" rel="noreferrer">${project.sourceLabel}</a>
          </div>
        </article>
      `
    )
    .join("");
};

const renderTable = (items) => {
  if (!items.length) {
    els.tableBody.innerHTML = `
      <tr>
        <td colspan="5">표시할 데이터가 없습니다.</td>
      </tr>
    `;
    return;
  }

  els.tableBody.innerHTML = items
    .map(
      (project) => `
        <tr>
          <td>${project.title}</td>
          <td>${project.category}</td>
          <td>${project.status}</td>
          <td>${formatDate(project.updatedAt)}</td>
          <td>${project.highlights[0]}</td>
        </tr>
      `
    )
    .join("");
};

const renderTimeline = (items) => {
  const sorted = [...items].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

  if (!sorted.length) {
    els.timeline.innerHTML = `
      <article class="timeline-item">
        <strong>업데이트 없음</strong>
        <p class="timeline-desc">현재 선택된 조건에서는 최근 업데이트 항목이 없습니다.</p>
      </article>
    `;
    return;
  }

  els.timeline.innerHTML = sorted
    .slice(0, 6)
    .map(
      (project) => `
        <article class="timeline-item">
          <div class="timeline-head">
            <strong>${project.title}</strong>
            <span class="chip status-${project.status}">${project.status}</span>
          </div>
          <p class="timeline-desc">${formatDate(project.updatedAt)} 기준 공개 업데이트. ${project.highlights[0]}.</p>
        </article>
      `
    )
    .join("");
};

const filterProjects = () => {
  const query = els.searchInput.value.trim().toLowerCase();
  const status = els.statusFilter.value;
  const category = els.categoryFilter.value;

  const filtered = projects.filter((project) => {
    const matchesQuery =
      !query ||
      [project.title, project.category, project.summary, ...project.highlights]
        .join(" ")
        .toLowerCase()
        .includes(query);

    const matchesStatus = status === "all" || project.status === status;
    const matchesCategory = category === "all" || project.category === category;

    return matchesQuery && matchesStatus && matchesCategory;
  });

  renderSummary(filtered);
  renderProjects(filtered);
  renderTable(filtered);
  renderTimeline(filtered);
};

buildSelectOptions();
filterProjects();

["input", "change"].forEach((eventName) => {
  els.searchInput.addEventListener(eventName, filterProjects);
  els.statusFilter.addEventListener(eventName, filterProjects);
  els.categoryFilter.addEventListener(eventName, filterProjects);
});
