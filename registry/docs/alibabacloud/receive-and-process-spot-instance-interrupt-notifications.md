Spot Instances may be interrupted. If your business is sensitive to instance interruptions, you must promptly detect interruptions of spot instances and respond to the interruption events in an appropriate manner to minimize business losses. This topic provides an example of using Simple Message Queue (SMQ), formerly known as Message Service (MNS), to detect and respond to interruption events of spot instances.

## **Workflow**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1564969671/CAEQPxiBgMCzrPXCtxkiIDViYjQxMjk2YzAzNTQ2NTJhNmE0MDU2MjYyMzcyNzdk4804244_20241203152821.915.svg)

## **Preparations**

1.  **Create an AccessKey pair.**
    
    Create an AccessKey pair for a Resource Access Management (RAM) user. An Alibaba Cloud account has all permissions on resources. If the AccessKey pair of your Alibaba Cloud account is leaked, your resources are exposed to risks. We recommend that you use the AccessKey pair of a RAM user. For information about how to create an AccessKey pair, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair).
    
2.  **Grant permissions to the RAM user.**
    
    Grant a RAM user the permissions to perform operations on resources related to SMQ. The sample code provided in this topic consumes messages from SMQ. The following table describes the permissions on SMQ that you can grant.
    
    **Cloud service**
    
    **Policy**
    
    SMQ, formerly MNS
    
    AliyunMNSFullAccess
    
