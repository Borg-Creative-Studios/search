url = ""
h1 = ""
seo = ""
description = ""
safe = '<p><img src="./icons/safe.png" width="40mm"></p>'
unsafe = '<p><img src="./icons/unsafe.png" width="40mm"></p>'
alert = '<p><img src="./icons/alert.png" width="40mm"></p>'
img = safe
print('<li><a href="' + url + '" rel="noreferrer">' + url + '<p name="h1" hidden>' + h1 + '</p><p name="tags" hidden>' + seo + '</p><p class="pc_s">' + description + '</p>'+ img +'</a></li>')
