### Implement the `MainActivity`

In the `MainActivity` you created earlier, show your newly created screens:

```kotlin
@AndroidEntryPoint
class MainActivity : ComponentActivity() {
    @Inject
    lateinit var supabaseClient: SupabaseClient

    @OptIn(ExperimentalMaterial3Api::class)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            ManageProductsTheme {
                // A surface container using the 'background' color from the theme
                val navController = rememberNavController()
                val currentBackStack by navController.currentBackStackEntryAsState()
                val currentDestination = currentBackStack?.destination
                Scaffold { innerPadding ->
                    NavHost(
                        navController,
                        startDestination = ProductListDestination.route,
                        Modifier.padding(innerPadding)
                    ) {
                        composable(ProductListDestination.route) {
                            ProductListScreen(
                                navController = navController
                            )
                        }

                        composable(AuthenticationDestination.route) {
                            SignInScreen(
                                navController = navController
                            )
                        }

                        composable(SignUpDestination.route) {
                            SignUpScreen(
                                navController = navController
                            )
                        }

                        composable(AddProductDestination.route) {
                            AddProductScreen(
                                navController = navController
                            )
                        }

                        composable(
                            route = "${ProductDetailsDestination.route}/{${ProductDetailsDestination.productId}}",
                            arguments = ProductDetailsDestination.arguments
                        ) { navBackStackEntry ->
                            val productId =
                                navBackStackEntry.arguments?.getString(ProductDetailsDestination.productId)
                            ProductDetailsScreen(
                                productId = productId,
                                navController = navController,
                            )
                        }
                    }
                }
            }
        }
    }
}
```
