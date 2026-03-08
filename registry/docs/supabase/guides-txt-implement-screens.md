### Implement screens

To navigate screens, use the AndroidX navigation library. For routes, implement a `Destination` interface:

```kotlin

interface Destination {
    val route: String
    val title: String
}


object ProductListDestination : Destination {
    override val route = "product_list"
    override val title = "Product List"
}

object ProductDetailsDestination : Destination {
    override val route = "product_details"
    override val title = "Product Details"
    const val productId = "product_id"
    val arguments = listOf(navArgument(name = productId) {
        type = NavType.StringType
    })
    fun createRouteWithParam(productId: String) = "$route/${productId}"
}

object AddProductDestination : Destination {
    override val route = "add_product"
    override val title = "Add Product"
}

object AuthenticationDestination: Destination {
    override val route = "authentication"
    override val title = "Authentication"
}

object SignUpDestination: Destination {
    override val route = "signup"
    override val title = "Sign Up"
}
```

This will help later for navigating between screens.

Create a `ProductListViewModel`:

```kotlin
@HiltViewModel
class ProductListViewModel @Inject constructor(
private val productRepository: ProductRepository,
) : ViewModel() {

    private val _productList = MutableStateFlow<List<Product>?>(listOf())
    val productList: Flow<List<Product>?> = _productList


    private val _isLoading = MutableStateFlow(false)
    val isLoading: Flow<Boolean> = _isLoading

    init {
        getProducts()
    }

    fun getProducts() {
        viewModelScope.launch {
            val products = productRepository.getProducts()
            _productList.emit(products?.map { it -> it.asDomainModel() })
        }
    }

    fun removeItem(product: Product) {
        viewModelScope.launch {
            val newList = mutableListOf<Product>().apply { _productList.value?.let { addAll(it) } }
            newList.remove(product)
            _productList.emit(newList.toList())
            // Call api to remove
            productRepository.deleteProduct(id = product.id)
            // Then fetch again
            getProducts()
        }
    }

    private fun ProductDto.asDomainModel(): Product {
        return Product(
            id = this.id,
            name = this.name,
            price = this.price,
            image = this.image
        )
    }

}

```

Create the `ProductListScreen.kt`:

```kotlin
@OptIn(ExperimentalMaterial3Api::class, ExperimentalMaterialApi::class)
@Composable
fun ProductListScreen(
    modifier: Modifier = Modifier,
    navController: NavController,
    viewModel: ProductListViewModel = hiltViewModel(),
) {
    val isLoading by viewModel.isLoading.collectAsState(initial = false)
    val swipeRefreshState = rememberSwipeRefreshState(isRefreshing = isLoading)
    SwipeRefresh(state = swipeRefreshState, onRefresh = { viewModel.getProducts() }) {
        Scaffold(
            topBar = {
                TopAppBar(
                    backgroundColor = MaterialTheme.colorScheme.primary,
                    title = {
                        Text(
                            text = stringResource(R.string.product_list_text_screen_title),
                            color = MaterialTheme.colorScheme.onPrimary,
                        )
                    },
                )
            },
            floatingActionButton = {
                AddProductButton(onClick = { navController.navigate(AddProductDestination.route) })
            }
        ) { padding ->
            val productList = viewModel.productList.collectAsState(initial = listOf()).value
            if (!productList.isNullOrEmpty()) {
                LazyColumn(
                    modifier = modifier.padding(padding),
                    contentPadding = PaddingValues(5.dp)
                ) {
                    itemsIndexed(
                        items = productList,
                        key = { _, product -> product.name }) { _, item ->
                        val state = rememberDismissState(
                            confirmStateChange = {
                                if (it == DismissValue.DismissedToStart) {
                                    // Handle item removed
                                    viewModel.removeItem(item)
                                }
                                true
                            }
                        )
                        SwipeToDismiss(
                            state = state,
                            background = {
                                val color by animateColorAsState(
                                    targetValue = when (state.dismissDirection) {
                                        DismissDirection.StartToEnd -> MaterialTheme.colorScheme.primary
                                        DismissDirection.EndToStart -> MaterialTheme.colorScheme.primary.copy(
                                            alpha = 0.2f
                                        )
                                        null -> Color.Transparent
                                    }
                                )
                                Box(
                                    modifier = modifier
                                        .fillMaxSize()
                                        .background(color = color)
                                        .padding(16.dp),
                                ) {
                                    Icon(
                                        imageVector = Icons.Filled.Delete,
                                        contentDescription = null,
                                        tint = MaterialTheme.colorScheme.primary,
                                        modifier = modifier.align(Alignment.CenterEnd)
                                    )
                                }

                            },
                            dismissContent = {
                                ProductListItem(
                                    product = item,
                                    modifier = modifier,
                                    onClick = {
                                        navController.navigate(
                                            ProductDetailsDestination.createRouteWithParam(
                                                item.id
                                            )
                                        )
                                    },
                                )
                            },
                            directions = setOf(DismissDirection.EndToStart),
                        )
                    }
                }
            } else {
                Text("Product list is empty!")
            }

        }
    }
}

@Composable
private fun AddProductButton(
    modifier: Modifier = Modifier,
    onClick: () -> Unit,
) {
    FloatingActionButton(
        modifier = modifier,
        onClick = onClick,
        containerColor = MaterialTheme.colorScheme.primary,
        contentColor = MaterialTheme.colorScheme.onPrimary
    ) {
        Icon(
            imageVector = Icons.Filled.Add,
            contentDescription = null,
        )
    }
}
```