3.  **Configure access credentials and endpoints.**
    
    The sample code in this topic reads the access credentials and endpoints from system environment variables:
    
    -   Configure environment variables. For more information, see [Configure environment variables in Linux, macOS, and Windows](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).
        
    -   Configure endpoints. For more information, see [Configure an endpoint](/help/en/mns/developer-reference/configure-access-domain-names-and-credentials#b5d4a65cffszt).
        
4.  **Install an SMQ SDK.**
    
    Obtain SMQ SDK for Java. In this example, SMQ SDK for Java is installed by adding Maven dependencies. For information about other installation methods, see [Install SMQ SDK for Java](https://next.api.alibabacloud.com/api-tools/sdk/Mns-open?spm=a2c4g.11186623.0.0.66125e0392sS1R&version=2022-01-19&language=java-tea&tab=primer-doc).
    
    The following sample code provides an example on how to add Maven dependencies:
    
    ```
    <dependencies>
        <! -- Alibaba Cloud SMQ SDK -->
        <dependency>
          <groupId>com.aliyun.mns</groupId>
          <artifactId>aliyun-sdk-mns</artifactId>
          <version>1.2.0</version>
        </dependency>
    </dependencies>
    ```
    

## **Procedure**

1.  **Create an SMQ.**
    
    Create an SMQ to receive the spot instance interruption notifications that CloudMonitor sends.
    
    1.  Log on to the [SMQ console](https://mns.console.alibabacloud.com/). In the left-side navigation pane, choose **Queue Model** > **Queues**.
        
    2.  In the top navigation bar, select a region. On the **Queues** page, click **Create Queue**.
        
    3.  In the **Create Queue** panel, follow the on-screen instructions to configure the required parameters and click **OK**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5623892471/p922587.png)
        
2.  **Create a subscription policy.**
    
    CloudMonitor monitors the interruption events of spot instances in real time. if an event alert occurs, CloudMonitor pushes the interruption notifications through the push channels specified in the subscription policy.
    
    1.  Log on to the [CloudMonitor console](https://cloudmonitor.console.alibabacloud.com/). In the left-side navigation pane, choose **Event Center > Event Subscription**.
        
    2.  On the **Subscription Policy** tab, click **Create Subscription Policy** and configure the required parameters.
        
        This example describes only the main parameters used to subscribe to spot instance interruption events. You can specify parameters based on your business requirements. For more information, see [Manage event subscriptions](/help/en/cms/cloudmonitor-1-0/user-guide/manage-notification-policies).
        
        -   **Subscription Type**: Select **System Events**.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5623892471/p922620.png)
            
        -   **Subscription Scope**: Specify the parameters as shown in the following figure.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5623892471/p922621.png)
            
        -   **Push and Integration**: Click **Add Channel**. In the dialog box that appears, click **Increase Channels**. In the dialog box that appears, select the SMQ that you created in Step 1 and configure other parameters by following the on-screen instructions. For information about push channels, see [Manage push channels](/help/en/cms/cloudmonitor-1-0/user-guide/manage-push-channels).
            
3.  **Simulate an interruption event.**
    
    Spot instance interruption events are triggered events. When you develop an interruption event handler for a spot instance, you cannot debug the code. You can use **Debug Event Subscription** to simulate the interruption events of spot instances.
    
    1.  On the **Subscription Policy** tab, click **Debug Event Subscription**.
        
    2.  In the **Create Event Debugging** panel, set **Products** to **Elastic Compute Service (ECS)** and **Name** to **Instance:PreemptibleInstanceInterruption**.
        
        The system automatically generates the debugging content in the JSON format. Replace the resource information in the JSON file with information about the spot instance for which you want to simulate an interruption event.
        
        -   Replace the `Alibaba Cloud account ID` with the ID of your Alibaba Cloud account.
            
        -   Replace `<resource-id>` and `<instanceId>` with the ID of the spot instance.
            
        -   Replace `<region ID>` with the region ID of the spot instance.
            
            ```
            {
                "product": "ECS",
                "resourceId": "acs:ecs:cn-shanghai:<Alibaba Cloud account ID>UID:instance/<resource-id>",
                "level": "WARN",
                "instanceName": "instanceName",
                "regionId": "<Region ID>",
                "groupId": "0",
                "name": "Instance:PreemptibleInstanceInterruption",
                "content": {
                    "instanceId": "<instanceId>",
                    "instanceName": "wor***b73",
                    "action": "delete"
                },
                "status": "Normal"
            }
            ```
            
    3.  Click **OK**. A message indicating that the operation is successful appears. CloudMonitor automatically sends an alert notification to SMQ.
        
4.  **Pull and respond to messages.**
    
    Simulate the interruption event handler to pull the interruption notification message of the spot instance from SMQ. You can also add the corresponding business handling logic based on your business requirements. The following sample code provides an example on how to use a grayscale image conversion handler to respond to and handle interruption events:
    
    1.  Use a thread task to simulate a grayscale image conversion handler.
        
        ```
        import com.aliyun.mns.client.CloudAccount;
        import com.aliyun.mns.client.CloudQueue;
        import com.aliyun.mns.client.MNSClient;
        import com.aliyun.mns.common.utils.ServiceSettings;
        import com.aliyun.mns.model.Message;
        import org.json.JSONObject;
        
        import javax.imageio.ImageIO;
        import java.awt.image.BufferedImage;
        import java.io.File;
        import java.util.Base64;
        import java.util.concurrent.atomic.AtomicBoolean;
        
        /**
         * The implementation class for the interruptible image processor that supports grayscale conversion.
         * The interruption detection mechanism based on the atomic variable and thread interruption flag.
         * Features:
         * 1. Perform per-chunk processing to automatically save the progress.
         * 2. Immediately respond to the interruption event of the spot instance.
         * 3. Generate a file that contains partial results after the spot instance interruption event occurs.
         */
        public class InterruptibleImageProcessor implements Runnable {
            /**
             * Use the atomic boolean value for thread-safe status control.
             */
            private final AtomicBoolean running = new AtomicBoolean(true);
            /**
             * Store the image data that is being processed.
             */
            private BufferedImage processedImage;
            /**
             * The processing progress in percentage. Valid values: 0 to 100.
             */
            private int progress;
            /**
             * The thread execution entry.
             * **Interruption handling logic**:
             * 1. Save the current progress after the system captures an interruption exception.
             * 2. Resume the thread to the state when the interruption occurred to retain the interruption semantics.
             */
            @Override
            public void run() {
                try {
                    convertToGrayScale(new File("input.jpg"), new File("output.jpg"));
                    // Simulate an interruption event when the spot instance is running.
                    Thread.sleep(5000); 
                    System.out.println("Image processing is complete");
                } catch (InterruptedException e) {
                    System.out.println("The processing is interrupted, and the progress is saved to" + progress + "%");
                    saveProgress(new File("partial_output.jpg"));
                    Thread.currentThread().interrupt(); // Resume the thread to the state when the thread was interrupted.
                } catch (Exception e) {
                    System.err.println("Handling error: " + e.getMessage());
                }
            }
        
            /**
             * Method to trigger external interruptions
             * **Collaboration mechanism**:
             * Double-check for interruptions based on the thread interruption flag.
             */
            public void stop() {
                running.set(false);
            }
        }
        ```
        
    2.  The grayscale image conversion method.
        
        ```
        /**
         * Convert the image that you input to a grayscale image and save the image.
         * @param inputFile The object of the original image file.
         * @param outputFile The output file object.
         * @throws Exception I/O anomalies and interruption exceptions are included.
         *
         * **Algorithm description**:
         * Use the weighted average values and the coefficients that are designed based on the perceived brightness of red, green, and blue lights in the following formula to convert an image to grayscale:
         * Gray = 0.30*R + 0.59*G + 0.11*B
         * References: ITU-R Recommendation BT. 601.
         */
        public void convertToGrayScale(File inputFile, File outputFile) throws Exception {
            // Read the source image data.
            BufferedImage original = ImageIO.read(inputFile);
            int width = original.getWidth();
            int height = original.getHeight();
            // Create a grayscale image buffer.
            processedImage = new BufferedImage(width, height, BufferedImage.TYPE_BYTE_GRAY);
        
            // Perform per-chunk processing to save the progress.
            for (int y = 0; y < height && running.get(); y++) {
                // Perform pixel-by-pixel processing for the image.
                for (int x = 0; x < width; x++) {
                    // In the first interruption detection, check for the thread interruption flag.
                    if (Thread.interrupted()) {
                        throw new InterruptedException("Image processing interrupted");
                    }
                    /* Core algorithm for grayscale image conversion * /
                    int rgb = original.getRGB(x, y);
                    // Decompose red, green, and blue (RGB) channels in the Alpha-Red-Green-Blue (ARGB) format.
                    // The red channel.
                    int r = (rgb >> 16) & 0xFF;
                    // The green channel.
                    int g = (rgb >> 8) & 0xFF;
                    // The blue channel.
                    int b = rgb & 0xFF;
                    // Calculate grayscale values by using the weighted average method.
                    int gray = (int)(0.3 * r + 0.59 * g + 0.11 * b);
                    // Reconstruct the RGB values by copying grayscale values to the red, green, and blue channels.
                    processedImage.setRGB(x, y, (gray << 16) | (gray << 8) | gray);
                    // Update the progress in percentage. Take note of the integer division issue, in which an integer value other than a decimal value is returned.
                    progress = (y * width + x) * 100 / (width * height);
                }
                // Automatically save the progress after every 50 lines are processed based on the checkpoint mechanism.
                if (y % 50 == 0) {
                    saveProgress(outputFile);
                }
            }
            // Save the complete result.
            ImageIO.write(processedImage, "jpg", outputFile);
        }
        ```
        
    3.  The image processing progress is saved.
        
        ```
        /**
         * Save the processing progress to a specified file.
         * @param outputFile The output file object.
         *
         * **Note**:
         * 1. The fail-silent mechanism is implemented to prevent save process interruptions.
         * 2. A temporary file named partial_output.jpg is generated.
         */
        private void saveProgress(File outputFile) {
            try {
                // Use a temporary file name to prevent the ultimate file from being overridden.
                ImageIO.write(processedImage, "jpg", new File("partial_output.jpg"));
            } catch (Exception e) {
                System.err.println("Auto-save failed: " + e.getMessage());
            }
        }
        ```
        
    4.  Test the response processing.
        
        When the test image processing program is running, the system receives an event that the spot instance is about to be interrupted and reclaimed and responds to the event.
        
        ```
        /**
         * Main testing method
         * **Test scenario**:
         * 1. Process the thread.
         * 2. Pull the interruption event notification message.
         * 3. Wait for the thread to terminate.
         */
        public static void main(String[] args) throws InterruptedException {
            // Initialize the MNSClient account.
            CloudAccount account = new CloudAccount(
                    ServiceSettings.getMNSAccessKeyId(),
                    ServiceSettings.getMNSAccessKeySecret(),
                    ServiceSettings.getMNSAccountEndpoint());
            MNSClient client = account.getMNSClient();
            // Check whether an interruption event occurs on the spot instance.
            boolean isMatch = false;
            // Start the image processing program.
            InterruptibleImageProcessor processor = new InterruptibleImageProcessor();
            Thread processThread = new Thread(processor);
            processThread.start();
            try{
                // Obtain the messages from SMQ.
                CloudQueue queue = client.getQueueRef("spot-interruption");
                Message popMsg = queue.popMessage();
                if (popMsg != null){
                    // By default, the message body is encoded in Base64.
                    System.out.println("message body: " + popMsg.getMessageBodyAsRawString());
                    // Perform Base64 decoding.
                    byte[] decodedBytes = Base64.getDecoder().decode(popMsg.getMessageBodyAsRawString());
                    String decodedString = new String(decodedBytes);
                    System.out.println("message content: " + decodedString);
                    // Parse the JSON string.
                    JSONObject json = new JSONObject(decodedString);
                    // Obtain the value of the event name field.
                    String name = json.getString("name");
                    isMatch = "Instance:PreemptibleInstanceInterruption".equals(name);
                    // Respond to the interruption event of the spot instance.
                    if(isMatch){
                        System.out.println("The spot instance is about to be interrupted and reclaimed.");
                        // Terminate the image processing program.
                        processor.stop();
                        processThread.interrupt();
                        System.out.println("Program terminated");
                        processThread.join();
                        // Delete the message.
                        queue.deleteMessage(popMsg.getReceiptHandle());
                    }
                }
            }catch (Exception e){
                System.out.println("Unknown exception happened!");
                e.printStackTrace();
            }
            client.close();
        }
        ```
        
    
    Sample code:
    
    ```
    import com.aliyun.mns.client.CloudAccount;
    import com.aliyun.mns.client.CloudQueue;
    import com.aliyun.mns.client.MNSClient;
    import com.aliyun.mns.common.utils.ServiceSettings;
    import com.aliyun.mns.model.Message;
    import org.json.JSONObject;
    import javax.imageio.ImageIO;
    import java.awt.image.BufferedImage;
    import java.io.File;
    import java.util.Base64;
    import java.util.concurrent.atomic.AtomicBoolean;
    
    /**
     * The implementation class for the interruptible image processor that supports grayscale conversion.
     * Interruption detection mechanism based on the atomic variable and thread interruption flag.
     * Features:
     * 1. Perform per-chunk processing to automatically save the progress.
     * 2. Immediately respond to the interruption event of the spot instance.
     * 3. Generate a file that contains partial results after the spot instance interruption event occurs.
     */
    public class InterruptibleImageProcessor implements Runnable {
        /**
         * Use the atomic boolean value for thread-safe status control.
         */
        private final AtomicBoolean running = new AtomicBoolean(true);
        /**
         * Store the image data that is being processed.
         */
        private BufferedImage processedImage;
        /**
         * The processing progress in percentage. Valid values: 0 to 100.
         */
        private int progress;
    
        /**
         * Convert the image that you input to a grayscale image and save the image.
         * @param inputFile The object of the original image file.
         * @param outputFile The output file object.
         * @throws Exception I/O anomalies and interruption exceptions are included.
         *
         * **Algorithm description**:
         * Use the weighted average values and the coefficients that are designed based on the perceived brightness of red, green, and blue lights in the following formula to convert an image to grayscale:
         * Gray = 0.30*R + 0.59*G + 0.11*B
         * References: ITU-R Recommendation BT. 601.
         */
        public void convertToGrayScale(File inputFile, File outputFile) throws Exception {
            // Read the source image data.
            BufferedImage original = ImageIO.read(inputFile);
            int width = original.getWidth();
            int height = original.getHeight();
            // Create a grayscale image buffer.
            processedImage = new BufferedImage(width, height, BufferedImage.TYPE_BYTE_GRAY);
    
            // Perform per-chunk processing to save the progress.
            for (int y = 0; y < height && running.get(); y++) {
                // Perform pixel-by-pixel processing for the image.
                for (int x = 0; x < width; x++) {
                    // In the first interruption detection, check for the thread interruption flag.
                    if (Thread.interrupted()) {
                        throw new InterruptedException("Image processing interrupted");
                    }
                    /* Core algorithm for grayscale image conversion * /
                    int rgb = original.getRGB(x, y);
                    // Decompose RGB channels in the ARGB format.
                    // The red channel.
                    int r = (rgb >> 16) & 0xFF;
                    // The green channel.
                    int g = (rgb >> 8) & 0xFF;
                    // The blue channel.
                    int b = rgb & 0xFF;
                    // Calculate grayscale values by using the weighted average method.
                    int gray = (int)(0.3 * r + 0.59 * g + 0.11 * b);
                    // Reconstruct the RGB values by copying grayscale values to the red, green, and blue channels.
                    processedImage.setRGB(x, y, (gray << 16) | (gray << 8) | gray);
                    // Update the progress in percentage. Take note of the integer division issue, in which an integer value other than a decimal value is returned.
                    progress = (y * width + x) * 100 / (width * height);
                }
                // Automatically save the progress after every 50 lines are processed based on the checkpoint mechanism.
                if (y % 50 == 0) {
                    saveProgress(outputFile);
                }
            }
            // Save the complete result.
            ImageIO.write(processedImage, "jpg", outputFile);
        }
    
        /**
         * Save the processing progress to a specified file.
         * @param outputFile The output file object.
         *
         * **Note**:
         * 1. The fail-silent mechanism is implemented to prevent save process interruptions.
         * 2. A temporary file named partial_output.jpg is generated.
         */
        private void saveProgress(File outputFile) {
            try {
                // Use a temporary file name to prevent the ultimate file from being overridden.
                ImageIO.write(processedImage, "jpg", new File("partial_output.jpg"));
            } catch (Exception e) {
                System.err.println("Auto save failed: " + e.getMessage());
            }
        }
    
        /**
         * The thread execution entry.
         * **Interruption handling logic**:
         * 1. Save the current progress after the system captures an interruption exception.
         * 2. Resume the thread to the state when the interruption occurred to retain the interruption semantics.
         */
        @Override
        public void run() {
            try {
                convertToGrayScale(new File("/Users/shaoberlin/Desktop/idea_workspace/aliyun/src/main/resources/input.jpg"), new File("output.jpg"));
                // Simulate an interruption event when the spot instance is running.
                Thread.sleep(5000); 
                System.out.println("Image processing is complete");
            } catch (InterruptedException e) {
                System.out.println("The processing is interrupted, and the progress is saved to" + progress + "%");
                saveProgress(new File("partial_output.jpg"));
                Thread.currentThread().interrupt(); // Resume the thread to the state when the thread was interrupted.
            } catch (Exception e) {
                System.err.println("Handling error:" + e.getMessage());
            }
        }
    
        /**
         * Method to trigger external interruptions
         * **Collaboration mechanism**:
         * Double-check for interruptions based on the thread interruption flag.
         */
        public void stop() {
            running.set(false);
        }
    
        /**
         * Main testing method
         * **Test scenario**:
         * 1. Process the thread.
         * 2. Trigger an interruption after 5,000 million seconds.
         * 3. Wait for the thread to terminate.
         */
        public static void main(String[] args) throws InterruptedException {
            // Initialize the MNSClient account.
            CloudAccount account = new CloudAccount(
                    ServiceSettings.getMNSAccessKeyId(),
                    ServiceSettings.getMNSAccessKeySecret(),
                    ServiceSettings.getMNSAccountEndpoint());
            MNSClient client = account.getMNSClient();
            // Check whether an interruption event occurs on the spot instance.
            boolean isMatch = false;
            // Start the image processing program.
            InterruptibleImageProcessor processor = new InterruptibleImageProcessor();
            Thread processThread = new Thread(processor);
            processThread.start();
            try{
                // Obtain the messages from SMQ.
                CloudQueue queue = client.getQueueRef("spot-interruption");
                Message popMsg = queue.popMessage();
                if (popMsg != null){
                    // By default, the message body is encoded in Base64.
                    System.out.println("message body: " + popMsg.getMessageBodyAsRawString());
                    // Perform Base64 decoding.
                    byte[] decodedBytes = Base64.getDecoder().decode(popMsg.getMessageBodyAsRawString());
                    String decodedString = new String(decodedBytes);
                    System.out.println("message content: " + decodedString);
                    // Parse the JSON string.
                    JSONObject json = new JSONObject(decodedString);
                    // Obtain the value of the event name field.
                    String name = json.getString("name");
                    isMatch = "Instance:PreemptibleInstanceInterruption".equals(name);
                    // Respond to the interruption event of the spot instance.
                    if(isMatch){
                        System.out.println("The spot instance is about to be interrupted and reclaimed.");
                        // Terminate the image processing program.
                        processor.stop();
                        processThread.interrupt();
                        System.out.println("Program terminated");
                        processThread.join();
                        // Delete the message.
                        queue.deleteMessage(popMsg.getReceiptHandle());
                    }
                }
            }catch (Exception e){
                System.out.println("Unknown exception happened!");
                e.printStackTrace();
            }
            client.close();
        }
    }
    ```
    

**Note**

-   If the business logic involves creating snapshots, see [CreateSnapshot](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createsnapshot).
    
-   If the business logic involves creating a custom image, see [CreateImage](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createimage).
    

## **Reference**

If you store important data or configurations on a spot instance, we recommend that you familiarize yourself with the data restoration methods of spot instances and configure the required settings in advance to prevent data loss. For more information, see [Retain and restore data](/help/en/ecs/user-guide/preemptible-instance-data-retention-and-data-recovery-after-interrupt-reclamation).
