function removeLoginPopup(nth) {
  let el = findPopup()
  if (el) {
	console.log('found', el)
	el.parentElement.removeChild(el)
	return
  }
  if (nth < 2) {
	setTimeout(removeLoginPopup, 5001, nth+1)
  } else {
	console.log('login popup not found')
  }
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

console.log('removeloginpopup')
setTimeout(removeLoginPopup, 1001, 0)
