## Brand Showcase API DOCS

## Endpoints :

- `GET /products`
- `GET /products/:id`

&nbsp;

## 1. GET /products

Description

- Get all products

_Response (200 - OK)_

```json
[
  {
    "id": 1,
    "name": "Mantel Saku Half Slit",
    "slug": "mantel-saku-half-slit",
    "description": "Mantel Wanita dengan slit di bagian samping untuk kenyamanan dalam bergerak. Desain saku (pocketable) yang mudah disimpan di tas Anda.",
    "price": 899000,
    "mainImg": "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/445136/item/idgoods_67_445136.jpg?width=1600&impolicy=quality_75",
    "categoryId": 1,
    "authorId": 1
  },
  {
    "id": 2,
    "name": "Blus Rayon Lengan Pendek",
    "slug": "blus-rayon-lengan-pendek",
    "description": "Blus yang halus dan lembut dengan siluet elegan. Dengan perawatan yang mudah setelah dicuci.",
    "price": 299000,
    "mainImg": "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/446846/item/idgoods_04_446846.jpg?width=1600&impolicy=quality_75",
    "categoryId": 2,
    "authorId": 2
  },
  {
    "id": 3,
    "name": "Cardigan Supima Cotton UV Protection",
    "slug": "cardigan-supima-cotton-uv-protection",
    "description": "Cardigan crop wanita, praktis dikenakan sebagai luaran. Dengan UPF25.",
    "price": 199000,
    "mainImg": "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/441011/item/idgoods_16_441011.jpg?width=1600&impolicy=quality_75",
    "categoryId": 1,
    "authorId": 1
  }
  ,...
]
```

&nbsp;

## 2. GET /products/:id

Request

- Params
  - id

Description

- Get product by id

_Response (200 - OK)_

```json
{
  "id": 1,
  "name": "Mantel Saku Half Slit",
  "slug": "mantel-saku-half-slit",
  "description": "Mantel Wanita dengan slit di bagian samping untuk kenyamanan dalam bergerak. Desain saku (pocketable) yang mudah disimpan di tas Anda.",
  "price": 899000,
  "mainImg": "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/445136/item/idgoods_67_445136.jpg?width=1600&impolicy=quality_75",
  "categoryId": 1,
  "authorId": 1,
  "Images": [
    {
      "imgUrl": "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/445136/sub/goods_445136_sub9.jpg?width=1600&impolicy=quality_75"
    },
    {
      "imgUrl": "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/445136/sub/idgoods_445136_sub8.jpg?width=1600&impolicy=quality_75"
    },
    {
      "imgUrl": "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/445136/sub/goods_445136_sub13.jpg?width=1600&impolicy=quality_75"
    }
  ]
}
```

&nbsp;
