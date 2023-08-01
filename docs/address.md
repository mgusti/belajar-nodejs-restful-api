# Address API Spec

## Create Address API

Endpoint: POST /api/contacts/:contactId/addresses

Headers :

- Authorization : token

Requset Body :

```json
{
  "street": "Jalan apa",
  "city": "Kota apa",
  "province": "Provinsi apa",
  "country": "Negara apa",
  "postal_code": "Kode Pos"
}
```

Responses Body Success :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan apa",
    "city": "Kota apa",
    "province": "Provinsi apa",
    "country": "Negara apa",
    "postal_code": "Kode Pos"
  }
}
```

Response Body Error :

```json
{
  "errors": "Country is required"
}
```

## Update Address API

Endpoint: PUT /api/contacts/:contactId/addresses/:addressId

Headers :

- Authorization : token

Requset Body :

```json
{
  "street": "Jalan apa",
  "city": "Kota apa",
  "province": "Provinsi apa",
  "country": "Negara apa",
  "postal_code": "Kode Pos"
}
```

Responses Body Success :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan apa",
    "city": "Kota apa",
    "province": "Provinsi apa",
    "country": "Negara apa",
    "postal_code": "Kode Pos"
  }
}
```

Response Body Error :

```json
{
  "errors": "Country is required"
}
```

## Get Address API

Endpoint: GET /api/contacts/:contactId/addresses/:addressId

Headers :

- Authorization : token

Responses Body Success :

````json
{
  "data": {
    "id": 1,
    "street": "Jalan apa",
    "city": "Kota apa",
    "province": "Provinsi apa",
    "country": "Negara apa",
    "postal_code": "Kode Pos"
  }
}

Response Body Error :

```json
{
  "errors": "Contact not found"
}
````

## List Addresses API

Endpoint: GET /api/contacts/:contactId/addresses

Headers :

- Authorization : token

Responses Body Success :

```json
{
  "data": [
    {
      "id": 1,
      "street": "Jalan apa",
      "city": "Kota apa",
      "province": "Provinsi apa",
      "country": "Negara apa",
      "postal_code": "Kode Pos"
    },
    {
      "id": 2,
      "street": "Jalan apa",
      "city": "Kota apa",
      "province": "Provinsi apa",
      "country": "Negara apa",
      "postal_code": "Kode Pos"
    }
  ]
}
```

Response Body Error :

```json
{
  "errors": "Contact not found"
}
```

## Remove Address API

Endpoint: DELETE /api/contacts/:contactId/addresses/:addressId

Headers :

- Authorization : token

Responses Body Success :

```json
{
  "data": "OK"
}
```

Response Body Error :

```json
{
  "errors": "contact or address not found"
}
```
