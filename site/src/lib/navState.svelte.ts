// Shared across the desktop rail nav and the mobile pill nav so both
// reflect the same "which section is on screen" state from one
// IntersectionObserver set up once in +page.svelte.
export const navState = $state({ active: 'about' });

export const sections = [
	{ id: 'about', labelKey: 'nav_about' },
	{ id: 'experience', labelKey: 'nav_experience' },
	{ id: 'projects', labelKey: 'nav_projects' }
] as const;
