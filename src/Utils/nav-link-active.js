const validNavLink = (pathname,matchStr) => pathname.endsWith(matchStr) ? `text-primary` : `text-white dark:text-neutral-400`;

export default validNavLink;