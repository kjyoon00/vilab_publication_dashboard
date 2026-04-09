# KAIST VILab Publication Dashboard

KAIST VILab의 공개 논문 목록을 바탕으로 만든 정적 논문 대시보드입니다.

## Overview

이 대시보드는 VILab의 논문, 저널, 특허를 한눈에 탐색할 수 있도록 구성되어 있습니다.

- 검색
- 연도 필터
- 유형 필터
- venue 필터
- 빠른 venue 필터
- 논문/저널/특허 분리 탭
- 특허 제외 보기
- 저자 집계 및 저자 클릭 필터
- 연도별 stacked chart
- 상위 키워드 및 상위 venue

## Entry

- Dashboard page: [`index.html`](/Users/kjyoon/Documents/함해보자/index.html)

브라우저에서 [`index.html`](/Users/kjyoon/Documents/함해보자/index.html)을 직접 열면 바로 확인할 수 있습니다.

## Data Source

- Source page: [https://vi.kaist.ac.kr/pages/publications/](https://vi.kaist.ac.kr/pages/publications/)
- Raw data snapshot: [`data/vilab-publications.json`](/Users/kjyoon/Documents/함해보자/data/vilab-publications.json)
- Browser-ready data: [`data/vilab-publications-data.js`](/Users/kjyoon/Documents/함해보자/data/vilab-publications-data.js)

논문 목록 페이지는 원래 동적으로 데이터를 불러오므로, 이 프로젝트에서는 로컬 파일과 GitHub Pages에서도 잘 보이도록 데이터를 JS 파일로 함께 변환해 사용합니다.

## Main Files

- [`index.html`](/Users/kjyoon/Documents/함해보자/index.html): 메인 논문 대시보드 페이지
- [`src/publications-dashboard.css`](/Users/kjyoon/Documents/함해보자/src/publications-dashboard.css): 스타일
- [`src/publications-dashboard.js`](/Users/kjyoon/Documents/함해보자/src/publications-dashboard.js): 필터링 및 렌더링 로직
- [`data/vilab-publications.json`](/Users/kjyoon/Documents/함해보자/data/vilab-publications.json): 원본 데이터 스냅샷
- [`data/vilab-publications-data.js`](/Users/kjyoon/Documents/함해보자/data/vilab-publications-data.js): 브라우저용 데이터 파일

## GitHub Pages

GitHub Pages를 켜면 보통 아래 주소로 접근할 수 있습니다.

`https://<github-username>.github.io/<repo-name>/index.html`

## Notes

- 현재 데이터는 공개 페이지 기준 스냅샷입니다.
- 사이트 원본이 바뀌면 JSON을 다시 받아서 갱신해야 합니다.
- 더 확장하려면 논문 상세 모달, 저자별 페이지, 자동 업데이트 스크립트를 추가할 수 있습니다.
