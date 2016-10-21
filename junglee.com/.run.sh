curl http://www.junglee.com/sellerrating/ > sellers-info.html
for sellerid in `cat sellers.txt`; do curl -s -A "Mozilla/5.0 (Windows; U; Windows NT 5.1; rv:1.7.3) Gecko/20041001 Firefox/0.10.1" http://www.junglee.com/seller/$sellerid > $sellerid ; echo -ne "." ; done
