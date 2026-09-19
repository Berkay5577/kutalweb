import http.server, socketserver

PORT = 5500

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # HTML ve tüm dosyalar için önbelleklemeyi kapat (geliştirme sunucusu)
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

class ThreadedServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    # Ağır 3D/video varlıklarını paralel sunabilmek için çok iş parçacıklı
    daemon_threads = True
    allow_reuse_address = True

with ThreadedServer(("", PORT), NoCacheHandler) as httpd:
    print(f"No-cache dev server on http://localhost:{PORT}")
    httpd.serve_forever()
