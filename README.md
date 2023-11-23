![header](https://capsule-render.vercel.app/api?type=shark&desc=웹프레임워크1%20%22폼미쳤다%22%20&descSize=20&color=a5c1f1&height=250&section=header&text=%20medi💊%20&fontAlignY=30&descAlignY=50&animation=fadeIn&fontSize=60
)

<br>
<div align="left">
  <h1>👨‍⚕️ 건강한 선택, MEDI:</h1>
  <h4>
    영양제의 성분을 비교하여 더 안전한 복용을 위한 의약품 정보 제공 서비스입니다.<br/><br/>
    👉🏻 주요 기능<br/><br/>
    <blockquote>
      <li>반응형 웹디자인</li>
      <li>검색/필터링</li>
      <li>모달 띄우기</li>
      <li>약 조합 계산 기능</li>
      <li>카카오 API 지도 맵 연동</li>
    </blockquote>
  </h4>
  <h4>👉🏻 실행 방법 (필독!!!!)</h4>

  1. `vscode에 medi-form 폴더 불러오기`
  2. `npm install`
  3. `npm start`
     
  <br>
  
  <h1>📝 Composition</h1>
  <h4><a href="https://www.figma.com/file/gj3YSwxk5hOT6GVVrg4mKv/%3Cform%3E-%EB%AF%B8%EC%B3%A4%EB%8B%A4-team-library?type=design&node-id=2324%3A2&mode=design&t=EfxvjbHcuOtBQavp-1">🔗 figma: 디자인 구성</a></h4>
  <h4>
    <blockquote>
    <li>Login, SignUp: 로그인 및 회원가입 페이지</li>
    <li>Team: 팀 정보 페이지</li>
    <li>Home: 서비스에 대한 정보를 담은 시작 페이지</li>
    <li>Pills: 영양제 성분 정보 페이지</li>
    <li>Calc: 영양제 조합 선택 페이지</li>
    <li>Result: 영양제 조합 계산 페이지</li>
    <li>Location: 주변 약국 정보 페이지</li>
    </blockquote>
  </h4>
  <br>

  <h1>💻 Teachnology</h1>
  <img src="https://img.shields.io/badge/html5-E34F26?style=flat&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat&logo=javascript&logoColor=white" />
  <img src="https://img.shields.io/badge/css3-1572B6?style=flat&logo=css3&logoColor=white" />
	<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white" /><br/>
  <img src="https://img.shields.io/badge/figma-F24E1E?style=flat&logo=figma&logoColor=white" />
  <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat&logo=Visual Studio Code&logoColor=white" />
  <br/><br/>
  <li>폴더 구조</li>

    
