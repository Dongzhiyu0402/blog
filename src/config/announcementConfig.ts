import type { AnnouncementConfig } from "../types/announcementConfig";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "公告",

	// 公告内容
	content: "欢迎来到我的博客！这里是齐奕的个人博客，记录着我在编程、生活和学习的点点滴滴。希望你能在这里找到有用的信息，也期待你的留言和交流。如果你有任何问题或建议，请随时与我联系。让我们一起成长，共同进步！🚀✨",

	// 是否允许用户关闭公告
	closable: true,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "了解更多",
		// 链接 URL
		url: "/about/",
		// 内部链接
		external: false,
	},
};
