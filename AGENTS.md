<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the public academy experience on the index route, with anchor navigation between its sections, because this is a single introductory page.
- Keep public package data and email request-link generation in a shared browser-safe module, so displayed offers and their tests use the same values.
- Subscription requests use email links, not stored forms or live payments, because this page is informational and the supplied contact channel is email.
- Define visual roles and responsive section styles in the global design system, so presentation remains consistent across the Arabic page.
- The site deploys as a fully static build: `/` is prerendered in vite.config.ts (autoStaticPathsDiscovery off) and `.github/workflows/deploy.yml` publishes `dist/client` to GitHub Pages, because the page has no runtime server needs and is hosted on a static host with a custom domain.