```
medi-form
├─ .env
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           ├─ HEAD
│  │           └─ main
│  ├─ objects
│  │  ├─ 03
│  │  │  ├─ 57d8f6cd3b65a75b5b1db8c82cafe71b058945
│  │  │  ├─ be672aad8083c684d00c2c1e2234a5c8665357
│  │  │  └─ c7d33580011d9ddc7580adfbb5318aecaa492c
│  │  ├─ 07
│  │  │  └─ 475aa2cedb01745c5cb7835ccb5a4f2856164c
│  │  ├─ 08
│  │  │  └─ 0d6c77ac21bb2ef88a6992b2b73ad93daaca92
│  │  ├─ 0b
│  │  │  └─ 7976c6b3d5809bbd01f2fe415028dba0d6c6bb
│  │  ├─ 0d
│  │  │  └─ 29ff3404ce05ce22cea2c58ed3f5383f1482ef
│  │  ├─ 12
│  │  │  └─ 7f2c390e78c7826bc31861f4d50d85fa5a6665
│  │  ├─ 14
│  │  │  └─ 0ec0bb8b3b4193ae6dddbeb1ee105242c708bd
│  │  ├─ 15
│  │  │  └─ 16ecc35779e6fee5e89d35e3e472dfbe1834fc
│  │  ├─ 16
│  │  │  └─ 5ccb926e013a5b5050f29a2c0e7485eb04ccf7
│  │  ├─ 1c
│  │  │  └─ 738abbe28d3f3a7fcdb1bf9d693a0b5a2c98ba
│  │  ├─ 1f
│  │  │  ├─ 03afeece5ac28064fa3c73a29215037465f789
│  │  │  └─ 6bf2edd669a751930a1d5e62bec88dd731c9d7
│  │  ├─ 23
│  │  │  └─ a983be5aa3441fbba17f87791ef3de48586aa8
│  │  ├─ 26
│  │  │  └─ e5a385c80b6e7a2b36db66d2f698f26a577aed
│  │  ├─ 29
│  │  │  └─ 5772c4bb00709bcdb14626a5e29ecd4d69a214
│  │  ├─ 2c
│  │  │  └─ 9f69a9732cd64cb99c6c8860bc3055b19858a7
│  │  ├─ 2d
│  │  │  └─ 1b071838b0480116c8ccd0d8d1764726eba30b
│  │  ├─ 2f
│  │  │  └─ 704169a62cc534f36a0b0693b8147481cd6f5e
│  │  ├─ 30
│  │  │  └─ cc96d86cf34b8befcac61891d8cec3c58a1dc0
│  │  ├─ 32
│  │  │  ├─ 6bfd99ffb8b0e02be2a61cf848fc109b22c366
│  │  │  └─ ef22d23c40cfe64b953ba8945f10d00c40e44c
│  │  ├─ 34
│  │  │  └─ 95dd0cb59fbf29c0caf9b1d21d806c42656cf5
│  │  ├─ 39
│  │  │  └─ 3d690263b05c412bb7fff0f083d66bc61bab8e
│  │  ├─ 3c
│  │  │  └─ 2082052a26c4bd8cf31c6beb12f9017c7552d8
│  │  ├─ 3d
│  │  │  └─ 4ecc57ba1dbc8254b6f5817b2ba782874cdc16
│  │  ├─ 40
│  │  │  └─ b6b39861376524311b4714991c4a94b32eb846
│  │  ├─ 41
│  │  │  └─ c0534666f26c425ad0fd5f91c4472f072cd5ef
│  │  ├─ 45
│  │  │  ├─ 015c6114261c96a03c405beabd888383ba8d4a
│  │  │  └─ 04d53f07efa7cc8c66ccf94bd21f194bfe89bb
│  │  ├─ 47
│  │  │  └─ 13afaefd0aa9c364c8a11b1c2c1300d27e4515
│  │  ├─ 49
│  │  │  └─ d301a48588dee36a1dc1f7b606fe343d1fc6ba
│  │  ├─ 4a
│  │  │  └─ 800500a79f1af1dd9532c593d0e9429ff2d34c
│  │  ├─ 4c
│  │  │  └─ f8e65170454b500eb246da9cee275bbbdca19a
│  │  ├─ 4d
│  │  │  ├─ 29575de80483b005c29bfcac5061cd2f45313e
│  │  │  └─ caa63bf67b3fbcf95fd2092f90ad2b057e6274
│  │  ├─ 4f
│  │  │  └─ 53682901b52f47d7bd23fdc470748f1f109b59
│  │  ├─ 52
│  │  │  ├─ 53d3ad9e6be6690549cb255f5952337b02401d
│  │  │  ├─ b6801bb50e8b8164a708ca70e5f05471a267a8
│  │  │  └─ e9cf35b970435452f14d8eca9e3a02c5ae19b4
│  │  ├─ 54
│  │  │  └─ bc3743ab1287258b72ac7a15300424638be7c5
│  │  ├─ 56
│  │  │  └─ e453e4f29ad0f9ccf462fa687ab23e18c01771
│  │  ├─ 58
│  │  │  └─ 50d4ba1349078ac014869dfebcb0151989db38
│  │  ├─ 5a
│  │  │  └─ a573ed1685b4f2a130b4f55231c9c3fe1a2c0d
│  │  ├─ 5d
│  │  │  └─ 75b086297b3e6ac72e5df0e5be6cce37f2bd21
│  │  ├─ 5e
│  │  │  └─ 622d8a06746177986c0be74faf5a502988107a
│  │  ├─ 5f
│  │  │  └─ a5a961d75e2f53d7f70d149f610e6851f49807
│  │  ├─ 62
│  │  │  └─ f4a0a8c3149191fe80639ccabcba23f519a1c0
│  │  ├─ 63
│  │  │  ├─ 9042863fc4e4159d37d6458ee3b14c76acaa0b
│  │  │  └─ c9699b139209f4f2c51f73252c598f2e752ab8
│  │  ├─ 64
│  │  │  ├─ 3b9f175485d3e912d3083a4e3aa4cc477a6351
│  │  │  └─ 7290c653b0b3741a710f87b715f11c87b8e0ee
│  │  ├─ 68
│  │  │  └─ 59dbcd91253600e5015132cb6814af870f3924
│  │  ├─ 6a
│  │  │  └─ 70a1822133ce5520f1102315a587e55ccf2da0
│  │  ├─ 6e
│  │  │  ├─ 434496a8b9740371e76768bab41cf441a7b5e1
│  │  │  └─ b5f3643873680da7b65b99ea73b303b57dab57
│  │  ├─ 70
│  │  │  └─ 25f5a11e66a7a6d7055e1db351da35960f6bcb
│  │  ├─ 71
│  │  │  └─ 1ebbb3a6242dd5ae7c6b7e2b56f5128b95ac7f
│  │  ├─ 72
│  │  │  ├─ 05415696945d753bd92e792c8d9baefdcde1b1
│  │  │  └─ e69ff9bbf27ce2fd3865fd039a5021bf45850b
│  │  ├─ 74
│  │  │  └─ b5e053450a48a6bdb4d71aad648e7af821975c
│  │  ├─ 75
│  │  │  ├─ 7482b23c00d53ce687911d70ca672b04d14c6c
│  │  │  └─ f06b6d2b73edb454584d768d7154d39a8a244d
│  │  ├─ 78
│  │  │  └─ fcef71e23123761a136248d25c53b147f0b661
│  │  ├─ 7c
│  │  │  └─ 03374a06883618f852a2aa67819743e65fcae8
│  │  ├─ 7d
│  │  │  └─ 54283c9559da3c1b95831c3b27b77569f97619
│  │  ├─ 80
│  │  │  ├─ 21852eef68e34c00d3dbfd7e8fa757d7501716
│  │  │  └─ 5bff298a168da38d3f492f8c979fa4a7242f13
│  │  ├─ 81
│  │  │  └─ 825df372a1bf5c2ddd5a9d3cebdc5f261552e8
│  │  ├─ 82
│  │  │  └─ 9543ed83a573d97be5bb5d4a9d61bffc2fbd8c
│  │  ├─ 83
│  │  │  └─ 632b97d34a9c08c5b19c9a86da741dfae8623d
│  │  ├─ 88
│  │  │  └─ 8533286e04a0aea1367b596f85c8c921b87ff8
│  │  ├─ 89
│  │  │  ├─ a9f49f7f5d8c40cf8c4447f641eaf579e1e330
│  │  │  └─ c290ba187fc895046433b9fa8c00c860b7184f
│  │  ├─ 8a
│  │  │  └─ 7d466255b83bd4259924f981aa1d4454dc6376
│  │  ├─ 8c
│  │  │  └─ ab0ca9a9d8871edead3d23c96ef273f368336a
│  │  ├─ 8e
│  │  │  └─ cf02642c1fb7fe95d9ea0bb9962a807788028d
│  │  ├─ 8f
│  │  │  └─ 2609b7b3e0e3897ab3bcaad13caf6876e48699
│  │  ├─ 92
│  │  │  └─ 568e39170cb32523e8815611a4dec30abb455a
│  │  ├─ 94
│  │  │  └─ 0a9dc3be92a703f8530b88367bfdd2250786d3
│  │  ├─ 95
│  │  │  └─ ddf58399d9b6ca80a4b605b3fb25c4b2d3bed0
│  │  ├─ 97
│  │  │  └─ 07ba86ad270e1cef07ccbde32fdc29b07e1c23
│  │  ├─ 9a
│  │  │  ├─ 55b2d26c50f7323b7507fd7e198eb7c9df0971
│  │  │  └─ e8bdefd5e6519227ec347ac45b299d750f07c3
│  │  ├─ 9b
│  │  │  └─ 96ab5d48b0590ce2e816f6c986600d844c56de
│  │  ├─ 9c
│  │  │  └─ 11e5e84c759b8cc400e4743c1c2130a08917f7
│  │  ├─ 9d
│  │  │  └─ fc1c058cebbef8b891c5062be6f31033d7d186
│  │  ├─ 9f
│  │  │  ├─ 23c598a41e8feaa7c5163ef421d56b62c66b13
│  │  │  └─ 94475313b6e6323d09641f20ee9b5c97e1b3b4
│  │  ├─ a1
│  │  │  ├─ 1777cc471a4344702741ab1c8a588998b1311a
│  │  │  ├─ 86ca7a698b94f196e7efc6a5b434c9ab1d8b7e
│  │  │  └─ a4068b3030b1adec674a453a59893c731e559d
│  │  ├─ a4
│  │  │  └─ e47a6545bc15971f8f63fba70e4013df88a664
│  │  ├─ a5
│  │  │  └─ b07a9239e828e436da0fe29093fc5c952915d3
│  │  ├─ a9
│  │  │  ├─ 8727c57d49494580cec9ee2da9ef6288a4b511
│  │  │  └─ bc4909f5028734e2840927740f08aef3be262b
│  │  ├─ ab
│  │  │  └─ b63bbceb47e21d07b11873df3a02aba1d63978
│  │  ├─ ad
│  │  │  └─ a640d257a96e531099be12adc7430c299301e3
│  │  ├─ ae
│  │  │  ├─ 0773bcc28e7cce8bd6341272c26f2adf1571c5
│  │  │  └─ fd80df01da75b07e8cd27e31dd9ddaadc2c015
│  │  ├─ b4
│  │  │  └─ 4b6c450dc8d958092c2f33a15c9e536bd95ea5
│  │  ├─ b5
│  │  │  └─ ceb8ef32b1b1771149ca6846449ae464ac8d69
│  │  ├─ b6
│  │  │  └─ 0c2f8b4c9ade80ee60df4eb70b826f5bc56d6a
│  │  ├─ b7
│  │  │  └─ 2a908c9bf8d67539c4688c11847947bbe87c31
│  │  ├─ ba
│  │  │  ├─ 58a6d640a6dbc5ff8c16d3f84c2275f387570f
│  │  │  └─ 91058253910d049e3e52ab750d20eb7cf05170
│  │  ├─ bd
│  │  │  ├─ cd61a3bf91319f1ef89a72e4c539c0e6f69682
│  │  │  └─ db9a3100176b08ac2f26a2f32da8bc8170061e
│  │  ├─ be
│  │  │  └─ 1a412802f653f1d105dffe70070914320aee28
│  │  ├─ c0
│  │  │  └─ b02125cce048a23c9ba4a32d27d2b1d71bfc74
│  │  ├─ c1
│  │  │  ├─ 08797cc0e5b0442ca04852250981b836b16044
│  │  │  └─ 7342fca872986c0dc21a0fc5606bb338346161
│  │  ├─ c2
│  │  │  └─ 240f4f1894eac4682e86f497464bf65caa759d
│  │  ├─ c6
│  │  │  ├─ ad277431c672c78a3150eb1757b43049a5b387
│  │  │  └─ fa797c0ab92f266c1a5b6992895a4bb3b2d478
│  │  ├─ c7
│  │  │  └─ bc8ce2fbc628d2f236e2168b1da5c5cd2cf4d8
│  │  ├─ c9
│  │  │  └─ 12c8c540d12cfa5878c796f55f57237282bc1d
│  │  ├─ cb
│  │  │  └─ 423301ed5c28665b1b9b67798862a1f5e32c83
│  │  ├─ ce
│  │  │  └─ e6da01de7e05ef07555e8cca187618bafa073c
│  │  ├─ d2
│  │  │  └─ e884e85c2c66de6cc8da559cb5843c0e80832f
│  │  ├─ d5
│  │  │  └─ 63c0fb10ba0e42724b21286eb546ee4e5734fc
│  │  ├─ d8
│  │  │  └─ 842938ff595c8de611301973ef3f739027a170
│  │  ├─ dc
│  │  │  ├─ 3727947b83d6d9d149df68f75d1832ff7b9f43
│  │  │  ├─ 83223ee2ebcbb2195f7cad7055ad633c7c041e
│  │  │  └─ d46e8703de12011be00265c8ac5929c585c5d6
│  │  ├─ dd
│  │  │  └─ ef03ad6301b581cf7a845cc9552b564a97de82
│  │  ├─ df
│  │  │  ├─ 7b6b255e6c81dbeb887ac57ce090ac67bbe50c
│  │  │  └─ ca8609e4a116aea57da44dcd91c0974a63bb5d
│  │  ├─ e0
│  │  │  └─ 7854bc415871674541faa346a4433eca6ce265
│  │  ├─ e2
│  │  │  ├─ 19a1c2d4236fa5a7f2839bd386ba41f7ac0cfb
│  │  │  └─ 6b64f86bddb8dce669a3a7c3106e12aecfffaa
│  │  ├─ e3
│  │  │  └─ 7038887c23062e93459f7bf995397f27008369
│  │  ├─ e4
│  │  │  ├─ b4497ab6d587eb09f4a9097b1bf21eb8ae9be6
│  │  │  └─ e27b73e30738087b0cb801adad7687ebb0585e
│  │  ├─ e9
│  │  │  ├─ 7d27e3f1f2ddbd40f742065545c94c5a9340de
│  │  │  └─ e57dc4d41b9b46e05112e9f45b7ea6ac0ba15e
│  │  ├─ eb
│  │  │  └─ ff0b0fdca4d329846de24e90ae94bc39e0088e
│  │  ├─ ec
│  │  │  └─ 2585e8c0bb8188184ed1e0703c4c8f2a8419b0
│  │  ├─ f0
│  │  │  └─ 1484231da6faa6caf5609adaa5a6659ba37ea1
│  │  ├─ f1
│  │  │  └─ 54aaaa23089ac81938bd634339e8a2ccf73781
│  │  ├─ f2
│  │  │  └─ f6a562afa5d24979bb711630b473a1f0dec6a5
│  │  ├─ f4
│  │  │  ├─ 65aaec5204bc07044a56d87e0f34ecfcab338e
│  │  │  └─ 967c720fb2e65ee6f0bd437f7144e7edf4d4e8
│  │  ├─ f5
│  │  │  ├─ 7956be8f07ac29393635f151dfaba7a4fdac20
│  │  │  └─ 81c6cd60ef408d94beff7d6950ea3e12948d52
│  │  ├─ f7
│  │  │  └─ c4b0e910f9edc07aa21d2869931b1fcf92ff1f
│  │  ├─ f8
│  │  │  └─ f5c73591731ef826eafc4dd329226dde59d2e9
│  │  ├─ fb
│  │  │  └─ ee8c42df9deee00839c208e86721ee509177cd
│  │  ├─ fc
│  │  │  ├─ 44b0a3796c0e0a64c3d858ca038bd4570465d9
│  │  │  └─ 7f88f5a89964b676111c404f6e66ecc1319019
│  │  ├─ fe
│  │  │  ├─ 0905208f054896c45062f26cfe5ef162a59b42
│  │  │  └─ 716f21aaa8699fce77918211674201cef96955
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     ├─ HEAD
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  └─ robots.txt
├─ README.md
└─ src
   ├─ api
   │  └─ Kakao.js
   ├─ App.css
   ├─ App.js
   ├─ App.test.js
   ├─ assets
   │  └─ images
   │     ├─ 2171317.png
   │     ├─ 2171335.png
   │     ├─ 2171339.png
   │     ├─ 2171431.png
   │     ├─ Banner1.png
   │     ├─ Banner2.png
   │     ├─ Banner3.png
   │     ├─ ButtonLeft.png
   │     ├─ ButtonRight.png
   │     ├─ calc-icon.png
   │     ├─ doctor.png
   │     ├─ drug-1.png
   │     ├─ drug-10.png
   │     ├─ drug-11.png
   │     ├─ drug-12.png
   │     ├─ drug-13.png
   │     ├─ drug-14.png
   │     ├─ drug-15.png
   │     ├─ drug-16.png
   │     ├─ drug-17.png
   │     ├─ drug-18.png
   │     ├─ drug-19.png
   │     ├─ drug-2.png
   │     ├─ drug-20.png
   │     ├─ drug-3.png
   │     ├─ drug-4.png
   │     ├─ drug-5.png
   │     ├─ drug-6.png
   │     ├─ drug-7.png
   │     ├─ drug-8.png
   │     ├─ drug-9.png
   │     ├─ error.png
   │     ├─ food-bean.png
   │     ├─ food-broccoli.png
   │     ├─ food-butter.png
   │     ├─ food-chicken.png
   │     ├─ food-chocolate.png
   │     ├─ food-dailyproduct.png
   │     ├─ food-egg.png
   │     ├─ food-fish.png
   │     ├─ food-fruits.png
   │     ├─ food-kale.png
   │     ├─ food-kiwi.png
   │     ├─ food-liver.png
   │     ├─ food-meat.png
   │     ├─ food-milk.png
   │     ├─ food-nuts.png
   │     ├─ food-oil.png
   │     ├─ food-orange.png
   │     ├─ food-potato.png
   │     ├─ food-seafood.png
   │     ├─ food-seaweed.png
   │     ├─ food-spinach.png
   │     ├─ food-sun.png
   │     ├─ food-vegetable.png
   │     ├─ footer.png
   │     ├─ home-down.png
   │     ├─ homeBanner.png
   │     ├─ icon_down.png
   │     ├─ icon_up.png
   │     ├─ loadingpill.png
   │     ├─ location-icon.png
   │     ├─ location.png
   │     ├─ medi.png
   │     ├─ mediCharacter.png
   │     ├─ mediLogo.png
   │     ├─ MyLocation.png
   │     ├─ no-show.png
   │     ├─ nocheck_radio.png
   │     ├─ searchkey.png
   │     ├─ show.png
   │     ├─ team.png
   │     ├─ user.png
   │     └─ yescheck_radio.png
   ├─ components
   │  ├─ button
   │  │  ├─ button-auth.js
   │  │  ├─ button-calc.js
   │  │  ├─ button-delete.js
   │  │  ├─ button-header.js
   │  │  ├─ button-Loc.js
   │  │  ├─ button-nav.js
   │  │  └─ button-result.js
   │  ├─ Footer.js
   │  ├─ Header.js
   │  ├─ input
   │  │  ├─ input-auth.js
   │  │  ├─ input-calc.js
   │  │  ├─ input-Loc.js
   │  │  └─ input-pills.js
   │  ├─ list
   │  │  ├─ list-drug.js
   │  │  ├─ list-pills.js
   │  │  ├─ list-result.js
   │  │  ├─ list-select.js
   │  │  └─ list-team.js
   │  ├─ listItem
   │  │  ├─ item-drug.js
   │  │  ├─ item-pills.js
   │  │  ├─ item-result.js
   │  │  ├─ item-select.js
   │  │  └─ item-team.js
   │  └─ nav.js
   ├─ index.css
   ├─ index.js
   ├─ logo.svg
   ├─ pages
   │  ├─ Calc.jsx
   │  ├─ Home.jsx
   │  ├─ Loading.jsx
   │  ├─ Loc.jsx
   │  ├─ Login.jsx
   │  ├─ Pills.jsx
   │  ├─ Result.jsx
   │  ├─ Signup.jsx
   │  └─ Team.jsx
   ├─ reportWebVitals.js
   ├─ setupTests.js
   ├─ styles
   │  ├─ colors.js
   │  └─ globalStyles.js
   └─ util
      ├─ combination.js
      ├─ drug.js
      └─ team.js

```

  <h6>현재는 프론트엔드 영역만 구현이 되어 있습니다. 추후 백엔드 개발이 이루어진다면 로그인, 회원가입 작동 기능을 포함한 추가적인 부분을 구현할 예정입니다.</h6>
  <br>

  <h1>🎄 Team</h1>
  <div align="center">
    <table>
    <tbody>
      <tr>
        <td align="center"><a href="https://github.com/sheepyis"><img src="https://github.com/sheepyis.png" width="150px;" alt="양인서"/><br /><sub><b>팀장: 2171339 양인서 </b></sub></a><br /></td>
        <td align="center"><a href="https://github.com/hyeonda02"><img src="https://github.com/hyeonda02.png" width="150px;" alt="강다현"/><br /><sub><b>팀원: 2171317 강다현</b></sub></a><br /></td>
        <td align="center"><a href="https://github.com/boxion"><img src="https://github.com/boxion.png" width="150px;" alt="박시현"/><br /><sub><b>팀원: 2171335 박시현</b></sub></a><br /></td>
        <td align="center"><a href="https://github.com/0hyujin"><img src="https://github.com/0hyujin.png" width="150px;" alt="오유진"/><br /><sub><b>팀원: 2171431 오유진</b></sub></a><br /></td>
      </tr>
    </tbody>
  </table>
</div>
</div>
