function FindProxyForURL(url, host) {
	if (Math.random() > 0.5) {
		proxy = 'PROXY 74.141.186.101:80; PROXY 42.201.222.70:80';
	} else {
		proxy = 'PROXY 173.246.129.9:80; PROXY 175.143.37.162:80';
	}
	if ((host == 'localhost') || (shExpMatch(host, 'localhost.*')) || (shExpMatch(host, '*.local')) || (host == '127.0.0.1')) {
		return 'DIRECT';
	}
	if (shExpMatch(host, '/^\d+\.\d+\.\d+\.\d+$/g')) {
		if (isInNet(host, '10.0.0.0', '255.0.0.0') || isInNet(host, '192.168.0.0', '255.255.0.0')) {
			return 'DIRECT';
		}
	}
	if ((/songza\.com\/(api|advertising)\/|hulu\.com\/mozart\/.*|\.(ico|jpg|png|gif|mp3|js|css|mp4|flv|swf|json)(\?.*)?$|^crackle\.com\/flash\/$/).test(url) || (/^(contactus|presentationtracking|blog|nordicsblog)\.netflix\.com$|^(r|p|t2|ll\.a|t|t-l3|ads|assets|urlcheck)\.hulu\.com$|^(stats|blog|audio.*|const.*|mediaserver.*|cont.*)\.pandora\.com$/).test(host)) {
		return 'DIRECT';
	}
	if ((/(^([\w\.-]+\.)?(hulu|spotify|youtube|ipchicken|netflix|pandora|songza|www\.iheart|www\.crackle)\.com$)/).test(host)) {
		return proxy;
	}
	return 'DIRECT';
}
