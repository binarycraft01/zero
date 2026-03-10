# 프로젝트명 : Zero.
> 카운트다운이 0이 되는 순간, 내가 등록해둔 사람들에게 메시지가 자동으로 전달되는 서비스. 죽음, 실종, 인수인계 등 어떤 상황이든 내 말이 정확히 닿습니다. 카운트다운이 끝나면, 내가 지정한 사람에게 내 메시지가 자동으로 전달된다.


> A service that automatically delivers your messages when the countdown hits zero — whether it's death, disappearance, or a handover. Whatever the situation, your words will reach the right person at the right moment.
<br>

## 프로젝트 소개(가안)

**Zero.** 는 카운트다운이 종료되는 순간, 사전에 등록해둔 수신자에게 메시지를 자동 발송하는 서비스입니다.

죽음, 실종, 사업 인수인계, 군입대 — 어떤 상황이든 내가 설정한 메시지가 정확히 전달됩니다.
카카오톡 예약 발신의 업그레이드 버전이라고 생각하면 됩니다. 단, 트리거는 날짜가 아니라 **"내가 살아있음을 증명하지 못하는 순간"** 입니다.

```
사용자가 주기적으로 체크인 → 체크인 끊김 → 카운트다운 시작 → D-0 → 메시지 자동 발송
```

<br>

## 사용 사례

```
"이 문자를 받으면 내가 실종된 거야. 경찰에 신고해줘."

"첨부파일을 열어봐. 사업 인수인계 내용이 전부 담겨 있어."

"살아있다면 절대 오지 않을 메시지야. 사랑했어."

"군대 가기 전에 미리 써놨어. 2년 뒤에 봐."
```

<br>

## 핵심 기능 (MVP)

- **수신자 등록** — 이메일 또는 SMS, 복수 등록 가능
- **수신자별 개별 메시지** — 수신자마다 서로 다른 메시지 작성
- **카운트다운 설정** — 1주 ~ 수개월, 사용자가 직접 설정
- **체크인 시스템** — 이메일 답장으로 생존 신호 전송 → 카운트다운 리셋
- **단계별 경고 알림** — D-7, D-3, D-1 자동 알림
- **자동 발송** — 카운트다운 종료 시 메시지 자동 전송

<br>

## 기술 스택

| 역할 | 기술 |
|---|---|
| Frontend | Next.js |
| Database & Auth | Supabase |
| Email 발송 | Resend |
| SMS 발송 | 솔라피 (Phase 2) |
| 배포 | Vercel |

<br>

## 비즈니스 모델

| | Free | Pro |
|---|---|---|
| 수신자 수 | 1명 | 무제한 |
| 메시지 형태 | 텍스트 | 텍스트 + 파일 첨부 (Phase 2) |
| 체크인 방식 | 이메일 답장 | 이메일 + 앱 버튼 (Phase 2) |
| 가격 | 무료 | 5,900원 / 월 |

<br>

## 로드맵

### Phase 1 — MVP
- [ ] 회원가입 / 로그인
- [ ] 수신자 등록 + 개별 메시지 작성
- [ ] 카운트다운 설정
- [ ] 이메일 체크인 시스템
- [ ] 경고 알림 (D-7, D-3, D-1)
- [ ] 카운트다운 종료 시 자동 발송

### Phase 2 — 고도화
- [ ] 앱 버튼 체크인
- [ ] 수신자 사전 알림 선택 (서프라이즈 or 사전 고지)
- [ ] 파일 첨부
- [ ] SMS 발송 (솔라피)
- [ ] Pro 플랜 결제 연동

### Phase 3 — 확장
- [ ] 영상 / 음성 메시지
- [ ] 다양한 트리거 방식 (날짜 지정 등)
- [ ] 모바일 앱 (iOS / Android)

<br>

## 시작하기

```bash
# 레포지토리 클론
git clone https://github.com/your-username/zero.git
cd zero

# 패키지 설치
npm install

# 환경변수 설정
cp .env.example .env.local
# .env.local 에 Supabase, Resend API 키 입력

# 개발 서버 실행
npm run dev
```

<br>

## 환경변수

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
RESEND_API_KEY=
```

<br>

---

> *"카운트다운이 0이 되는 순간, 당신의 말이 닿습니다."*

**Zero.** — 2026
