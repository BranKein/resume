<div align="center">
  <img src="https://github.com/uyu423/resume-nextjs/raw/master/logo.jpg" alt="Resume Next.js Logo">
  <br/><hr/>
  <a href="https://github.com/uyu423/resume-nextjs"><img src="https://img.shields.io/github/stars/uyu423/resume-nextjs.svg?style=popout" alt="Github Star"/></a>
  <a href="https://circleci.com/gh/uyu423/resume-nextjs"><img src="https://circleci.com/gh/uyu423/resume-nextjs.svg?style=shield" alt="CircleCI"/></a>
  <a href="https://app.codacy.com/manual/uyu423/resume-nextjs?utm_source=github.com&utm_medium=referral&utm_content=uyu423/resume-nextjs&utm_campaign=Badge_Grade_Dashboard"><img src="https://api.codacy.com/project/badge/Grade/fe3253d51d544a2a971b637ed1570ac7" alt="Codacy Badge"/></a>
  <a href="https://codeclimate.com/github/uyu423/resume-nextjs/maintainability"><img src="https://api.codeclimate.com/v1/badges/19edd90e9309634ee66a/maintainability" alt="Maintainability"/></a>
</div>

## Introduce

- uyu423님이 제작한 웹 이력서 템플릿을 사용하였다. 
- 추가적인 기능을 위해 fork 후 구조를 약간 수정하여 이용하였다.
- Next.js, Bootstrap CSS 가 사용되었다.
- Sample: https://uyu423.github.io/resume-nextjs
  - 더 많은 예제는 [EXAMPLE.md](https://github.com/uyu423/resume-nextjs/blob/master/EXAMPLE.md) 를 참고한다.

## Install

```bash
# fork to your github account & git cloning your forked repository
npm install
```

## Run Development Mode

```bash
npm run dev
```

## Export

```bash
npm run export
```

- `/docs` 하위에 Static HTML 리소스가 생성된다.
- Sub Path 가지는 도메인 구조일 경우 (ex. https://uyu423.github.io/resume 로 호스팅) `package.json` 내의 `homepage` 필드 값을 호스팅 원하는 도메인으로 변경한다.
  - `homepage` 필드에 `pathname` 이 있을 경우 `next.config.js` 의 `assetPrefix` 추가하는 로직이 있음

### Export to Github Pages

#### Repository Setting

- Options - Github Pages - Source - master branch /docs folder 를 선택
  - Github Pages Source 에 대한 자세한 내용은 [help.github.com](https://help.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) 을 참고한다.
- `npm run export` 를 실행하여 `docs` 내 Static HTML 을 갱신한다.
- 외부 도메인이 있는 경우 Custom Domain 항목에 기입한다.
  - **Github Pages Hosting 에 필요한 `docs/CNAME` 파일은 `npm run export` 과정에서 자동으로 생성됩니다.**
  - `docs/CNAME` 파일 생성에는 `package.json` 내 `homepage` 필드를 참고합니다. Custom Domain 사용시 homepage 값을 수정해주세요.
  - `package.json` 내 `homepage` 필드가 `*.github.io/*` 로 추정될 경우 Custom Domain 을 사용하지 않는 것으로 간주하고 `docs/CNAME`을 생성하지 않습니다.
  - 외부 도메인에 대한 자세한 내용은 [help.github.com](https://help.github.com/en/github/working-with-github-pages/configuring-a-custom-domain-for-your-github-pages-site) 를 참고한다.
- `*.github.io` 도메인을 그대로 사용하는 경우 `http://{username}.github.io/{repository_name}` 접속하면 웹 이력서가 나타난다.
