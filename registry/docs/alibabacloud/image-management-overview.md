MaxCompute provides the image management feature which includes the built-in images and the custom image. You can create custom images or use built-int images such as data analysis, scientific computing, and machine learning, such as Pandas, Numpy, Scikit-learn, and XGBoost. These images facilitate the use of existing images in SQL UDF, PyODPS, and MaxFrame development scenarios, eliminating the need for complex resource packaging and uploading.

## **Background information**

MaxCompute provides user-defined functions (UDFs) and Python development capabilities such as PyODPS and MaxFrame. You can write Java or Python UDFs to implement different development requirements. In the development, you need to prepare environments, package and download the dependent third-party packages, and upload those packages to the MaxCompute project. MaxCompute executes the UDF within a secure container and mounts the dependencies into the runtime environment of container.

You need to solve several problems during the development process:

-   You need to find all dependent third-party packages when a job relies on numerous external dependencies, package and upload them to the MaxCompute project. The process is complex and the usage costs are high.
    
-   Repeated uploads of the same third-party package dependencies across different MaxCompute projects lead to increased management costs and storage overhead.
    
-   The multitude of dependency package versions and the lack of a unified development environment complicate maintenance and can lead to development conflicts due to environment discrepancies.
    

To address these issues, MaxCompute provides the image management feature to simplify the SQL UDF and Python development process by allowing the use of predefined images as job runtime environments, thereby accelerating development and enhancing service responsiveness and performance.

## **Features**

-   **Rich built-in images**
    
    MaxCompute introduces built-in images which include scientific computing and data analysis such as Pandas, NumPy, Scikit-learn, and XGBoost. You can use those images in data analysis and data mining scenarios. This convenience bypasses the need for laborious environment setup, packaging, and uploading. For more information on built-in images, see [Built-in images](/help/en/maxcompute/user-guide/built-in-images).
    
-   **Flexible custom images**
    
    You can upload and manage custom images as needed, which supports sharing within the tenant, reducing management and resource storage costs, and preventing development conflicts due to inconsistent environments and versions. For more information on custom images, see [Custom images](/help/en/maxcompute/user-guide/custom-image).
    
-   **Efficient and convenient usage**
    
    You can apply an image to a job by specifying the Flag parameter when calling the UDF by SQL. In PyODPS (Only supports version 0.11.5 and above) and MaxFrame development, the required image can also be specified through parameters. For detailed usage, see [Scenario practices](/help/en/maxcompute/user-guide/image-management-scene-practice).
