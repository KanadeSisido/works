export type worksType = {
	name: string;
	summary: string;
	detail: string;
	url: string;
	github: string;
	imagedir: string;
	codawari: string[];
	stack: string[];
	tags: string[];
};

export const works: { [key: string]: worksType[] } = {
	Web: [
		{
			name: "blog",
			summary: "Kanade - シンプルな個人blog",
			detail:
				"シンプルな個人ブログサイトです．Next.js + microCMSを利用しています．",
			url: "https://blog.kanade.sisido.dev",
			github: "https://github.com/KanadeSisido/blog",
			imagedir: "images/blog.png",
			codawari: [
				"Next.js(AppRouter)使用",
				"shadcn/uiを用いたシンプルなデザイン",
			],
			stack: [],
			tags: ["Next.js", "shadcn/ui", "TypeScript"],
		},
		{
			name: "「Unity勉強会 – クロームくんを動かそう！ –」サポートページ",
			summary: "GDGoC TMU Unity勉強会サポートサイト",
			detail:
				"Unityの勉強をより楽しくできるように制作した勉強会のサポートページです．GASベースで超低コストかつ簡単に管理できるため，長期保存に適しています．",
			url: "https://gdsc-tmu.github.io/event5-unity/",
			github: "https://github.com/gdsc-tmu/event5-unity/tree/kanade-dev",
			imagedir: "images/unitybenkyoukai.png",
			codawari: [
				"GASと連携，低コスト",
				"MUIを用いたわかりやすいデザイン",
				"GoogleFormを用いて簡単投稿",
			],
			stack: [],
			tags: ["React", "Vite", "TypeScript", "Google_Apps_Script"],
		},
		{
			name: "ame:ato",
			summary: "曇った窓に文字を描くような掲示板サイト",
			detail:
				"時間経過とともに消えていく文字に人の存在を感じられるような，心にしか残らない記録が人を励ますような，掲示板サイトを目指しました．\n技術スタックは，バックエンドにLaravel(PHP)，フロントエンドにReact+Vite+TypeScriptを利用しています．\nデプロイでは，AWS EC2, S3，Cloud Frontを利用し，ACM，Let's Encryptを用いてhttps通信に対応，高速かつ信頼性の高いサービスを目指しました．",
			url: "https://ameato.yzuemx.com",
			github: "",
			imagedir: "images/ameato.png",
			codawari: [
				"AWS EC2，S3を利用し，信頼性が高いサービスに",
				"APIを利用したSPA",
				"PHPUnitを用いてテストを自動化",
			],
			stack: [],
			tags: ["PHP", "Vite", "TypeScript", "MySQL"],
		},
		{
			name: "【API】石川さゆりさんが紅白歌合戦で歌唱される楽曲名を返すAPI（配信終了）",
			summary:
				"石川さゆりさんが紅白歌合戦で歌唱される楽曲名を推定し，返却するAPI",
			detail:
				"PHP，AWS，Nginx，Apacheの勉強として作成したAPIです．年末に合わせて紅白歌合戦をテーマに作成しました．（配信終了）",
			url: "",
			github: "https://github.com/KanadeSisido/api_ishikawasan",
			imagedir: "images/isikawasanapi.jpg",
			codawari: [
				"わかりやすいエンドポイント名を目指しました．",
				"完全にRESTFulとは言いづらいので，改善の余地あり",
			],
			stack: [],
			tags: ["API", "PHP", "AWS"],
		},
		{
			name: "TEX-NEXT[Edit]",
			summary:
				"だれでも簡単にロボット・プログラミングを体験できる，ブロックベースのコードエディタ",
			detail:
				"東京都立大学 大学祭 特別企画「ロボット・プログラミングを体験してみよう」に向けて制作した，直感的にロボット用コードが作成できるエディタ．",
			url: "",
			github: "https://github.com/KanadeSisido/TEX-NEXT-Edit",
			imagedir: "images/tex-next-edit.jpg",
			codawari: [
				"UIにMUI(Material UI)を採用．カラーとアイコンで直感的なデザイン",
				"ドラッグ・アンド・ドロップで，誰でも簡単にコードが組み立てられる",
				"別アプリとの連携で実際のロボットのコードにコンパイル可能",
			],

			stack: [],
			tags: ["TypeScript", "Vite", "RobotAndWeb"],
		},
		{
			name: "TEX-NEXT[Share]",
			summary: "TEX-NEXT[Edit]で作ったコードを，家でも家族と共有できるビューア",
			detail:
				"TEX-NEXT[Edit]で作成したコードを，家族と共有できるコードビューア．家に帰っても大学祭の思い出を振り返ってもらうために作成しました．",
			url: "https://texnitis.miyakofes.yzuemx.com",
			github: "https://github.com/KanadeSisido/TEX-NEXT-Share",
			imagedir: "images/tex-next-share.jpg",
			codawari: [
				"ログインID，パスワードは運営側が用意，個人情報リスクを軽減",
				"大学祭が終わっても，プログラムが書けた経験と達成感を演出",
				"ダークモード，レスポンシブデザイン対応",
			],

			stack: [],
			tags: ["Nextjs", "TypeScript", "FirebaseAuth"],
		},
	],

	Robotics: [
		{
			name: "TriColor(for Abu Robocon 2024)",
			summary:
				"NHK学生ロボコン，Abu Robocon 2024向けに開発した画像処理によるボール認識手法",
			detail:
				"NHK学生ロボコン，Abu Robocon 2024 「Harvest Day」に向けて開発した画像処理によるボール認識手法およびプログラム．ハフ変換，最小外接円，輪郭抽出を用いることで誤認識を軽減．",
			url: "https://x.com/yzuemx/status/1800803124229403122",
			github: "",
			imagedir: "images/tricolor.png",
			codawari: [
				"機械学習を用いない閾値ベース",
				"最小外接円の算出により，誤認識を軽減",
			],

			stack: [],
			tags: ["OpenCV", "画像処理", "NHK学生ロボコン"],
		},
		{
			name: "Asterism(for Abu Robocon 2024)",
			summary:
				"NHK学生ロボコン，Abu Robocon 2024向けに開発した画像処理によるサイロの認識手法",
			detail:
				"NHK学生ロボコン，Abu Robocon 2024向けに開発した画像処理によるサイロの認識手法．床面にあるライントレース用線を認識し，ピンホールカメラモデルを用いたサイロ（白いカゴ）の範囲推定を行うプログラム．",
			url: "https://x.com/yzuemx/status/1800803127790280996",
			github: "",
			imagedir: "images/asterism.png",
			codawari: [
				"LiDAR，ロータリーエンコーダなどの外部センサを用いない低コストな認識手法",
			],

			stack: [],
			tags: ["OpenCV", "画像処理", "NHK学生ロボコン"],
		},
		{
			name: "ROS2 Android Controller",
			summary:
				"ロボット用プラットフォーム「ROS2」と連携し，スマートフォンからロボットを動かせるAndroidコントローラー",
			detail:
				"ロボット用プラットフォーム「ROS2」と連携し，スマートフォンからロボットを動かせるAndroidコントローラー．　（Special Thanks: https://github.com/Kotakku/ros2-for-unity，　https://github.com/RobotecAI/ros2-for-unity）",
			url: "https://x.com/tmuTEXNITIS/status/1846481136853352763",
			github: "",
			imagedir: "images/ros2controller.png",
			codawari: [
				"先進性を演出するデザイン",
				"ゲームコントローラー（GameSir）との互換性あり",
				"誤操作を最小限に抑えるよう設計されたボタン配置",
			],

			stack: [],
			tags: ["ROS2", "Unity", "Robotics"],
		},
	],

	Other: [
		{
			name: "技術書ビブリオバトル 書籍『プログラミングTypeScript ――スケールするJavaScript開発』の紹介",
			summary:
				"GDG TMU主催「技術書ビブリオバトル」にて行ったプレゼンテーション",
			detail:
				"東京都立大学 GDG TMU主催「技術書ビブリオバトル」にて『プログラミングTypeScript　―スケールするJavaScriptアプリケーション開発』Boris Cherny　著、今村 謙士　監訳、原 隆文　訳（https://www.oreilly.co.jp//books/9784873119045/）を紹介した資料．",
			url: "https://speakerdeck.com/kanadesisido/ji-shu-shu-biburiobatoru-puroguramingu-typescript-sukerusurujavascriptapurikesiyonkai-fa",
			github: "",
			imagedir: "images/unavailable.png",
			codawari: ["優秀賞をいただきました（ありがとうございます）"],
			stack: [],
			tags: ["GDGoc_TMU", "TypeScript", "ビブリオバトル"],
		},
		{
			name: "GDGoC Japan 合同新歓「HTML+CSSハンズオン資料」",
			summary: "GDGoC Japan 合同新歓のハンズオン資料です．",
			detail:
				"Google渋谷オフィスで行われたGDGoC Japan 合同新歓のハンズオン資料です．",
			url: "https://kanadesisido.github.io/welcome-gdgoc-2025/site/01/index.html",
			github: "",
			imagedir: "images/unavailable.png",
			codawari: [
				"はじめて学ぶ方にもわかりやすい資料を目指しました",
				"生成AIを活用したコーディングにも触れています",
			],
			stack: [],
			tags: ["GDGoC"],
		},
	],
};
