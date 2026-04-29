# IMMANUEL CHURCH — Im-v3-9-real

## 수정 사항
- 첫 화면 hero 배경에 박혀 있던 기존 이미지 텍스트가 겹쳐 보이던 문제 해결
- `public/images/hero-city-cross-clean.png` 생성: 지정 이미지에서 왼쪽 타이포 영역을 잘라낸 clean hero 배경
- hero 타이포 크기 축소 및 좌측 정렬 안정화
- `/way` 404 방지: `app/way/[[...slug]]/page.tsx` optional catch-all 라우팅 적용
- `/way`와 `/way/belief` 등 11개 상세 페이지를 같은 라우터에서 처리

## 루트에 남겨야 할 것
- app/
- public/
- package.json
- tsconfig.json
- next-env.d.ts
- README.md

## 실행
npm install
npm run dev
