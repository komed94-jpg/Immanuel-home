# 임마누엘의 길 운영 반영

## 범위와 기준선
- 작업일: 2026-09-26
- 운영: komed94-jpg/Immanuel-home, main 8420b29358c8e26c23a0fd5a33fceb6cb09c9b22
- 운영 URL: https://immanuel-home.vercel.app
- 작업 브랜치: agent/way-intro-study-production-20260926
- 기존 정상 배포: dpl_3z9g45WsMMrSsJfFXSnb34znYNCz (READY)
- 테스트 소스 참조: komed94-jpg/Immanuel-home-test, 2d495a6f1249e31f7518e2cb071bd63b78d85174
- 저장소에서 기존 PROJECT_MASTER/AGENTS 문서는 발견하지 못함.

11개 개론 아래에 기존 해당 과 3쪽 학습을 표시한다. 별도 `/bible-study/immanuel-way`에서 전체 33쪽 학습도 가능하다. 기존 원문·사진·디자인·짧은/긴 개론 주소, 관리자 인증, 영상 자료는 보존한다. 과정·과·쪽·문항 키는 테스트와 같다. 통합 개론 페이지에서만 학습 안의 중복 원문을 표시하지 않는다.

## 회원 및 데이터
읽기는 공개. 답변·진도 저장은 로그인한 본인만 허용. 회원 로그인은 기존 운영 관리자 인증과 별도이며 관리자 권한을 부여하지 않는다. 운영 학습 계정은 테스트 계정과 별도이다. 테스트 개인정보·답변·진도는 이전하지 않는다.

- Vercel: prj_53GfPn5F4JODz5i9PvjCyuueiFJP
- 신규 Neon: immanuel-home-study-production / royal-wind-01315379 / Free
- 운영 DB 브랜치: main / br-nameless-mountain-b8ydhzeh
- 검증 DB 브랜치: verify-way-study-20260926 / br-late-voice-b8ro3z0m
- Vercel Preview DB 브랜치 자동 생성 옵션 사용. Production 브랜치 자동 생성 옵션은 사용하지 않음.
- 비밀값은 환경변수 DATABASE_URL, DATABASE_URL_UNPOOLED에만 저장.
- 신규 테이블: members, member_sessions, member_login_attempts, bible_study_responses, bible_study_page_progress, bible_study_completions.
- 기존 회원 스키마와 학습 키를 유지. 새가족·DISC·행정 등 기능 및 데이터는 가져오지 않음.
- 개인정보 목적: 학습 계정 관리, 답변·공부 날짜·진도 저장. 소유자는 작성 회원. 앱은 본인 기록만 제공하며 별도 관리자 열람 API를 추가하지 않음.
- 개인정보 관련 운영 문의·정정·삭제 요청은 교회 담당자가 확인하여 처리. 자동 삭제나 기존 DB 데이터 삭제는 이 작업에 포함하지 않음.

## 마이그레이션과 복구
`npm run build`는 DB를 변경하지 않는다. Drizzle 생성 마이그레이션을 검증 DB에서 먼저 실행한다. 운영 적용은 직접 연결 DATABASE_URL_UNPOOLED 및 CONFIRM_STUDY_MIGRATION=yes를 설정한 뒤 `node scripts/migrate-study.mjs`로 명시적으로 실행한다. 같은 마이그레이션 재실행은 Drizzle 기록에 따라 건너뛴다.

롤백 시 Vercel에서 기존 정상 배포로 복귀하고, Git에서는 이 PR만 revert한다. 최근 영상 작업을 reset하거나 강제 덮어쓰지 않는다. DB는 삭제·되감기하지 않고 보존한다. 롤백 중 학습 기능은 노출되지 않지만, 다시 배포하면 신규 기록을 이어 쓸 수 있다. 데이터 복구는 코드 롤백과 별도 작업이다. 생성 시 확인한 Neon 기록 보존 창은 6시간이므로 장기 백업을 보장하지 않는다.

## 검증 상태
- Next.js 운영 빌드 및 TypeScript 검사 통과.
- 11개 원문 본문·제목·대표문구가 운영/테스트 간 동일함을 비교. 기존 운영 data/immanuel.ts 변경 없음.
- 원문 문단 수: 6,6,9,9,10,7,8,7,9,7,7.
- 33쪽·과정 키 immanuel-way·과 키 immanuel-way-11 및 주제별 연결 검증.
- 회원·답변·진도 검증은 별도 DB의 합성 계정으로 수행. 실제 교인 정보 사용 없음.
- 현재 PR 미리보기·운영 배포 및 브라우저 최종 검수는 진행 중. 완료 여부는 PR과 실제 배포 ID로 확인한다.
