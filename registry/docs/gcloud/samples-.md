-   [Home](https://docs.cloud.google.com/?hl=ko)
-   [Documentation](https://docs.cloud.google.com/docs?hl=ko)
-   [Databases](https://docs.cloud.google.com/docs/databases?hl=ko)
-   [Bigtable](https://docs.cloud.google.com/bigtable/docs?hl=ko)
-   [샘플](https://docs.cloud.google.com/bigtable/docs/samples?hl=ko)

# 변형을 사용해 행 삽입 컬렉션을 사용해 정리하기 내 환경설정을 기준으로 콘텐츠를 저장하고 분류하세요.

변형을 사용하여 행을 삽입합니다.

## 코드 샘플

### C++

Bigtable용 클라이언트 라이브러리를 설치하고 사용하는 방법은 [Bigtable 클라이언트 라이브러리](https://docs.cloud.google.com/bigtable/docs/reference/libraries?hl=ko)를 참조하세요.

Bigtable에 인증하려면 애플리케이션 기본 사용자 인증 정보를 설정합니다. 자세한 내용은 [로컬 개발 환경의 인증 설정](https://docs.cloud.google.com/docs/authentication/set-up-adc-local-dev-environment?hl=ko)을 참조하세요.

```
namespace cbt = ::google::cloud::bigtable;
[](cbt::Table table) {
  // Write several rows in a single operation, each row has some trivial data.
  cbt::BulkMutation bulk;
  for (int i = 0; i != 5000; ++i) {
    // Note: This example uses sequential numeric IDs for simplicity, but
    // this can result in poor performance in a production application.
    // Since rows are stored in sorted order by key, sequential keys can
    // result in poor distribution of operations across nodes.
    //
    // For more information about how to design a Bigtable schema for the
    // best performance, see the documentation:
    //
    //     https://cloud.google.com/bigtable/docs/schema-design
    char buf[32];
    snprintf(buf, sizeof(buf), "key-%06d", i);
    cbt::SingleRowMutation mutation(buf);
    mutation.emplace_back(
        cbt::SetCell("fam", "col0", "value0-" + std::to_string(i)));
    mutation.emplace_back(
        cbt::SetCell("fam", "col1", "value1-" + std::to_string(i)));
    bulk.emplace_back(std::move(mutation));
  }
  std::vector<cbt::FailedMutation> failures =
      table.BulkApply(std::move(bulk));
  if (failures.empty()) {
    std::cout << "All mutations applied successfully\n";
    return;
  }
  // By default, the `table` object uses the `SafeIdempotentMutationPolicy`
  // which does not retry if any of the mutations fails and are
  // not-idempotent. In this example we simply print such failures, if any,
  // and ignore them otherwise.
  std::cerr << "The following mutations failed and were not retried:\n";
  for (auto const& f : failures) {
    std::cerr << "index[" << f.original_index() << "]=" << f.status() << "\n";
  }
}
```

## 다음 단계

다른 Google Cloud 제품의 코드 샘플을 검색하고 필터링하려면 [Google Cloud 샘플 브라우저](https://docs.cloud.google.com/docs/samples?product=bigtable&hl=ko)를 참조하세요.

달리 명시되지 않는 한 이 페이지의 콘텐츠에는 [Creative Commons Attribution 4.0 라이선스](https://creativecommons.org/licenses/by/4.0/)에 따라 라이선스가 부여되며, 코드 샘플에는 [Apache 2.0 라이선스](https://www.apache.org/licenses/LICENSE-2.0)에 따라 라이선스가 부여됩니다. 자세한 내용은 [Google Developers 사이트 정책](https://developers.google.com/site-policies?hl=ko)을 참조하세요. 자바는 Oracle 및/또는 Oracle 계열사의 등록 상표입니다.