Create the `ProductDetailsViewModel.kt`:

```kotlin

@HiltViewModel
class ProductDetailsViewModel @Inject constructor(
    private val productRepository: ProductRepository,
    savedStateHandle: SavedStateHandle,
    ) : ViewModel() {

    private val _product = MutableStateFlow<Product?>(null)
    val product: Flow<Product?> = _product

    private val _name = MutableStateFlow("")
    val name: Flow<String> = _name

    private val _price = MutableStateFlow(0.0)
    val price: Flow<Double> = _price

    private val _imageUrl = MutableStateFlow("")
    val imageUrl: Flow<String> = _imageUrl

    init {
        val productId = savedStateHandle.get<String>(ProductDetailsDestination.productId)
        productId?.let {
            getProduct(productId = it)
        }
    }

    private fun getProduct(productId: String) {
        viewModelScope.launch {
           val result = productRepository.getProduct(productId).asDomainModel()
            _product.emit(result)
            _name.emit(result.name)
            _price.emit(result.price)
        }
    }

    fun onNameChange(name: String) {
        _name.value = name
    }

    fun onPriceChange(price: Double) {
        _price.value = price
    }

    fun onSaveProduct(image: ByteArray) {
        viewModelScope.launch {
            productRepository.updateProduct(
                id = _product.value?.id,
                price = _price.value,
                name = _name.value,
                imageFile = image,
                imageName = "image_${_product.value.id}",
            )
        }
    }

    fun onImageChange(url: String) {
        _imageUrl.value = url
    }

    private fun ProductDto.asDomainModel(): Product {
        return Product(
            id = this.id,
            name = this.name,
            price = this.price,
            image = this.image
        )
    }
}
```

Create the `ProductDetailsScreen.kt`:

