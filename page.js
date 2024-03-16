function removeLoginPopup() {
	let el = findPopup()
	if (el) {
		el.parentElement.removeChild(el)
	}
	// keep running in background, since
	// some site keeps enabling the login popup
	setTimeout(removeLoginPopup, 5001)
}

function findPopup() {
	// if (location.hostname.endsWith(".expedia.com")) {
	// 	return findExpediaPopup()
	// }
	return findGooglePopup()
}

function findExpediaPopup() {
	return document.querySelector('.uitk-menu-open')
}

function findGooglePopup() {
	let iframes = document.querySelectorAll('iframe')
	for (let x of iframes) {
		if (x.src.startsWith('https://accounts.google.com/gsi/iframe/select?')) {
			return x
		} else if (x.src.startsWith('https://ogs.google.com/widget/callout')) {
			// google map
			return x
		}
	}
	return null
}

setTimeout(removeLoginPopup, 1001)
