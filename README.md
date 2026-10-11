# 대역의 죄 — Cloudflare Pages + GitHub 배포

2026-10-12 최신 공개 버전(v37). 웹툰 교체, 용어집 수정, 사청의 E/01.webp 초상 포함.

## 1. GitHub에 올리기
1. 이 ZIP을 압축 해제합니다.
2. GitHub에서 새 저장소를 만듭니다. 이름 예: daeyeok. Private 저장소도 가능합니다.
3. 저장소의 Add file > Upload files에서 dist 폴더와 README.md를 올리고 Commit changes를 누릅니다.
   빈 저장소에서는 uploading an existing file 링크를 사용할 수 있습니다.
4. 저장소 첫 화면에 dist 폴더가 보이고, 그 안에 index.html과 assets 폴더가 있어야 합니다.
   ZIP 자체를 올리거나 상위 cf-export 폴더를 올리지 마세요.

## 2. Cloudflare Pages 연결
1. Cloudflare 대시보드 > Workers & Pages > Create application > Pages > Connect to Git.
2. GitHub 연결 후 위 저장소 선택. 저장소가 보이지 않으면 Cloudflare GitHub 앱에 해당 저장소 접근 권한을 부여합니다.
3. 아래 설정으로 Save and Deploy:
   - Production branch: main (저장소의 실제 기본 브랜치)
   - Framework preset: None
   - Build command: 비워 둠
   - Build output directory: dist
   - Root directory: 비워 둠
   - 환경변수: 필요 없음
4. 배포 성공 후 Cloudflare가 표시하는 실제 pages.dev 주소로 접속합니다.
   원한다면 프로젝트 Custom domains에서 보유 도메인을 추가합니다.

## 3. 이후 수정
GitHub의 main 브랜치에서 dist 안의 파일을 수정하고 커밋하면 Cloudflare가 자동 배포합니다.
이미지/영상 파일을 바꿀 때는 기존 경로를 유지하거나 HTML/JS의 참조도 함께 바꿉니다.
이 ZIP은 현재 사이트의 독립된 복사본입니다. 기존 ChatGPT Sites에서의 수정은 이 저장소로 자동 동기화되지 않습니다.

## 구성 및 확인
별도 빌드, npm 설치, 서버, API 키가 필요 없는 정적 사이트입니다.
배포 파일의 개별 크기는 모두 Cloudflare Pages의 25 MiB 제한 이내입니다.
현재 HTML의 로컬 이미지·영상·스크립트 경로 존재 여부를 검사했습니다.
Cloudflare 계정에서 실제 배포/브라우저 검사는 아직 수행하지 않았습니다.
배포 후 모바일에서 입장 버튼과 BGM, 티저/MV 종료 후 BGM, 캐릭터 팝업,
용어집, 프리퀄 1~4화, 웹툰 두 장, 플레이 링크를 확인하세요.

외부 의존: YouTube 임베딩, 크랙 플레이 링크, i.cpvw.uk에 있는 메인캐스트 초상 URL.
나머지 포함된 이미지·영상·음원은 dist/assets에서 함께 제공합니다.

공식 문서:
https://developers.cloudflare.com/pages/get-started/git-integration/
https://developers.cloudflare.com/pages/get-started/direct-upload/
