"use strict";(self.webpackChunkcode_fictionist=self.webpackChunkcode_fictionist||[]).push([[4073],{6988:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=r(5893),t=r(1151);const s={title:"py4e - Using Databases",tags:["python"]},a=void 0,o={id:"\u7a0b\u5f0f\u8a9e\u8a00/Python/coursera-m4",title:"py4e - Using Databases",description:"Object-oriented programming",source:"@site/docs/\u7a0b\u5f0f\u8a9e\u8a00/Python/04-coursera-m4.mdx",sourceDirName:"\u7a0b\u5f0f\u8a9e\u8a00/Python",slug:"/\u7a0b\u5f0f\u8a9e\u8a00/Python/coursera-m4",permalink:"/docs/\u7a0b\u5f0f\u8a9e\u8a00/Python/coursera-m4",draft:!1,unlisted:!1,tags:[{label:"python",permalink:"/docs/tags/python"}],version:"current",sidebarPosition:4,frontMatter:{title:"py4e - Using Databases",tags:["python"]},sidebar:"programSidebar",previous:{title:"py4e - Access Web Data",permalink:"/docs/\u7a0b\u5f0f\u8a9e\u8a00/Python/coursera-m3"},next:{title:"Meta b2e - Module \u8207 Test",permalink:"/docs/\u7a0b\u5f0f\u8a9e\u8a00/Python/meta-c1"}},c={},l=[{value:"Object-oriented programming",id:"object-oriented-programming",level:2},{value:"SQLite",id:"sqlite",level:2},{value:"Install SQLite",id:"install-sqlite",level:3},{value:"Create Table",id:"create-table",level:3},{value:"Add Data",id:"add-data",level:3},{value:"\u57fa\u672c\u64cd\u4f5c",id:"\u57fa\u672c\u64cd\u4f5c",level:3},{value:"SQLite in Python",id:"sqlite-in-python",level:3},{value:"Multi-Table Database",id:"multi-table-database",level:2},{value:"Associative Table",id:"associative-table",level:2},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:2}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"object-oriented-programming",children:"Object-oriented programming"}),"\n",(0,i.jsx)(n.p,{children:"OOP \u4e2d\u6709\u5e7e\u500b\u57fa\u790e\u7684\u5b9a\u7fa9\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"class"}),"\uff1a\u5b9a\u7fa9\u4e86\u4e00\u500b\u7269\u4ef6\uff0c\u76f8\u7576\u65bc\u5b9a\u7fa9\u4e86\u4e00\u500b\u85cd\u5716\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"method"})," (or ",(0,i.jsx)(n.code,{children:"message"}),")\uff1a\u5b9a\u7fa9\u4e86\u4f7f\u7528\u8cc7\u6599\u7684\u65b9\u6cd5\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"attribute"})," (or ",(0,i.jsx)(n.code,{children:"field"}),")\uff1a\u5b9a\u7fa9\u8cc7\u6599\u7684\u5f62\u5f0f\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"object"}),"\uff1a\u900f\u904e ",(0,i.jsx)(n.code,{children:"class"})," \u5b9a\u7fa9\u51fa\u4f86\u7684\u5be6\u4f8b\uff0c\u4e5f\u5c31\u662f\u4e00\u5f35\u5305\u542b\u8cc7\u6599\u8207\u65b9\u6cd5\u7684\u85cd\u5716\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",metastring:"title='Simple OOP example'",children:"# Animal \u662f\u4e00\u5f35\u85cd\u5716\nclass Animal:\n    x = 0\n\n    def sumAnimals(self):\n        self.x = self.x + 1\n        print('There are',self.x, 'animals')\n\n# \u7528 Animal \u9019\u5f35\u85cd\u5716\u5efa\u7acb\u4e00\u500b\u5be6\u4f8b\u4e26\u5b58\u9032\u4e00\u500b\u8b8a\u6578\u4e2d\ndog = Animal()\ndog.sumAnimals() # There are 1 animals\ndog.sumAnimals() # There are 2 animals\ndog.sumAnimals() # There are 3 animals\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["\u53ef\u4ee5\u7528 ",(0,i.jsx)(n.code,{children:"type()"})," \u67e5\u770b\u7269\u4ef6\u539f\u578b\u3002",(0,i.jsx)(n.br,{}),"\n","\u53ef\u4ee5\u7528 ",(0,i.jsx)(n.code,{children:"dir()"})," \u67e5\u770b\u5c6c\u6027\u8207\u65b9\u6cd5\u3002"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"print(type(dog)) # <class '__main__.Animal'>\nprint(dir(dog))\n"})})]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["\u5b9a\u7fa9\u7269\u4ef6\u6642\uff0c\u51fd\u5f0f\u7684\u7b2c\u4e00\u500b\u53c3\u6578\u90fd\u8981\u4ee3\u5165 ",(0,i.jsx)(n.code,{children:"self"}),"\uff0c\u8868\u793a\u53ef\u4ee5\u900f\u904e\u9019\u500b\u7269\u4ef6\u4f86\u5f15\u7528\u9019\u500b\u65b9\u6cd5\u3002"]})}),"\n",(0,i.jsx)(n.p,{children:"OOP \u4e09\u5927\u7279\u6027\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u5c01\u88dd (Encapsulation)\uff1a\u5c07\u7269\u4ef6\u5167\u90e8\u7684\u8cc7\u6599\u8207\u65b9\u6cd5\u96b1\u85cf\u8d77\u4f86\uff0c\u4f7f\u7528\u8005\u53ea\u80fd\u900f\u904e\u7269\u4ef6\u63d0\u4f9b\u7684\u4ecb\u9762\u53bb\u53d6\u5f97\u5167\u90e8\u7684\u5167\u5bb9\u3002"}),"\n",(0,i.jsxs)(n.li,{children:["\u7e7c\u627f (Inheritance)\uff1a\u7236\u985e\u5225\u901a\u5e38\u662f\u6982\u62ec\u5f0f\u7684\u7269\u4ef6\uff0c\u5b50\u985e\u5225\u53ef\u4ee5\u7e7c\u627f\u7236\u985e\u5225\u7684\u6240\u6709\u5167\u5bb9\u4e26\u81ea\u884c\u6dfb\u52a0\u4e00\u4e9b\u7d30\u7bc0\uff0c\u6bd4\u5982 ",(0,i.jsx)(n.code,{children:"\u72d7 (\u7236\u985e\u5225)"})," \u548c ",(0,i.jsx)(n.code,{children:"\u67f4\u72ac (\u5b50\u985e\u5225)"}),"\u3002"]}),"\n",(0,i.jsx)(n.li,{children:"\u591a\u578b (Polymorphism)\uff1a\u6307\u7684\u662f\u540c\u6a23\u7684\u64cd\u4f5c\uff0c\u91dd\u5c0d\u4e0d\u4e00\u6a23\u7684\u7269\u4ef6\u6703\u6709\u4e0d\u4e00\u6a23\u7684\u7d50\u679c\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"class Car:\n    wheels = 4\n    def highSpeed(self, speed):\n        print('Max high speed:', speed, 'km')\n    def country(self):\n        print('No country')\n\n# \u7e7c\u627f\nclass Bugatti(Car):\n    system = '4matic'\n    def country(self):\n        print('France')\n\nclass Porche(Car):\n    system = '2matic'\n    def country(self):\n        print('Germany')\n\nchiron = Bugatti()\ntaycan = Porche()\nchiron.highSpeed(289) # Max high speed: 289 km\ntaycan.highSpeed(266) # Max high speed: 266 km\n\n# \u591a\u578b\ndef showCountry(car):\n    car.country()\nshowCountry(chiron) # France\nshowCountry(taycan) # Germany\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"__init__"})," \u662f\u4ec0\u9ebc\uff1f",(0,i.jsx)(n.br,{}),"\n","\u5c31\u662f\u5728\u5275\u9020\u7269\u4ef6\u5be6\u4f8b\u6642\uff0c",(0,i.jsx)(n.code,{children:"__init__"})," \u4e0b\u7684\u908f\u8f2f\u6703\u5148\u57f7\u884c\u4e00\u6b21\u3002"]})}),"\n",(0,i.jsx)(n.h2,{id:"sqlite",children:"SQLite"}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"\u76f8\u95dc\u6587\u7ae0\uff1a"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/SQL/basic-sql",children:"SQL \u57fa\u790e\u8a9e\u6cd5-1"})}),"\n"]})]}),"\n",(0,i.jsx)(n.h3,{id:"install-sqlite",children:"Install SQLite"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://sqlitebrowser.org/dl/",children:"SQLite"})})}),"\n",(0,i.jsx)(n.p,{children:"\u8a18\u5f97\u5b89\u88dd\u6642\u8981\u52fe\u9078\u65b0\u589e\u5230\u684c\u9762\u6216\u61c9\u7528\u7a0b\u5f0f\u5217\uff0c\u4e0d\u7136\u6703\u627e\u4e0d\u5230\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"create-table",children:"Create Table"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE Ages ( \n  name VARCHAR(128), \n  age INTEGER\n)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"add-data",children:"Add Data"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"DELETE FROM Ages;\nINSERT INTO Ages (name, age) VALUES ('Morgan', 39);\nINSERT INTO Ages (name, age) VALUES ('Eveline', 20);\nINSERT INTO Ages (name, age) VALUES ('Eshal', 31);\nINSERT INTO Ages (name, age) VALUES ('Mackenzie', 39);\nINSERT INTO Ages (name, age) VALUES ('Sinem', 28);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u57fa\u672c\u64cd\u4f5c",children:"\u57fa\u672c\u64cd\u4f5c"}),"\n",(0,i.jsx)(n.p,{children:"\u5c07 name \u548c age \u6b04\u4f4d\u7d44\u5408\u6210\u4e00\u500b\u65b0\u7684\u5341\u516d\u9032\u5236\u5b57\u4e32\uff0c\u4e26\u6309\u7167\u9019\u500b\u5b57\u4e32\u7684\u503c\u5c0d\u7d50\u679c\u9032\u884c\u6392\u5e8f\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT hex(name || age) AS X FROM Ages ORDER BY X\n"})}),"\n",(0,i.jsx)(n.h3,{id:"sqlite-in-python",children:"SQLite in Python"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:r(300).Z+"",children:"mbox.text"}),", from ",(0,i.jsx)(n.a,{href:"https://www.coursera.org/specializations/python",children:"Programming for Everybody"})]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"import sqlite3\n\n# \u8207 SQLite \u8cc7\u6599\u5eab\u5efa\u7acb\u806f\u7e6b\u4e26\u5efa\u7acb cursor \u624d\u53ef\u4ee5\u5728\u8cc7\u6599\u5eab\u4e2d\u67e5\u8a62\nconn = sqlite3.connect('sql-work-01.sqlite')\ncur = conn.cursor()\n\n# \u5148\u522a\u9664\u53ef\u80fd\u5b58\u5728\u7684\u8868\u683c\ncur.execute('DROP TABLE IF EXISTS Counts')\n\n# \u5efa\u7acb Counts \u8868\u683c\ncur.execute('''\nCREATE TABLE Counts (org TEXT, count INTEGER)''')\n\nfname = 'mbox.txt'\nfh = open(fname)\nfor line in fh:\n    if not line.startswith('From: '): continue\n    pieces = line.split()\n    email = pieces[1]\n    # \u5f9eemail\u4e2d\u63d0\u53d6\u7d44\u7e54\u90e8\u5206\uff08\u5373\u57df\u540d\uff09\n    org = email.split('@')[1]\n    # `?` \u8868\u793a\u4f54\u4f4d\u7b26\uff0c\u662f\u8b93\u5f8c\u9762\u7684 email \u8b8a\u6578\u4ee3\u5165\u7684\n    cur.execute('SELECT count FROM Counts WHERE org = ? ', (org,))\n    # \u5f9e\u67e5\u8a62\u7d50\u679c\u4e2d\u7372\u53d6\u4e00\u884c\u6578\u64da\n    row = cur.fetchone()\n    # \u5982\u679cemail\u4e0d\u5b58\u5728\uff0c\u5247\u63d2\u5165\u65b0\u8a18\u9304\n    if row is None:\n        cur.execute('''INSERT INTO Counts (org, count)\n                VALUES (?, 1)''', (org,))\n    # \u5982\u679cemail\u5b58\u5728\uff0c\u5247\u66f4\u65b0count\u503c\u52a01\n    else:\n        cur.execute('UPDATE Counts SET count = count + 1 WHERE org = ?',\n                    (org,))\n    # \u5c07\u67e5\u8a62\u8a9e\u53e5\u548c\u66f4\u65b0\u8a9e\u53e5\u7684\u7d50\u679c\u90fd\u63d0\u4ea4\u5230\u8cc7\u6599\u5eab\u4e2d\n    conn.commit()\n\nsqlstr = 'SELECT org, count FROM Counts ORDER BY count DESC LIMIT 10'\n# \u5370\u51fa\u524d 10 \u500b\u7d50\u679c\u7684 email \u548c count \u503c\nfor row in cur.execute(sqlstr):\n    print(str(row[0]), row[1])\n\ncur.close()\n"})}),"\n",(0,i.jsx)(n.h2,{id:"multi-table-database",children:"Multi-Table Database"}),"\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"JOIN"})," \u9032\u884c\u591a\u8868\u95dc\u806f\u5f0f\u67e5\u8a62\u3002"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:r(5257).Z+"",children:"Library.xml"}),", from ",(0,i.jsx)(n.a,{href:"https://www.coursera.org/specializations/python",children:"Programming for Everybody"})]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"import xml.etree.ElementTree as ET\nimport sqlite3\n\nconn = sqlite3.connect('trackdb.sqlite')\ncur = conn.cursor()\n\n# executescript() \u662f SQLite \u4e2d\u7528\u65bc\u57f7\u884c\u591a\u500b SQL \u8a9e\u53e5\u7684\u65b9\u6cd5\ncur.executescript('''\nDROP TABLE IF EXISTS Track;\nDROP TABLE IF EXISTS Artist;\nDROP TABLE IF EXISTS Album;\nDROP TABLE IF EXISTS Genre;\n\nCREATE TABLE Artist (\n    id  INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,\n    name    TEXT UNIQUE\n);\n\nCREATE TABLE Genre (\n    id  INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,\n    name    TEXT UNIQUE\n);\n\nCREATE TABLE Album (\n    id  INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,\n    artist_id  INTEGER,\n    title   TEXT UNIQUE\n);\n\nCREATE TABLE Track (\n    id  INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,\n    title TEXT  UNIQUE,\n    album_id  INTEGER,\n    genre_id  INTEGER,\n    len INTEGER, rating INTEGER, count INTEGER\n);\n''')\n\n\nfname = 'Library.xml'\n# \u67e5\u627e\u51fd\u5f0f\ndef lookup(d, key):\n    found = False\n    for child in d:\n        if found : return child.text\n        if child.tag == 'key' and child.text == key :\n            found = True\n    return None\n\nstuff = ET.parse(fname)\nall = stuff.findall('dict/dict/dict')\nfor entry in all:\n    if ( lookup(entry, 'Track ID') is None ) : continue\n\n    name = lookup(entry, 'Name')\n    artist = lookup(entry, 'Artist')\n    album = lookup(entry, 'Album')\n    genre = lookup(entry, 'Genre')\n    count = lookup(entry, 'Play Count')\n    rating = lookup(entry, 'Rating')\n    length = lookup(entry, 'Total Time')\n\n    if name is None or artist is None or album is None or genre is None: \n        continue\n\n    cur.execute('''INSERT OR IGNORE INTO Artist (name) \n        VALUES ( ? )''', ( artist, ) )\n    cur.execute('SELECT id FROM Artist WHERE name = ? ', (artist, ))\n    artist_id = cur.fetchone()[0]\n\n    cur.execute('''INSERT OR IGNORE INTO Album (title, artist_id) \n        VALUES ( ?, ? )''', ( album, artist_id ) )\n    cur.execute('SELECT id FROM Album WHERE title = ? ', (album, ))\n    album_id = cur.fetchone()[0]\n\n    cur.execute('''INSERT OR IGNORE INTO Genre (name) \n    VALUES ( ? )''', ( genre, ) )\n    cur.execute('SELECT id FROM Genre WHERE name = ? ', (genre, ))\n    genre_id = cur.fetchone()[0]\n\n    cur.execute('''INSERT OR REPLACE INTO Track\n        (title, album_id, genre_id ,len, rating, count) \n        VALUES ( ?, ?, ?, ?, ?, ? )''', \n        ( name, album_id, genre_id ,length, rating, count ) )\n\n    conn.commit()\n\n# \u57f7\u884c\u55ae\u500b SQL \u67e5\u8a62\u4e26\u7372\u53d6\u7d50\u679c\uff0c\u61c9\u8a72\u4f7f\u7528 execute() \u65b9\u6cd5\u800c\u4e0d\u662f executescript() \ncur.execute('''\nSELECT Track.title, Artist.name, Album.title, Genre.name \n    FROM Track JOIN Genre JOIN Album JOIN Artist \n    ON Track.genre_id = Genre.id and Track.album_id = Album.id \n        AND Album.artist_id = Artist.id\n    ORDER BY Artist.name LIMIT 3\n''')\n\n# \u7372\u53d6\u7d50\u679c\nrows = cur.fetchall()\n\n# \u6253\u5370\u7d50\u679c\nfor row in rows:\n    print(row)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"associative-table",children:"Associative Table"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728SQL\u4e2d\uff0cassociative table\u901a\u5e38\u7528\u65bc\u5be6\u73fe\u591a\u5c0d\u591a\u95dc\u4fc2\u3002",(0,i.jsx)(n.br,{}),"\n","\u5b83\u5141\u8a31\u5728\u5169\u500b\u5be6\u9ad4\uff08entity\uff09\u4e4b\u9593\u5efa\u7acb\u591a\u5c0d\u591a\u7684\u95dc\u4fc2\uff0c\u800c\u4e0d\u662f\u50c5\u9650\u65bc\u55ae\u500b\u5be6\u9ad4\u4e4b\u9593\u7684\u4e00\u5c0d\u591a\u95dc\u4fc2\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u8209\u4f8b\u4f86\u8aaa\uff0c\u5047\u8a2d\u6709\u4e00\u500b\u5b78\u751f(Student)\u5be6\u9ad4\u548c\u4e00\u500b\u8ab2\u7a0b(Course)\u5be6\u9ad4\uff0c\u4e00\u500b\u5b78\u751f\u53ef\u4ee5\u9078\u4fee\u591a\u500b\u8ab2\u7a0b\uff0c\u540c\u6642\u4e00\u9580\u8ab2\u7a0b\u4e5f\u53ef\u4ee5\u88ab\u591a\u500b\u5b78\u751f\u9078\u4fee\u3002\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u6211\u5011\u9700\u8981\u4e00\u500b\u95dc\u806f\u8868\uff08associative table\uff09\u4f86\u5b58\u5132\u5b78\u751f\u548c\u8ab2\u7a0b\u4e4b\u9593\u7684\u591a\u5c0d\u591a\u95dc\u4fc2\u3002",(0,i.jsx)(n.br,{}),"\n","\u9019\u500b\u95dc\u806f\u8868\u901a\u5e38\u5305\u542b\u5169\u500b\u5916\u9375\uff0c\u5206\u5225\u6307\u5411\u5b78\u751f\u8868\u548c\u8ab2\u7a0b\u8868\uff0c\u9019\u6a23\u5c31\u53ef\u4ee5\u901a\u904e\u95dc\u806f\u8868\u4f86\u5efa\u7acb\u5b78\u751f\u548c\u8ab2\u7a0b\u4e4b\u9593\u7684\u95dc\u4fc2\u3002"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:r(900).Z+"",children:"roster_data.json"}),", from ",(0,i.jsx)(n.a,{href:"https://www.coursera.org/specializations/python",children:"Programming for Everybody"})]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"import json\nimport sqlite3\n\nconn = sqlite3.connect('rosterdb.sqlite')\ncur = conn.cursor()\n\ncur.executescript('''\nDROP TABLE IF EXISTS User;\nDROP TABLE IF EXISTS Member;\nDROP TABLE IF EXISTS Course;\n\nCREATE TABLE User (\n    id     INTEGER PRIMARY KEY,\n    name   TEXT UNIQUE\n);\n\nCREATE TABLE Course (\n    id     INTEGER PRIMARY KEY,\n    title  TEXT UNIQUE\n);\n\nCREATE TABLE Member (\n    user_id     INTEGER,\n    course_id   INTEGER,\n    role        INTEGER,\n    PRIMARY KEY (user_id, course_id)\n)\n''')\n\nfname = 'roster_data.json'\n\n#   [ \"Charley\", \"si110\", 1 ],\n#   [ \"Mea\", \"si110\", 0 ],\n\nstr_data = open(fname).read()\njson_data = json.loads(str_data)\n\nfor entry in json_data:\n\n    name = entry[0]\n    title = entry[1]\n    role = entry[2]\n\n    cur.execute('''INSERT OR IGNORE INTO User (name)\n        VALUES ( ? )''', ( name, ) )\n    cur.execute('SELECT id FROM User WHERE name = ? ', (name, ))\n    user_id = cur.fetchone()[0]\n\n    cur.execute('''INSERT OR IGNORE INTO Course (title)\n        VALUES ( ? )''', ( title, ) )\n    cur.execute('SELECT id FROM Course WHERE title = ? ', (title, ))\n    course_id = cur.fetchone()[0]\n\n    cur.execute('''INSERT OR REPLACE INTO Member\n        (user_id, course_id, role) VALUES ( ?, ?, ? )''',\n        ( user_id, course_id, role, ) )\n\n    conn.commit()\n\ncur.execute('''\nSELECT User.name,Course.title, Member.role FROM \n    User JOIN Member JOIN Course \n    ON User.id = Member.user_id AND Member.course_id = Course.id\n    ORDER BY User.name DESC, Course.title DESC, Member.role DESC LIMIT 2;\n''')\n\ncur.execute('''\nSELECT 'XYZZY' || hex(User.name || Course.title || Member.role ) AS X FROM \n    User JOIN Member JOIN Course \n    ON User.id = Member.user_id AND Member.course_id = Course.id\n    ORDER BY X LIMIT 1;\n''')\n\nrows = cur.fetchall()\n\nfor row in rows:\n    print(row)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u53c3\u8003\u8cc7\u6599",children:"\u53c3\u8003\u8cc7\u6599"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.coursera.org/specializations/python",children:"Programming for Everybody"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://totoroliu.medium.com/%E7%89%A9%E4%BB%B6%E5%B0%8E%E5%90%91-object-oriented-programming-%E6%A6%82%E5%BF%B5-5f205d437fd6",children:"\u7269\u4ef6\u5c0e\u5411(Object Oriented Programming)\u6982\u5ff5"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5257:(e,n,r)=>{r.d(n,{Z:()=>i});const i=r.p+"assets/files/Library-c20cdc675fdf570040a2ee5bb67f267d.xml"},300:(e,n,r)=>{r.d(n,{Z:()=>i});const i=r.p+"assets/files/mbox-882999f9936fe310bfebd08810cc25e5.txt"},900:(e,n,r)=>{r.d(n,{Z:()=>i});const i=r.p+"assets/files/roster_data-1ac31fb21ff5b6eb559d4119ee46f5b2.json"},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>a});var i=r(7294);const t={},s=i.createContext(t);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);