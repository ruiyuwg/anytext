### Implement repositories

Create a `ProductRepository` interface and its implementation named `ProductRepositoryImpl`. This holds the logic to interact with data sources from Supabase. Do the same with the `AuthenticationRepository`.

Create the Product Repository:

```kotlin
interface ProductRepository {
    suspend fun createProduct(product: Product): Boolean
    suspend fun getProducts(): List<ProductDto>?
    suspend fun getProduct(id: String): ProductDto
    suspend fun deleteProduct(id: String)
    suspend fun updateProduct(
        id: String, name: String, price: Double, imageName: String, imageFile: ByteArray
    )
}
```

```kotlin
class ProductRepositoryImpl @Inject constructor(
    private val postgrest: Postgrest,
    private val storage: Storage,
) : ProductRepository {
    override suspend fun createProduct(product: Product): Boolean {
        return try {
            withContext(Dispatchers.IO) {
                val productDto = ProductDto(
                    name = product.name,
                    price = product.price,
                )
                postgrest.from("products").insert(productDto)
                true
            }
            true
        } catch (e: java.lang.Exception) {
            throw e
        }
    }

    override suspend fun getProducts(): List<ProductDto>? {
        return withContext(Dispatchers.IO) {
            val result = postgrest.from("products")
                .select().decodeList<ProductDto>()
            result
        }
    }


    override suspend fun getProduct(id: String): ProductDto {
        return withContext(Dispatchers.IO) {
            postgrest.from("products").select {
                filter {
                    eq("id", id)
                }
            }.decodeSingle<ProductDto>()
        }
    }

    override suspend fun deleteProduct(id: String) {
        return withContext(Dispatchers.IO) {
            postgrest.from("products").delete {
                filter {
                    eq("id", id)
                }
            }
        }
    }

    override suspend fun updateProduct(
        id: String,
        name: String,
        price: Double,
        imageName: String,
        imageFile: ByteArray
    ) {
        withContext(Dispatchers.IO) {
            if (imageFile.isNotEmpty()) {
                val imageUrl =
                    storage.from("Product%20Image").upload(
                        path = "$imageName.png",
                        data = imageFile,
                        upsert = true
                    )
                postgrest.from("products").update({
                    set("name", name)
                    set("price", price)
                    set("image", buildImageUrl(imageFileName = imageUrl))
                }) {
                    filter {
                        eq("id", id)
                    }
                }
            } else {
                postgrest.from("products").update({
                    set("name", name)
                    set("price", price)
                }) {
                    filter {
                        eq("id", id)
                    }
                }
            }
        }
    }

    // Because I named the bucket as "Product Image" so when it turns to an url, it is "%20"
    // For better approach, you should create your bucket name without space symbol
    private fun buildImageUrl(imageFileName: String) =
        "${BuildConfig.SUPABASE_URL}/storage/v1/object/public/${imageFileName}".replace(" ", "%20")
}
```

Create the Authentication Repository:

```kotlin
interface AuthenticationRepository {
    suspend fun signIn(email: String, password: String): Boolean
    suspend fun signUp(email: String, password: String): Boolean
    suspend fun signInWithGoogle(): Boolean
}
```

```kotlin
class AuthenticationRepositoryImpl @Inject constructor(
    private val auth: Auth
) : AuthenticationRepository {
    override suspend fun signIn(email: String, password: String): Boolean {
        return try {
            auth.signInWith(Email) {
                this.email = email
                this.password = password
            }
            true
        } catch (e: Exception) {
            false
        }
    }

    override suspend fun signUp(email: String, password: String): Boolean {
        return try {
            auth.signUpWith(Email) {
                this.email = email
                this.password = password
            }
            true
        } catch (e: Exception) {
            false
        }
    }

    override suspend fun signInWithGoogle(): Boolean {
        return try {
            auth.signInWith(Google)
            true
        } catch (e: Exception) {
            false
        }
    }
}
```
