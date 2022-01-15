export const getImageFromInputElement = (input: HTMLInputElement | null) => {
	if (input == null) {
		return null
	}

	const files: FileList | null = input.files

	if (files == null) {
		return null
	}

	return files[0]
}
