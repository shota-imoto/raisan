class Content {
	title: string
	description: string
	image: string

	constructor(title = "", description = "", image = "") {
		this.title = title
		this.description = description
		this.image = image
	}
}

export default Content