```kotlin
@OptIn(ExperimentalCoilApi::class)
@SuppressLint("UnusedMaterialScaffoldPaddingParameter")
@Composable
fun ProductDetailsScreen(
    modifier: Modifier = Modifier,
    viewModel: ProductDetailsViewModel = hiltViewModel(),
    navController: NavController,
    productId: String?,
) {
    val snackBarHostState = remember { SnackbarHostState() }
    val coroutineScope = rememberCoroutineScope()

    Scaffold(
        snackbarHost = { SnackbarHost(snackBarHostState) },
        topBar = {
            TopAppBar(
                navigationIcon = {
                    IconButton(onClick = {
                        navController.navigateUp()
                    }) {
                        Icon(
                            imageVector = Icons.Filled.ArrowBack,
                            contentDescription = null,
                            tint = MaterialTheme.colorScheme.onPrimary
                        )
                    }
                },
                backgroundColor = MaterialTheme.colorScheme.primary,
                title = {
                    Text(
                        text = stringResource(R.string.product_details_text_screen_title),
                        color = MaterialTheme.colorScheme.onPrimary,
                    )
                },
            )
        }
    ) {
        val name = viewModel.name.collectAsState(initial = "")
        val price = viewModel.price.collectAsState(initial = 0.0)
        var imageUrl = Uri.parse(viewModel.imageUrl.collectAsState(initial = null).value)
        val contentResolver = LocalContext.current.contentResolver

        Column(
            modifier = modifier
                .padding(16.dp)
                .fillMaxSize()
        ) {
            val galleryLauncher =
                rememberLauncherForActivityResult(ActivityResultContracts.GetContent())
                { uri ->
                    uri?.let {
                        if (it.toString() != imageUrl.toString()) {
                            viewModel.onImageChange(it.toString())
                        }
                    }
                }

            Image(
                painter = rememberImagePainter(imageUrl),
                contentScale = ContentScale.Fit,
                contentDescription = null,
                modifier = Modifier
                    .padding(16.dp, 8.dp)
                    .size(100.dp)
                    .align(Alignment.CenterHorizontally)
            )
            IconButton(modifier = modifier.align(alignment = Alignment.CenterHorizontally),
                onClick = {
                    galleryLauncher.launch("image/*")
                }) {
                Icon(
                    imageVector = Icons.Filled.Edit,
                    contentDescription = null,
                    tint = MaterialTheme.colorScheme.primary
                )
            }
            OutlinedTextField(
                label = {
                    Text(
                        text = "Product name",
                        color = MaterialTheme.colorScheme.primary,
                        style = MaterialTheme.typography.titleMedium
                    )
                },
                maxLines = 2,
                shape = RoundedCornerShape(32),
                modifier = modifier.fillMaxWidth(),
                value = name.value,
                onValueChange = {
                    viewModel.onNameChange(it)
                },
            )
            Spacer(modifier = modifier.height(12.dp))
            OutlinedTextField(
                label = {
                    Text(
                        text = "Product price",
                        color = MaterialTheme.colorScheme.primary,
                        style = MaterialTheme.typography.titleMedium
                    )
                },
                maxLines = 2,
                shape = RoundedCornerShape(32),
                modifier = modifier.fillMaxWidth(),
                value = price.value.toString(),
                keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number),
                onValueChange = {
                    viewModel.onPriceChange(it.toDouble())
                },
            )
            Spacer(modifier = modifier.weight(1f))
            Button(
                modifier = modifier.fillMaxWidth(),
                onClick = {
                    if (imageUrl.host?.contains("supabase") == true) {
                        viewModel.onSaveProduct(image = byteArrayOf())
                    } else {
                        val image = uriToByteArray(contentResolver, imageUrl)
                        viewModel.onSaveProduct(image = image)
                    }
                    coroutineScope.launch {
                        snackBarHostState.showSnackbar(
                            message = "Product updated successfully !",
                            duration = SnackbarDuration.Short
                        )
                    }
                }) {
                Text(text = "Save changes")
            }
            Spacer(modifier = modifier.height(12.dp))
            OutlinedButton(
                modifier = modifier
                    .fillMaxWidth(),
                onClick = {
                    navController.navigateUp()
                }) {
                Text(text = "Cancel")
            }

        }

    }
}


private fun getBytes(inputStream: InputStream): ByteArray {
    val byteBuffer = ByteArrayOutputStream()
    val bufferSize = 1024
    val buffer = ByteArray(bufferSize)
    var len = 0
    while (inputStream.read(buffer).also { len = it } != -1) {
        byteBuffer.write(buffer, 0, len)
    }
    return byteBuffer.toByteArray()
}


private fun uriToByteArray(contentResolver: ContentResolver, uri: Uri): ByteArray {
    if (uri == Uri.EMPTY) {
        return byteArrayOf()
    }
    val inputStream = contentResolver.openInputStream(uri)
    if (inputStream != null) {
        return getBytes(inputStream)
    }
    return byteArrayOf()
}
```

Create a `AddProductScreen`:

```kotlin
@SuppressLint("UnusedMaterial3ScaffoldPaddingParameter")
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun AddProductScreen(
    modifier: Modifier = Modifier,
    navController: NavController,
    viewModel: AddProductViewModel = hiltViewModel(),
) {
    Scaffold(
        topBar = {
            TopAppBar(
                navigationIcon = {
                    IconButton(onClick = {
                        navController.navigateUp()
                    }) {
                        Icon(
                            imageVector = Icons.Filled.ArrowBack,
                            contentDescription = null,
                            tint = MaterialTheme.colorScheme.onPrimary
                        )
                    }
                },
                backgroundColor = MaterialTheme.colorScheme.primary,
                title = {
                    Text(
                        text = stringResource(R.string.add_product_text_screen_title),
                        color = MaterialTheme.colorScheme.onPrimary,
                    )
                },
            )
        }
    ) { padding ->
        val navigateAddProductSuccess =
            viewModel.navigateAddProductSuccess.collectAsState(initial = null).value
        val isLoading =
            viewModel.isLoading.collectAsState(initial = null).value
        if (isLoading == true) {
            LoadingScreen(message = "Adding Product",
                onCancelSelected = {
                    navController.navigateUp()
                })
        } else {
            SuccessScreen(
                message = "Product added",
                onMoreAction = {
                    viewModel.onAddMoreProductSelected()
                },
                onNavigateBack = {
                    navController.navigateUp()
                })
        }

    }
}
```

