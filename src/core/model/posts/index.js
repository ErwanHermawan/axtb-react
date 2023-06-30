// --- endpoints
import ENDPOINT from "infrastucture/api/endPoint";

// --- httpRequests
import httpRequest from "infrastucture/api/httpRequest";

export const usePost = () => {
	return httpRequest({
		method: "get",
		url: ENDPOINT.POSTS,
	});
};
