/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
	VITE_PUBLIC_API_URL: string
	VITE_API_REPLACE_KEY: string
	VITE_PORT: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
