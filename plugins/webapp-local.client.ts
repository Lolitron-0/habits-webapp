function populateAPIObject() {
	if (process.env.PROD) return;

	window.Telegram = {};
	window.Telegram.WebApp = {
		expand() { console.log("expanded"); },
		initData: "",
		initDataUnsafe: {
			query_id: "",
			user: {
				id: 620614758,
				first_name: "Влад",
				last_name: "",
				username: "lolitron",
				language_code: "en",
				is_premium: true,
				allows_write_to_pm: true,
			},
			auth_date: "1715453224",
			hash: "",
		},
		version: "7.2",
		platform: "weba",
		colorScheme: "dark",
		themeParams: {
			bg_color: "#212121",
			text_color: "#ffffff",
			hint_color: "#aaaaaa",
			link_color: "#8774e1",
			button_color: "#8774e1",
			button_text_color: "#ffffff",
			secondary_bg_color: "#0f0f0f",
			header_bg_color: "#212121",
			accent_text_color: "#8774e1",
			section_bg_color: "#212121",
			section_header_text_color: "#aaaaaa",
			subtitle_text_color: "#aaaaaa",
			destructive_text_color: "#e53935",
		},
		isExpanded: true,
		viewportHeight: 936.5,
		viewportStableHeight: 936.5,
		isClosingConfirmationEnabled: false,
		headerColor: "#212121",
		backgroundColor: "#212121",
		BackButton: {
			isVisible: false,
		},
		MainButton: {
			text: "CONTINUE",
			color: "#8774e1",
			textColor: "#ffffff",
			isVisible: false,
			isProgressVisible: false,
			isActive: true,
		},
		SettingsButton: {
			isVisible: false,
		},
		HapticFeedback: {},
		CloudStorage: {},
		BiometricManager: {
			isInited: false,
			isBiometricAvailable: false,
			biometricType: "unknown",
			isAccessRequested: false,
			isAccessGranted: false,
			isBiometricTokenSaved: false,
			deviceId: "",
		},
	};

	document.documentElement.style.cssText = `
	--tg-color-scheme: dark;
    --tg-theme-bg-color: #212121;
    --tg-theme-text-color: #ffffff;
    --tg-theme-hint-color: #aaaaaa;
    --tg-theme-link-color: #8774e1;
    --tg-theme-button-color: #8774e1;
    --tg-theme-button-text-color: #ffffff;
    --tg-theme-secondary-bg-color: #0f0f0f;
    --tg-theme-header-bg-color: #212121;
    --tg-theme-accent-text-color: #8774e1;
    --tg-theme-section-bg-color: #212121;
    --tg-theme-section-header-text-color: #aaaaaa;
    --tg-theme-subtitle-text-color: #aaaaaa;
    --tg-theme-destructive-text-color: #e53935;
    --tg-viewport-height: 936.5px;
    --tg-viewport-stable-height: 936.5px;`;
}

export default defineNuxtPlugin({
	name: "webapp-local",
	hooks: {
		"app:mounted": populateAPIObject,
	},
});
