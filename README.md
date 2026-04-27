# 사역에 대한 나의 생각 — Next.js Homepage

GitHub + Vercel 배포를 전제로 만든 첫 화면 중심의 홈페이지 초안입니다.

## 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`으로 확인합니다.

## Vercel 배포

1. 이 폴더 전체를 GitHub 저장소에 업로드합니다.
2. Vercel에서 해당 저장소를 Import 합니다.
3. Framework Preset은 Next.js로 자동 인식됩니다.
4. Supabase를 붙일 경우 `.env.example`을 참고해 Vercel Environment Variables에 값을 넣습니다.

## Supabase 확장 아이디어

- 문의폼 저장
- 이메일 구독
- 마스터 스크립트 게시글 관리
- 예배/훈련 신청
- 관리자 전용 콘텐츠 관리
