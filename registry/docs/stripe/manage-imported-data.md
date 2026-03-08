# Manage imported data

Search for and manage existing imported data.

After you import data, you can manage it through the [Dashboard](https://dashboard.stripe.com/revenue-recognition/data-import).

## CSV imports

After you upload a CSV, you can refresh the page to see the status of the import in the **Imported files** preview on the top right.
![Data import landing page](https://b.stripecdn.com/docs-statics-srv/assets/data-import-landing-page.8b30b5093e9353bc36730662b1958102.png)

Click **View all** to see a list of all imported files.
![Data import imported files csv list](https://b.stripecdn.com/docs-statics-srv/assets/data-import-imported-files-csv-list.c6d02c2774ef8aaf9c6a775a6ccad023.png)

To identify the import type, view the label under the file type column. These are the label types:

- Transactions (for general import)
- Exclusions (for exclusion import)
- Journal entries (for journal entry import)

Successful imports show the number of lines imported. Error messages for unsuccessful imports display alongside the specific line numbers where they occurred.
![Data import detail drawer](https://b.stripecdn.com/docs-statics-srv/assets/data-import-detail-drawer.912f37ff5cef6754f05453dc29d9d5f6.png)

## Transactions

From the list view, you can see a paginated view of all transactions that you’ve imported. For Stripe transactions, we provide a link to the main transaction page in the Dashboard.
![Data import transaction list](https://b.stripecdn.com/docs-statics-srv/assets/data-import-transactions-list.a7c725b4dc743c0531d21c7c64280a61.png)

The column format follows the CSV format, with the addition of a status column. An **Active** status indicates that the Revenue Recognition reports include the imported data. A **Processing** status indicates that our system has recorded the imported data, but revenue recognition reports don’t yet include this data.

Transactions that have been split into multiple components have a caret icon that you can click to reveal the applicable split transactions.
![Data import transaction list with split transactions expanded](https://b.stripecdn.com/docs-statics-srv/assets/data-import-transactions-list-expanded-split-transactions.097a53fa8a895daa70599a79eac250f2.png)

### Filtering

The transaction list supports filtering on all of the dates associated with the imported data. Additionally, you can filter on **Source**, **Transaction ID** and **Split transaction ID**, but these values must be exact matches.

### Deletion

To delete a transaction, select its checkbox and click **Delete**. It can take up to 24 hours for Revenue Recognition reports to reflect deletions.

## Exclusions

From the list view, you can see a paginated view of all excluded transactions that you imported. For transactions other than invoice items, we provide a link to the main transaction page in the Dashboard.
![Data import exclusion list](https://b.stripecdn.com/docs-statics-srv/assets/data-import-exclusions-list.7f63e57dae0140181bb185a29055c042.png)

The column follows the exclusion CSV format, with the addition of a status column. An **Active** status indicates that the transaction is excluded from your Revenue Recognition reports. A **Processing** status indicates that our system has recorded the transaction to be excluded, but Revenue Recognition reports don’t yet exclude this data.

### Filtering

The exclusion list supports filtering on the ID of the excluded transactions on exactly matched values.

### Deletion

To reverse the exclusions, select the transaction checkbox and click **Delete**. It can take up to 24 hours for Revenue Recognition reports to reflect reversals.

## Journal Entries

From the list view, you can see a paginated view of all journal entries that you imported.
![Data import journal entry list](https://b.stripecdn.com/docs-statics-srv/assets/data-import-journal-entries-list.ca5fd9dc214908cc2972de0c4485ac10.png)

The column follows the journal entry CSV format, with the addition of a status column. An **Active** status indicates that the journal entry is included in your Revenue Recognition reports. A **Processing** status indicates that our system has recorded the journal entry, but Revenue Recognition reports don’t yet include this data.

### Filtering

The journal entry list supports filtering on the ID of the journal entries on exactly matched values.

### Deletion

To reverse the journal entries, select the journal entry checkbox and click **Delete**. Note that only journal entries in open accounting periods can be deleted. To delete a journal entry in a closed accounting period, you will have to reopen the accounting period first. It can take up to 24 hours for Revenue Recognition reports to reflect deletions.
