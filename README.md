# HTML Book Skills

수업 자료, 강의 원고, TXT 문서를 정적 HTML 강의록으로 바꾸기 위한 에이전트 스킬 저장소입니다. 핵심 스킬은 `txt-to-html-lecture-notes`이며, 단순 HTML 문서뿐 아니라 목차, 썸네일, 검색, 페이지 이동이 있는 정적 웹 강의록 뷰어를 만들 수 있도록 설계되어 있습니다.

## 데모

GitHub Pages 데모는 TXT 자료가 HTML 강의록 뷰어로 변환되는 흐름을 영상처럼 보여줍니다.

- 데모 주소: https://ai-studying-man.github.io/HTML_BOOK/
- 데모 파일: `docs/index.html`

## 설치

Skills CLI를 통해 설치합니다.

```bash
npx skills add https://github.com/ai-studying-man/HTML_BOOK.git --skill txt-to-html-lecture-notes -g -y
```

지원 가능한 모든 글로벌 에이전트 대상에 설치하려면 다음 명령을 사용합니다. Claude Code, Codex, Gemini CLI, Antigravity, Cursor 등 Skills CLI가 감지한 대상에 설치됩니다.

```bash
npx skills add https://github.com/ai-studying-man/HTML_BOOK.git --skill txt-to-html-lecture-notes --agent "*" -g -y
```

일부 에이전트는 글로벌 스킬 설치를 지원하지 않습니다. CLI가 일부 대상을 실패 또는 건너뜀으로 표시하더라도 `Installed 1 skill`이 함께 표시되면 지원 가능한 글로벌 대상에는 설치된 것입니다.

특정 에이전트만 지정해서 설치할 수도 있습니다.

```bash
npx skills add https://github.com/ai-studying-man/HTML_BOOK.git --skill txt-to-html-lecture-notes --agent claude-code codex gemini-cli antigravity -g -y
```

설치 상태 확인:

```bash
npx skills list -g --json
```

## 사용 예시

에이전트에게 다음처럼 요청합니다.

```text
txt-to-html-lecture-notes를 사용해서 이 TXT 강의 자료를 정적 HTML 강의록 뷰어로 변환해줘.
```

스킬은 보통 다음 흐름으로 동작합니다.

1. TXT 수업 자료에서 제목, 페이지 경계, 핵심 개념, 예시, 주의사항을 찾습니다.
2. 내용을 페이지 단위 강의록 데이터로 정리합니다.
3. `assets/lecture-page-template.html`을 기반으로 정적 HTML 뷰어를 만듭니다.
4. 목차, 썸네일, 검색, 페이지 이동, `#p=페이지번호` 링크를 검증합니다.

## 저장소 구조

```text
.
├── AGENTS.md
├── CLAUDE.md
├── GEMINI.md
├── DESIGN.md
├── docs/
│   ├── index.html
│   └── PORTABILITY.md
├── scripts/
│   └── validate-skills.mjs
├── skills/
│   ├── txt-to-html-lecture-notes/
│   └── example-dapa-skill/
└── templates/
    └── skill/
```

## 스킬 작성 규칙

- 스킬은 `skills/<skill-name>/` 아래에 하나씩 둡니다.
- 폴더명은 소문자와 하이픈만 사용합니다.
- `SKILL.md`를 스킬의 기준 문서로 둡니다.
- 긴 도메인 지식은 `references/`로 분리합니다.
- 반복 가능한 처리 코드는 `scripts/`에 둡니다.
- 출력 템플릿과 정적 리소스는 `assets/`에 둡니다.
- 토큰, API 키, 개인 문서, 생성 캐시, 로컬 로그는 커밋하지 않습니다.

## 새 스킬 만들기

```bash
cp -R templates/skill skills/my-new-skill
```

수정할 파일:

- `skills/my-new-skill/SKILL.md`
- 필요한 경우 `skills/my-new-skill/references/`
- 필요한 경우 `skills/my-new-skill/scripts/`
- 필요한 경우 `skills/my-new-skill/assets/`

검증:

```bash
npm run validate
```

## 배포

이 저장소는 다음 GitHub 저장소에 배포됩니다.

https://github.com/ai-studying-man/HTML_BOOK.git

GitHub Pages 데모는 `.github/workflows/pages.yml` 워크플로우가 `docs/` 폴더를 배포하도록 구성되어 있습니다.

최초 배포 전에 GitHub 저장소에서 한 번만 Pages 소스를 지정합니다.

1. GitHub 저장소의 `Settings`로 이동합니다.
2. 왼쪽 메뉴에서 `Pages`를 엽니다.
3. `Build and deployment`의 `Source`를 `GitHub Actions`로 선택합니다.
4. 이후 `main` 브랜치에 푸시하면 `.github/workflows/pages.yml`이 `docs/` 폴더를 GitHub Pages로 배포합니다.

설정 전에는 Actions가 실행되더라도 `Resource not accessible by integration` 또는 `Get Pages site failed` 오류가 발생할 수 있습니다.