Create the `AddProductViewModel.kt`:

```kotlin
@HiltViewModel
class AddProductViewModel @Inject constructor(
    private val productRepository: ProductRepository,
) : ViewModel() {

    private val _isLoading = MutableStateFlow(false)
    val isLoading: Flow<Boolean> = _isLoading

    private val _showSuccessMessage = MutableStateFlow(false)
    val showSuccessMessage: Flow<Boolean> = _showSuccessMessage

    fun onCreateProduct(name: String, price: Double) {
        if (name.isEmpty() || price <= 0) return
        viewModelScope.launch {
            _isLoading.value = true
            val product = Product(
                id = UUID.randomUUID().toString(),
                name = name,
                price = price,
            )
            productRepository.createProduct(product = product)
            _isLoading.value = false
            _showSuccessMessage.emit(true)

        }
    }
}
```

Create a `SignUpViewModel`:

```kotlin
@HiltViewModel
class SignUpViewModel @Inject constructor(
    private val authenticationRepository: AuthenticationRepository
) : ViewModel() {

    private val _email = MutableStateFlow("")
    val email: Flow<String> = _email

    private val _password = MutableStateFlow("")
    val password = _password

    fun onEmailChange(email: String) {
        _email.value = email
    }

    fun onPasswordChange(password: String) {
        _password.value = password
    }

    fun onSignUp() {
        viewModelScope.launch {
            authenticationRepository.signUp(
                email = _email.value,
                password = _password.value
            )
        }
    }
}
```

Create the `SignUpScreen.kt`:

```kotlin
@Composable
fun SignUpScreen(
    modifier: Modifier = Modifier,
    navController: NavController,
    viewModel: SignUpViewModel = hiltViewModel()
) {
    val snackBarHostState = remember { SnackbarHostState() }
    val coroutineScope = rememberCoroutineScope()
    Scaffold(
        snackbarHost = { androidx.compose.material.SnackbarHost(snackBarHostState) },
        topBar = {
            TopAppBar(
                navigationIcon = {
                    IconButton(onClick = {
                        navController.navigateUp()
                    }) {
                        Icon(
                            imageVector = Icons.Filled.ArrowBack,
                            contentDescription = null,
                            tint = MaterialTheme.colorScheme.onPrimary
                        )
                    }
                },
                backgroundColor = MaterialTheme.colorScheme.primary,
                title = {
                    Text(
                        text = "Sign Up",
                        color = MaterialTheme.colorScheme.onPrimary,
                    )
                },
            )
        }
    ) { paddingValues ->
        Column(
            modifier = modifier
                .padding(paddingValues)
                .padding(20.dp)
        ) {
            val email = viewModel.email.collectAsState(initial = "")
            val password = viewModel.password.collectAsState()
            OutlinedTextField(
                label = {
                    Text(
                        text = "Email",
                        color = MaterialTheme.colorScheme.primary,
                        style = MaterialTheme.typography.titleMedium
                    )
                },
                maxLines = 1,
                shape = RoundedCornerShape(32),
                modifier = modifier.fillMaxWidth(),
                value = email.value,
                onValueChange = {
                    viewModel.onEmailChange(it)
                },
            )
            OutlinedTextField(
                label = {
                    Text(
                        text = "Password",
                        color = MaterialTheme.colorScheme.primary,
                        style = MaterialTheme.typography.titleMedium
                    )
                },
                maxLines = 1,
                shape = RoundedCornerShape(32),
                modifier = modifier
                    .fillMaxWidth()
                    .padding(top = 12.dp),
                value = password.value,
                onValueChange = {
                    viewModel.onPasswordChange(it)
                },
            )
            val localSoftwareKeyboardController = LocalSoftwareKeyboardController.current
            Button(modifier = modifier
                .fillMaxWidth()
                .padding(top = 12.dp),
                onClick = {
                    localSoftwareKeyboardController?.hide()
                    viewModel.onSignUp()
                    coroutineScope.launch {
                        snackBarHostState.showSnackbar(
                            message = "Create account successfully. Sign in now!",
                            duration = SnackbarDuration.Long
                        )
                    }
                }) {
                Text("Sign up")
            }
        }
    }
}
```

