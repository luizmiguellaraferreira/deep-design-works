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

## Portfolio architecture
- Keep the portfolio as a single scrollable index with anchored navigation, because the requested experience is section-based.
- Share concept mockups through a browser-safe preview component; fictional projects are visual previews rather than live client websites.
- Centralize contact configuration and validate complete international phone numbers before constructing WhatsApp URLs; incomplete configuration opens an honest availability dialog.
- Define all visual colors and effects through semantic global CSS tokens so the brand stays consistent.
