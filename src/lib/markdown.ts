// @ts-ignore
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

export function markdownToHtml(markdown: string, className?: string): string {
    md.renderer.rules.paragraph_open = () => `<p class="${className}">`;
    
    // Custom link renderer to apply blue color and no underline
    md.renderer.rules.link_open = (tokens, idx, options, env, renderer) => {
        const token = tokens[idx];
        const href = token.attrGet('href');
        const target = token.attrGet('target') || '_blank';
        return `<a href="${href}" target="${target}" style="color: #3b82f6; text-decoration: none;">`;
    };

    return md.render(markdown);
}


