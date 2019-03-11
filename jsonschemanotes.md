{ "$schema": "http://json-schema.org/schema#" } // should always be included but removed for bravity
{ "$id": "http://yourdomain.com/schemas/myschema.json" } // should always be in your myschema.json

note $id has become id

type; string, <numeric types>, object, array, boolean, null

### string, modifiers
  -minLength
  -maxLength
  -pattern (a regexp)
  -format (optional implementation in schema validators)
    -date-time
    -time
    -date
    -email
    -idn-email
    -hostname
    -idn-hostname
    -ipv6
    -ipv4
    -uri
    -uri-reference
    -iri
    -iri-reference
    -uri-template
    -json-pointer
    -uri-template
    -json-pointer
    -uri-reference
    -relative-json-pointer
    -regex

#### pattern
 
 {
     type:"string"
     pattern:"^hello world$"
 }

##### lookahead, lookbehind, lookaround

negative lookahead
- `q(?!u)`: match a `q` not followed by a `u`, but only consumes the `q`

postive lookahead
- `q(?=u)`: match `q` followed by a `u` (ps does not consume `q`)

### anyOf 
 -- merge schema defs together, validation is ok, if it matches any of the definitions in the array

{
    anyOf: [<schema1>, <schema2>]
} 

{
  "allOf": [
    { "type": "string" },
    { "maxLength": 5 }
  ]
}

{
  "allOf": [
    { "type": "string" },
    { "type": "number" }
  ]
}

#### street-address

```javascript
{
  "definitions": {
    "address": {
      "type": "object",
      "properties": {
        "street_address": { "type": "string" },
        "city":           { "type": "string" },
        "state":          { "type": "string" }
      },
      "required": ["street_address", "city", "state"]
    }
  },

  "allOf": [
    { "$ref": "#/definitions/address" }, // reference uses a jsonpointer , ofc this can be recursive!
    { "properties": {
        "type": { "enum": [ "residential", "business" ] }
      }
    }
  ]
}
```

- oneOf
- anyOf
- not  `{"not": { "type": "string" } }`

## if then else

#### "$schema": "http://json-schema.org/schema#"
recommend where 

{ "type": "number", "multipleOf": 1.0 } // 10, 20, 31.5=!error

{ "type": "number" } // multipleOf 

{  "type" : "number", "multipleOf" : 10 } //multiples

{ "type":"number", "minimum": 0, "exclusiveMaximum": 100 , "exclusiveMinimum": 1 } 

#### object

{ "type": "object" }

{ "type": "object",
    "properties":{
        "number":  { "type": "number"},
        "street_name": { "type": "string"},
        "street_type": { "type": "string", "enum": ["street","avenue", "boulevard"]}
    }
}
 
#### object/additionalProperties (boolean)

#### object/required [propery list]
{
  "type": "object",
  "minProperties": 2, // number of props on an object
  "maxProperties": 3
}

### dependencies

```json
{
  "type": "object",

  "properties": {
    "name": { "type": "string" },
    "credit_card": { "type": "number" },
    "billing_address": { "type": "string" }
  },

  "required": ["name"],

  "dependencies": {
    "credit_card": ["billing_address"], /// -> dependent on the existance of "billing_address"
    "billing_address": ["credit_card"]  /// -> dependent on the existance of "credit_card"
  }
}
```

```javascript
{
  "type": "array",
  "items": {
    "type": "number"
  }
}
//-> [1,2,3,4,5], 
```


```javascript
{
  "type": "array",
  "contains": {
    "type": "number"
  }
}
//-> ["life", "universe", "everything", 42]
```

#### validating tuples

```javascript
{
  "type": "array",
  "items": [
    {
      "type": "number"
    },
    {
      "type": "string"
    },
    {
      "type": "string",
      "enum": ["Street", "Avenue", "Boulevard"]
    },
    {
      "type": "string",
      "enum": ["NW", "NE", "SW", "SE"]
    }
  ]
}

//-> [1600, "Pennsylvania", "Avenue", "NW"]  this is ok

```

#### limit size of array

```javascript
{
  "type": "array",
  "minItems": 2,
  "maxItems": 3
}

```

#### uniqueness , array elements need to be unique

```javascript
{
  "type": "array",
  "uniqueItems": true
}
```

```javascript
{
  "type": "string",
  "enum": ["red", "amber", "green", null]
}
//-> null will always fall because it is not of type string
```

##### constants

```javascript
{
  "properties": {
    "country": {
      "const": "United States of America"
    }
  }
}
```

### encodingtype

```javascript
{
  "type": "string",
  "contentMediaType": "text/html"
}

//-> "<!DOCTYPE html><html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head></html>"

{
  "type": "string",
  "contentEncoding": "base64",
  "contentMediaType": "image/png"
}

//-> "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA..."
```












































