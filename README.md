# [Jokes API](https://jokes-7w3t.onrender.com/api/v1/jokes/random)

<div align="center">
 <img src="https://media.giphy.com/media/l41lISBVXb9gRT32w/giphy.gif" width="300" alt="jokes GIF">
 <p align="center"><i>Your daily dose of humor.</i></p>
</div>

## Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/ImadIdaliouali/jokesApi.git
   ```
1. Install dependencies:
   ```bash
   npm install
   ```
1. Run the server:
   ```bash
   npm start
   ```

## Endpoints

### 1. Get a Random Joke

```ruby
GET /api/v1/jokes/random
```

### 2. Get a Random Joke By Type

```ruby
GET /api/v1/jokes/:type/random
```

### 3. Get all Jokes

```ruby
GET /api/v1/jokes
```

### 4. Get a Specific Joke

```ruby
GET /api/v1/jokes/:id
```

### 5. Create a Joke

```ruby
POST /api/v1/jokes
```

### 6. Update a Specific Joke

```ruby
PATCH /api/v1/jokes/:id
```

### 7. Delete a Specific Joke

```ruby
DELETE /api/v1/jokes/:id
```

## Built With

- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
- ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
- ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