Create a `SignInViewModel`:

```kotlin
@HiltViewModel
class SignInViewModel @Inject constructor(
    private val authenticationRepository: AuthenticationRepository
) : ViewModel() {

    private val _email = MutableStateFlow("")
    val email: Flow<String> = _email

    private val _password = MutableStateFlow("")
    val password = _password

    fun onEmailChange(email: String) {
        _email.value = email
    }

    fun onPasswordChange(password: String) {
        _password.value = password
    }

    fun onSignIn() {
        viewModelScope.launch {
            authenticationRepository.signIn(
                email = _email.value,
                password = _password.value
            )
        }
    }

    fun onGoogleSignIn() {
        viewModelScope.launch {
            authenticationRepository.signInWithGoogle()
        }
    }

}
```

Create the `SignInScreen.kt`:

```kotlin
@OptIn(ExperimentalMaterial3Api::class, ExperimentalComposeUiApi::class)
@Composable
fun SignInScreen(
    modifier: Modifier = Modifier,
    navController: NavController,
    viewModel: SignInViewModel = hiltViewModel()
) {
    val snackBarHostState = remember { SnackbarHostState() }
    val coroutineScope = rememberCoroutineScope()
    Scaffold(
        snackbarHost = { androidx.compose.material.SnackbarHost(snackBarHostState) },
        topBar = {
            TopAppBar(
                navigationIcon = {
                    IconButton(onClick = {
                        navController.navigateUp()
                    }) {
                        Icon(
                            imageVector = Icons.Filled.ArrowBack,
                            contentDescription = null,
                            tint = MaterialTheme.colorScheme.onPrimary
                        )
                    }
                },
                backgroundColor = MaterialTheme.colorScheme.primary,
                title = {
                    Text(
                        text = "Login",
                        color = MaterialTheme.colorScheme.onPrimary,
                    )
                },
            )
        }
    ) { paddingValues ->
        Column(
            modifier = modifier
                .padding(paddingValues)
                .padding(20.dp)
        ) {
            val email = viewModel.email.collectAsState(initial = "")
            val password = viewModel.password.collectAsState()
            androidx.compose.material.OutlinedTextField(
                label = {
                    Text(
                        text = "Email",
                        color = MaterialTheme.colorScheme.primary,
                        style = MaterialTheme.typography.titleMedium
                    )
                },
                maxLines = 1,
                shape = RoundedCornerShape(32),
                modifier = modifier.fillMaxWidth(),
                value = email.value,
                onValueChange = {
                    viewModel.onEmailChange(it)
                },
            )
            androidx.compose.material.OutlinedTextField(
                label = {
                    Text(
                        text = "Password",
                        color = MaterialTheme.colorScheme.primary,
                        style = MaterialTheme.typography.titleMedium
                    )
                },
                maxLines = 1,
                shape = RoundedCornerShape(32),
                modifier = modifier
                    .fillMaxWidth()
                    .padding(top = 12.dp),
                value = password.value,
                onValueChange = {
                    viewModel.onPasswordChange(it)
                },
            )
            val localSoftwareKeyboardController = LocalSoftwareKeyboardController.current
            Button(modifier = modifier
                .fillMaxWidth()
                .padding(top = 12.dp),
                onClick = {
                    localSoftwareKeyboardController?.hide()
                    viewModel.onGoogleSignIn()
                }) {
                Text("Sign in with Google")
            }
            Button(modifier = modifier
                .fillMaxWidth()
                .padding(top = 12.dp),
                onClick = {
                    localSoftwareKeyboardController?.hide()
                    viewModel.onSignIn()
                    coroutineScope.launch {
                        snackBarHostState.showSnackbar(
                            message = "Sign in successfully !",
                            duration = SnackbarDuration.Long
                        )
                    }
                }) {
                Text("Sign in")
            }
            OutlinedButton(modifier = modifier
                .fillMaxWidth()
                .padding(top = 12.dp), onClick = {
                navController.navigate(SignUpDestination.route)
            }) {
                Text("Sign up")
            }
        }
    }
}
```
