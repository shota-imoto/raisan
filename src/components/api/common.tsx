export const urlHost = 'http://localhost:8080/'

export const getHeader: Object = {
	'Access-Control-Request-Method': 'POST',
	'Access-Control-Request-Headers': 'origin, content-type, accept, access-control-request-method',
	'Origin': urlHost,
	'Content-Type': 'application/json',
	'Accept': 'application/json'
}

export const postHeader: HeadersInit = new Headers({
	'Access-Control-Request-Method': 'POST',
	'Access-Control-Request-Headers': 'origin, content-type, accept, access-control-request-method',
	'Origin': urlHost,
})