Alibaba Cloud Linux is a Linux operating system distribution developed by Alibaba Cloud. The current releases include Alibaba Cloud Linux 3 and Alibaba Cloud Linux 2. This topic describes the main differences between Alibaba Cloud Linux 3 and Alibaba Cloud Linux 2.

## **Differences in modules, components, and kernel features**

-   Module differences
    
    **Module**
    
    **Alibaba Cloud Linux 3 release**
    
    **Alibaba Cloud Linux 2 release**
    
    Kernel
    
    5.10
    
    4.19
    
    gcc
    
    10.2
    
    4.8.5
    
    glibc
    
    2.32
    
    2.17
    
    systemd
    
    239
    
    219
    
    python
    
    3.6
    
    2.7
    
-   System component differences
    
    **Component**
    
    **Alibaba Cloud Linux 3**
    
    **Alibaba Cloud Linux 2**
    
    Package management
    
    dnf
    
    yum
    
    Network configuration
    
    NetworkManager
    
    network-scripts
    
    Network packet filtering framework
    
    nftables
    
    iptables
    
    Container component
    
    podman
    
    **Note**
    
    You can also introduce Docker-CE for self-deployment.
    
    docker
    
-   Kernel feature differences
    
    -   Alibaba Cloud Linux 3 supports all eighth-generation instances, including Intel, AMD, and Yitian instances.
        
    -   Alibaba Cloud Linux 3 supports Shared Memory Communications over RDMA (SMC-R).
        
    -   Alibaba Cloud Linux 3 provides various accelerator-enabled solutions for eighth-generation Intel instances to improve performance in AI and web server scenarios.
        
    -   Alibaba Cloud Linux 3 provides multiple optimization methods for eighth-generation Yitian instances, including the hugetext feature, code multi-duplication, 16k atomic write, and optimized Multi-Generational Least Recently Used (MGLRU) page lock, to improve performance in multiple scenarios.
        
    -   For more information about other new features in Alibaba Cloud Linux 3, see [Release notes](/help/en/alinux/product-overview/updates-and-announcements/).
        

## **Software package differences**

The following table describes the differences between Alibaba Cloud Linux 3 and Alibaba Cloud Linux 2 in terms of software packages.

-   New software packages
    
    A new software package is a software package that is added to the Alibaba Cloud Linux 3 release, but does not exist in the Alibaba Cloud Linux 2 release.
    
    **Software package name**
    
    **Software package version**
    
    a52dec
    
    0.7.4-42.al8
    
    aajohan-comfortaa-fonts
    
    3.001-10.al8
    
    accel-config
    
    3.5.0-1.al8
    
    adobe-source-code-pro-fonts
    
    2.030.1.050-12.al8.1
    
    alsa-sof-firmware
    
    2.2.4-2.0.1.al8
    
    annobin
    
    10.94-1.1.al8
    
    ansible-collection-microsoft-sql
    
    1.3.0-3.0.1.al8
    
    ansible-collection-redhat-rhel\_mgmt
    
    1.0.0-2.al8
    
    ansible-core
    
    2.12.2-4.al8
    
    ansible-freeipa
    
    1.9.2-3.0.1.al8
    
    ansible-pcp
    
    2.2.5-1.0.1.al8
    
    apiguardian
    
    1.1.0-4.2.al8
    
    asio
    
    1.10.8-7.1.al8
    
    aspell-en
    
    2017.08.24-2.2.al8
    
    assertj-core
    
    3.8.0-2.1.al8
    
    authselect
    
    1.2.6-1.al8
    
    babeltrace
    
    1.5.8-10.0.1.al8
    
    boom-boot
    
    1.3-2.0.2.al8
    
    Box2D
    
    2.4.1-7.al8
    
    bpftrace
    
    0.16.0-1.0.1.al8
    
    brotli
    
    1.0.6-3.1.al8
    
    bubblewrap
    
    0.4.0-1.1.al8
    
    buildah
    
    1.29.1-2.0.1.al8
    
    byte-buddy
    
    1.10.1-2.1.al8
    
    c2esp
    
    2.7-14.2.al8
    
    centos-indexhtml
    
    8.0-0.1.al8
    
    centos-logos
    
    80.5-2.1.al8
    
    ceph
    
    12.2.7-9.2.al8
    
    chan
    
    0.0.4-3.1.al8
    
    cjose
    
    0.6.1-3.al8
    
    clang
    
    15.0.7-1.0.2.al8
    
    cldr-emoji-annotation
    
    39-2.0.1.al8
    
    cmocka
    
    1.1.5-1.1.al8
    
    cobbler
    
    2.0.7.1-6.1.al8
    
    cockpit-appstream
    
    286.2-1.0.1.al8
    
    cockpit-composer
    
    45-1.al8
    
    cockpit-podman
    
    63.1-1.al8
    
    cockpit-session-recording
    
    12-3.al8
    
    compat-libgfortran-48
    
    4.8.5-36.1.3.al8
    
    compat-openssl10
    
    1.0.2o-4.0.1.al8
    
    compiler-rt
    
    15.0.7-1.0.2.al8
    
    conmon
    
    2.1.6-1.al8
    
    container-exception-logger
    
    1.0.2-3.2.al8
    
    container-selinux
    
    2.205.0-2.al8
    
    containernetworking-plugins
    
    1.2.0-1.0.1.al8
    
    containers-common
    
    1-64.0.1.al8
    
    coreos-installer
    
    0.15.0-2.al8
    
    cppcheck
    
    2.4-1.al8
    
    createrepo\_c
    
    0.20.1-1.al8
    
    crun
    
    1.8.4-2.al8
    
    crypto-policies
    
    20221215-1.gitece0092.al8
    
    CUnit
    
    2.1.3-17.2.al8
    
    dbus-c++
    
    0.9.0-17.1.al8
    
    delve
    
    1.9.1-1.0.1.al8
    
    directory-maven-plugin
    
    0.3.1-2.1.al8
    
    dleyna-renderer
    
    0.6.0-3.1.al8
    
    dml
    
    0.1.9~beta-1.al8
    
    dnf
    
    4.7.0-16.0.1.al8
    
    dnf-plugin-spacewalk
    
    2.8.5-11.1.al8
    
    dnf-plugins-core
    
    4.0.21-19.al8
    
    docbook2X
    
    0.8.8-29.1.al8
    
    dotnet
    
    2.1.526-1.al8
    
    dotnet3.0
    
    3.0.102-2.2.al8
    
    dotnet3.1
    
    3.1.118-1.1.al8
    
    driverctl
    
    0.111-1.1.al8
    
    drpm
    
    0.4.1-3.1.al8
    
    dtc
    
    1.6.0-7.al8
    
    dwarves
    
    1.24-2.0.1.al8
    
    edk2
    
    20220126gitbb1bba3d77-4.al8
    
    ee4j-parent
    
    1.0.1-2.1.al8
    
    efi-rpm-macros
    
    3-3.1.al8
    
    egl-wayland
    
    1.1.9-3.0.1.al8
    
    eglexternalplatform
    
    1.1-0.1.20180916git7c8f8e2.1.al8
    
    eigen3
    
    3.3.4-6.1.al8
    
    enca
    
    1.19-1.1.al8
    
    enchant2
    
    2.2.15-6.0.1.al8
    
    espeak-ng
    
    1.49.2-4.2.al8
    
    evemu
    
    2.7.0-8.2.al8
    
    execstack
    
    0.5.0-15.1.al8
    
    fapolicyd
    
    1.1.3-12.0.1.al8
    
    fdk-aac-free
    
    2.0.0-8.al8
    
    felix-gogo-command
    
    1.0.2-11.1.al8
    
    felix-gogo-parent
    
    4-2.al8
    
    felix-gogo-runtime
    
    1.1.0-7.1.al8
    
    felix-gogo-shell
    
    1.1.0-5.1.al8
    
    felix-scr
    
    2.1.16-6.1.al8
    
    flatpak-builder
    
    1.0.14-2.al8
    
    flatpak-xdg-utils
    
    1.0.5-1.al8
    
    frr
    
    7.5.1-8.0.1.al8
    
    fstrm
    
    0.6.1-3.al8
    
    fuse-overlayfs
    
    1.11-1.0.1.al8
    
    fuse-sshfs
    
    2.8-7.al8
    
    galera
    
    26.4.11-1.al8
    
    gcc-toolset-12
    
    12.0-6.al8
    
    gcc-toolset-12-annobin
    
    11.08-1.al8
    
    gcc-toolset-12-binutils
    
    2.38-17.al8
    
    gcc-toolset-12-dwz
    
    0.14-2.al8
    
    gcc-toolset-12-gcc
    
    12.2.1-7.4.0.1.al8
    
    gcc-toolset-12-gdb
    
    11.2-3.al8
    
    gdk-pixbuf2-xlib
    
    2.40.2-5.al8
    
    gegl04
    
    0.4.4-7.0.1.al8
    
    genwqe-tools
    
    4.0.20-5.3.al8
    
    geronimo-jpa
    
    1.1.1-21.1.al8
    
    gfbgraph
    
    0.2.4-1.0.1.al8
    
    gflags
    
    2.2.2-1.al8
    
    ghc-srpm-macros
    
    1.4.2-7.1.al8
    
    git-lfs
    
    3.2.0-2.0.1.al8
    
    glassfish-annotation-api
    
    1.3.2-3.1.al8
    
    glassfish-legal
    
    1.1-11.1.al8
    
    glassfish-master-pom
    
    8-11.1.al8
    
    glassfish-servlet-api
    
    3.1.0-19.1.al8
    
    glog
    
    0.3.5-5.0.2.al8
    
    gnome-autoar
    
    0.4.1-2.al8
    
    gnome-characters
    
    40.0-3.al8
    
    gnome-control-center
    
    40.0-29.al8
    
    gnome-logs
    
    3.36.0-8.0.1.al8
    
    gnome-photos
    
    40.0-4.al8
    
    gnome-remote-desktop
    
    0.1.8-3.1.al8
    
    gnome-themes-extra
    
    3.28-14.al8
    
    gnome-tweaks
    
    3.28.1-7.1.al8
    
    go-compilers
    
    1-20.1.al8
    
    go-srpm-macros
    
    2-17.1.al8
    
    go-toolset
    
    1.19.10-1.al8
    
    golang
    
    1.19.10-1.0.2.al8
    
    google-droid-fonts
    
    20120715-13.1.al8
    
    google-gson
    
    2.8.6-5.1.al8
    
    google-noto-cjk-fonts
    
    20201206-4.al8
    
    google-roboto-slab-fonts
    
    1.100263-0.7.20150923git.1.al8
    
    grafana
    
    7.5.15-4.0.2.al8
    
    grafana-pcp
    
    3.2.0-3.0.1.al8
    
    graphene
    
    1.10.6-4.al8
    
    greenboot
    
    0.15.4-1.0.1.al8
    
    gssntlmssp
    
    1.2.0-1.0.1.al8
    
    gtest
    
    1.12.1-1.al8
    
    gtk4
    
    4.4.1-2.al8
    
    gtksourceview4
    
    4.8.1-3.al8
    
    guava20
    
    20.0-8.1.al8
    
    HdrHistogram
    
    2.1.11-3.1.al8
    
    HdrHistogram\_c
    
    0.9.13-2.1.al8
    
    hexchat
    
    2.16.0-1.al8
    
    ibus-libzhuyin
    
    1.8.93-1.2.al8
    
    icu4j
    
    65.1-3.1.al8
    
    iio-sensor-proxy
    
    3.3-1.al8
    
    ipa-healthcheck
    
    0.12-1.al8
    
    ipcalc
    
    0.2.4-4.1.al8
    
    ipmctl
    
    02.00.00.3830-2.1.al8
    
    isl
    
    0.16.1-6.2.al8
    
    jabberpy
    
    0.5-0.38.1.al8
    
    jackson-annotations
    
    2.10.0-1.1.al8
    
    jackson-core
    
    2.10.0-1.1.al8
    
    jackson-databind
    
    2.10.0-1.1.al8
    
    jackson-jaxrs-providers
    
    2.9.9-1.1.al8
    
    jackson-module-jaxb-annotations
    
    2.7.6-4.1.al8
    
    jaf
    
    1.2.1-5.1.al8
    
    java-1.8.0-openjdk-portable
    
    1.8.0.382.b05-2.0.3.al8
    
    java-11-alibaba-dragonwell
    
    11.0.17.13.8-3.al8
    
    java-11-openjdk-portable
    
    11.0.20.0.8-1.0.2.al8
    
    java-17-openjdk
    
    17.0.8.0.7-2.0.2.al8
    
    java-17-openjdk-portable
    
    17.0.8.0.7-1.0.2.al8
    
    jbig2dec
    
    0.19-7.0.1.al8
    
    jboss-annotations-1.2-api
    
    1.0.0-4.1.al8
    
    jboss-interceptors-1.2-api
    
    1.0.0-8.1.al8
    
    jboss-jaxrs-2.0-api
    
    1.0.0-6.1.al8
    
    jboss-logging
    
    3.4.1-9.al8
    
    jboss-logging-tools
    
    2.2.1-7.al8
    
    jdeparser
    
    2.0.0-5.1.al8
    
    jdom2
    
    2.0.6-12.1.al8
    
    jigawatts
    
    1.21.0.0.0-3.0.2.al8
    
    jimtcl
    
    0.77-6.1.al8
    
    jmc-core
    
    8.0.1-2.al8
    
    jq
    
    1.6-14.al8
    
    js-d3-flame-graph
    
    4.0.7-1.0.1.al8
    
    Judy
    
    1.0.5-18.3.al8
    
    julietaula-montserrat-fonts
    
    7.210-6.al8
    
    junit5
    
    5.6.2-2.al8
    
    kabi-dw
    
    0-0.10.20200515gitb52ac13.1.al8
    
    kdump-anaconda-addon
    
    003-8.20220519gitffd365e.0.1.al8
    
    kronosnet
    
    1.25-1.al8
    
    kyotocabinet
    
    1.2.76-17.2.al8
    
    lame
    
    3.100-6.2.al8
    
    langpacks
    
    3.0-16.al8
    
    lato-fonts
    
    2.015-5.1.al8
    
    lensfun
    
    0.3.2-15.1.al8
    
    leptonica
    
    1.76.0-2.1.al8
    
    libaec
    
    1.0.2-3.1.al8
    
    libatomic\_ops
    
    7.6.2-3.2.al8
    
    libbpf
    
    0.5.0-1.0.2.al8
    
    libcomps
    
    0.1.18-1.al8
    
    libdap
    
    3.19.1-2.1.al8
    
    libdatrie
    
    0.2.13-4.0.1.al8
    
    libdazzle
    
    3.40.0-3.0.1.al8
    
    libdc1394
    
    2.2.2-10.2.al8
    
    libdnf
    
    0.63.0-14.1.al8
    
    libecpg
    
    13.5-3.0.1.al8
    
    libEMF
    
    1.0.9-5.1.al8
    
    libeot
    
    0.01-9.1.al8
    
    libepubgen
    
    0.1.1-9.0.1.al8
    
    liberation-narrow-fonts
    
    1.07.6-9.al8
    
    libev
    
    4.33-5.0.1.al8
    
    libgit2
    
    0.26.8-2.1.al8
    
    libgit2-glib
    
    0.26.4-3.0.1.al8
    
    libgudev
    
    237-1.0.1.al8
    
    libhandy
    
    1.2.3-1.0.1.al8
    
    libidn2
    
    2.2.0-1.2.al8
    
    libijs
    
    0.35-5.2.al8
    
    libipt
    
    1.6.1-8.2.al8
    
    libisoburn
    
    1.5.4-4.al8
    
    libkcapi
    
    1.2.0-2.1.al8
    
    libkeepalive
    
    0.3-8.2.al8
    
    libkkc-data
    
    0.2.7-12.2.al8
    
    libldac
    
    2.0.2.3-10.al8
    
    libmad
    
    0.15.1b-25.1.al8
    
    libmetalink
    
    0.1.3-7.2.al8
    
    libmodulemd
    
    2.13.0-1.0.1.al8
    
    libnbd
    
    1.6.0-5.0.1.al8
    
    libnma
    
    1.8.38-1.0.1.al8
    
    libnsl2
    
    1.2.0-2.20180605git4a062cf.2.al8
    
    libnumbertext
    
    1.0.6-2.1.al8
    
    liboggz
    
    1.1.1-14.1.al8
    
    libomp
    
    15.0.7-1.0.2.al8
    
    libpng15
    
    1.5.30-7.2.al8
    
    libpq
    
    13.5-1.0.1.al8
    
    libpsl
    
    0.20.2-6.1.al8
    
    libqxp
    
    0.0.2-11.al8
    
    librhsm
    
    0.0.3-5.0.1.al8
    
    librx
    
    1.5-31.1.al8
    
    libsass
    
    3.4.5-6.1.al8
    
    libserf
    
    1.3.9-9.1.al8
    
    libsigsegv
    
    2.11-5.2.al8
    
    libslirp
    
    4.4.0-1.al8
    
    libssh
    
    0.9.6-10.al8
    
    libstemmer
    
    0-10.585svn.2.al8
    
    libtpms
    
    0.9.1-2.20211126git1ff6fe1f43.al8
    
    libtraceevent
    
    1.5.3-1.al8
    
    libucil
    
    0.9.10-16.3.al8
    
    libunicap
    
    0.9.12-21.2.al8
    
    liburing
    
    1.0.7-3.0.1.al8
    
    libuv
    
    1.42.0-1.al8
    
    libvarlink
    
    18-3.2.al8
    
    libvirt-dbus
    
    1.3.0-2.1.al8
    
    libwpe
    
    1.10.0-4.al8
    
    libxcrypt
    
    4.1.1-6.1.al8
    
    libxmlb
    
    0.1.15-1.2.al8
    
    libXNVCtrl
    
    352.21-9.2.al8
    
    libyang
    
    1.0.184-1.1.al8
    
    lld
    
    15.0.7-1.0.2.al8
    
    lldb
    
    15.0.7-1.0.1.al8
    
    lldpd
    
    1.0.4-10.al8
    
    llvm
    
    15.0.7-1.0.2.al8
    
    llvm-toolset
    
    15.0.7-1.0.3.al8
    
    lmdb
    
    0.9.24-2.al8
    
    log4j12
    
    1.2.17-24.al8
    
    lohit-gurmukhi-fonts
    
    2.91.2-3.1.al8
    
    lohit-odia-fonts
    
    2.91.2-3.1.al8
    
    lorax-templates-alinux
    
    8.3-4.15.2.al8
    
    lorax-templates-rhel
    
    8.6-3.al8
    
    lttng-ust
    
    2.8.1-11.3.al8
    
    lua-expat
    
    1.3.0-12.2.al8.1
    
    lua-filesystem
    
    1.6.3-7.1.al8
    
    lua-json
    
    1.3.2-9.1.al8
    
    lua-lpeg
    
    1.0.1-6.2.al8
    
    lua-lunit
    
    0.5-13.1.al8
    
    lua-posix
    
    35.0-8.al8
    
    lua-socket
    
    3.0-0.17.rc1.2.al8
    
    lucene
    
    8.4.1-5.1.al8
    
    lz4-java
    
    1.7.1-14.1.al8
    
    mariadb-connector-c
    
    3.2.6-1.al8
    
    mariadb-connector-odbc
    
    3.1.12-3.al8
    
    mariadb-java-client
    
    2.7.1-2.al8
    
    maven-artifact-transfer
    
    0.11.0-1.al8
    
    maven-resolver
    
    1.4.1-3.1.al8
    
    mcpp
    
    2.7.2-20.2.al8
    
    mdevctl
    
    1.1.0-2.0.2.al8
    
    mecab
    
    0.996-2.al8
    
    mecab-ipadic
    
    2.7.0.20070801-16.2.al8
    
    memstrack
    
    0.2.4-2.0.1.al8
    
    meson
    
    0.58.2-2.al8
    
    metis
    
    5.1.0-17.1.al8
    
    microdnf
    
    3.8.0-2.0.1.al8
    
    micropipenv
    
    1.0.2-1.1.al8
    
    mingw-binutils
    
    2.30-3.1.al8
    
    mingw-bzip2
    
    1.0.6-14.1.al8
    
    mingw-cairo
    
    1.14.10-4.1.al8
    
    mingw-crt
    
    5.0.2-2.1.al8
    
    mingw-expat
    
    2.4.8-2.al8
    
    mingw-filesystem
    
    104-3.al8
    
    mingw-fontconfig
    
    2.12.6-3.1.al8
    
    mingw-freetype
    
    2.8-3.1.al8
    
    mingw-gcc
    
    7.2.0-2.1.al8
    
    mingw-gettext
    
    0.19.7-5.1.al8
    
    mingw-glib2
    
    2.70.1-1.al8
    
    mingw-gstreamer1
    
    1.14.1-2.1.al8
    
    mingw-harfbuzz
    
    1.4.8-3.1.al8
    
    mingw-headers
    
    5.0.2-2.1.al8
    
    mingw-icu
    
    57.1-5.1.al8
    
    mingw-libffi
    
    3.1-4.1.al8
    
    mingw-libjpeg-turbo
    
    1.5.1-5.1.al8
    
    mingw-libpng
    
    1.6.29-4.1.al8
    
    mingw-libtiff
    
    4.0.9-2.1.al8
    
    mingw-openssl
    
    1.0.2k-2.1.al8
    
    mingw-pcre
    
    8.38-4.1.al8
    
    mingw-pixman
    
    0.34.0-5.1.al8
    
    mingw-pkg-config
    
    0.28-11.1.al8
    
    mingw-readline
    
    6.2-11.1.al8
    
    mingw-sqlite
    
    3.26.0.0-1.1.al8
    
    mingw-termcap
    
    1.3.1-23.1.al8
    
    mingw-win-iconv
    
    0.0.6-9.1.al8
    
    mingw-winpthreads
    
    5.0.2-2.1.al8
    
    mingw-zlib
    
    1.2.8-10.al8
    
    mockito
    
    3.1.2-2.1.al8
    
    mod\_http2
    
    1.15.7-8.al8.3
    
    mod\_md
    
    2.0.8-8.1.al8
    
    modulemd-tools
    
    0.7-6.0.1.al8
    
    mokutil
    
    0.3.0-12.0.1.al8
    
    mozjs60
    
    60.9.0-4.1.al8
    
    mozvoikko
    
    2.1-5.1.al8
    
    multilib-rpm-config
    
    1-10.1.al8
    
    munge
    
    0.5.13-2.1.al8
    
    mvel
    
    2.4.10-3.1.al8
    
    mysql
    
    8.0.32-1.0.2.al8
    
    mysql-selinux
    
    1.0.5-1.al8
    
    nghttp2
    
    1.33.0-3.1.0.1.al8.1
    
    nginx
    
    1.20.1-1.0.2.al8
    
    ninja-build
    
    1.8.2-1.1.al8
    
    nispor
    
    1.2.10-1.0.2.al8
    
    nkf
    
    2.1.4-8.1.al8
    
    nmstate
    
    2.2.15-2.0.1.al8
    
    nodejs
    
    14.21.3-1.0.1.al8
    
    nodejs-nodemon
    
    2.0.20-3.al8
    
    nodejs-packaging
    
    23-3.1.al8
    
    npth
    
    1.5-4.2.al8
    
    nss-altfiles
    
    2.18.1-12.2.al8
    
    nss\_nis
    
    3.1-11.al8
    
    nss\_wrapper
    
    1.1.13-1.al8
    
    ntpstat
    
    0.5-2.1.al8
    
    numatop
    
    2.3-1.al8
    
    objectweb-pom
    
    1.5-7.1.al8
    
    objenesis
    
    2.6-2.1.al8
    
    ocaml-cppo
    
    1.6.4-4.1.al8
    
    ocaml-labltk
    
    8.06.4-7.1.al8
    
    oci-seccomp-bpf-hook
    
    1.2.8-1.0.1.al8
    
    oci-systemd-hook
    
    0.1.15-2.git2d0b8a3.2.al8
    
    oci-umount
    
    2.3.4-2.git87f9237.2.al8
    
    ocl-icd
    
    2.2.13-4.0.1.al8
    
    ongres-scram
    
    1.0.0~beta.2-5.1.al8
    
    oniguruma
    
    6.8.2-2.1.al8
    
    openal-soft
    
    1.18.2-7.2.al8
    
    openblas
    
    0.3.15-6.al8
    
    openblas-srpm-macros
    
    2-2.1.al8
    
    opencl-filesystem
    
    1.0-6.1.al8
    
    opencl-headers
    
    2.2-1.20180306gite986688.1.al8
    
    opencsd
    
    1.2.0-2.al8
    
    openssl-ibmpkcs11
    
    1.0.2-1.2.al8
    
    openssl-pkcs11
    
    0.4.10-3.0.1.al8
    
    opentest4j
    
    1.2.0-2.2.al8
    
    os-maven-plugin
    
    1.2.3-9.1.al8
    
    osbuild
    
    81-1.0.1.al8
    
    osbuild-composer
    
    76-2.0.1.al8
    
    oscap-anaconda-addon
    
    1.2.1-12.0.1.al8
    
    osgi-annotation
    
    6.0.0-7.1.al8
    
    osgi-compendium
    
    6.0.0-5.1.al8
    
    osgi-core
    
    6.0.0-6.1.al8
    
    ostree
    
    2022.2-7.0.1.al8
    
    owasp-java-encoder
    
    1.2.2-3.1.al8
    
    pandoc
    
    2.0.6-6.al8
    
    pcaudiolib
    
    1.1-2.2.al8
    
    pcm
    
    202211-0.al8
    
    peripety
    
    0.1.2-3.2.al8
    
    perl-AnyEvent
    
    7.14-6.1.al8
    
    perl-B-Debug
    
    1.26-2.1.al8
    
    perl-B-Hooks-EndOfScope
    
    0.21-6.1.al8
    
    perl-bignum
    
    0.49-2.1.al8
    
    perl-Canary-Stability
    
    2012-5.1.al8
    
    perl-Class-Accessor
    
    0.51-2.1.al8
    
    perl-Class-Factory-Util
    
    1.7-27.1.al8
    
    perl-Class-Method-Modifiers
    
    2.12-8.1.al8
    
    perl-Class-Tiny
    
    1.006-6.1.al8
    
    perl-Class-XSAccessor
    
    1.19-14.1.al8
    
    perl-common-sense
    
    3.7.4-8.2.al8
    
    perl-Compress-Bzip2
    
    2.26-6.2.al8
    
    perl-Config-AutoConf
    
    0.315-2.1.al8
    
    perl-Config-Perl-V
    
    0.30-1.1.al8
    
    perl-CPAN
    
    2.18-397.1.al8
    
    perl-CPAN-DistnameInfo
    
    0.12-13.1.al8
    
    perl-CPAN-Meta-Check
    
    0.014-6.1.al8
    
    perl-Data-Dump
    
    1.23-7.1.al8
    
    perl-Data-Section
    
    0.200007-3.1.al8
    
    perl-Data-UUID
    
    1.221-10.2.al8
    
    perl-Date-ISO8601
    
    0.005-2.1.al8
    
    perl-DateTime-Format-Builder
    
    0.8100-15.1.al8
    
    perl-DateTime-Format-HTTP
    
    0.42-9.1.al8
    
    perl-DateTime-Format-ISO8601
    
    0.08-17.1.al8
    
    perl-DateTime-Format-Mail
    
    0.403-6.1.al8
    
    perl-DateTime-Format-Strptime
    
    1.75-2.1.al8
    
    perl-DateTime-TimeZone-SystemV
    
    0.010-3.1.al8
    
    perl-DateTime-TimeZone-Tzfile
    
    0.011-3.1.al8
    
    perl-Devel-CallChecker
    
    0.008-3.1.al8
    
    perl-Devel-Caller
    
    2.06-15.1.al8
    
    perl-Devel-GlobalDestruction
    
    0.14-5.1.al8
    
    perl-Devel-LexAlias
    
    0.05-16.2.al8
    
    perl-Devel-PPPort
    
    3.36-5.2.al8
    
    perl-Devel-Size
    
    0.81-2.2.al8
    
    perl-Digest-CRC
    
    0.22.2-5.1.al8
    
    perl-DynaLoader-Functions
    
    0.003-2.1.al8
    
    perl-Eval-Closure
    
    0.14-5.1.al8
    
    perl-experimental
    
    0.019-2.1.al8
    
    perl-Exporter-Tiny
    
    1.000000-4.1.al8
    
    perl-ExtUtils-CBuilder
    
    0.280230-2.1.al8
    
    perl-ExtUtils-Install
    
    2.14-4.1.al8
    
    perl-Fedora-VSP
    
    0.001-9.1.al8
    
    perl-File-BaseDir
    
    0.08-1.1.al8
    
    perl-File-chdir
    
    0.1011-5.1.al8
    
    perl-File-DesktopEntry
    
    0.22-7.1.al8
    
    perl-File-Find-Object
    
    0.3.2-5.1.al8
    
    perl-File-MimeInfo
    
    0.28-7.1.al8
    
    perl-File-ReadBackwards
    
    1.05-11.1.al8
    
    perl-Filter-Simple
    
    0.94-2.1.al8
    
    perl-generators
    
    1.10-9.1.al8
    
    perl-Import-Into
    
    1.002005-7.1.al8
    
    perl-Importer
    
    0.025-6.1.al8
    
    perl-inc-latest
    
    0.500-9.1.al8
    
    perl-IO-All
    
    0.87-6.1.al8
    
    perl-IO-Multiplex
    
    1.16-9.1.al8
    
    perl-IPC-System-Simple
    
    1.25-17.1.al8
    
    perl-IPC-SysV
    
    2.07-397.2.al8
    
    perl-JSON-XS
    
    3.04-3.2.al8
    
    perl-libintl-perl
    
    1.29-2.2.al8
    
    perl-libnet
    
    3.11-3.1.al8
    
    perl-List-MoreUtils-XS
    
    0.428-3.2.al8
    
    perl-Mail-AuthenticationResults
    
    2.20210112-1.al8
    
    perl-Mail-Sender
    
    0.903-7.1.al8
    
    perl-Math-BigInt
    
    1.9998.11-7.1.al8
    
    perl-Math-BigInt-FastCalc
    
    0.500.600-6.2.al8
    
    perl-Math-BigRat
    
    0.2614-1.1.al8
    
    perl-MIME-Base64
    
    3.15-396.2.al8
    
    perl-MIME-Charset
    
    1.012.2-4.1.al8
    
    perl-MIME-Types
    
    2.17-3.1.al8
    
    perl-Module-CoreList
    
    5.20181130-1.1.al8
    
    perl-Module-CPANfile
    
    1.1002-7.1.al8
    
    perl-Module-Install-AuthorTests
    
    0.002-16.1.al8
    
    perl-Module-Install-ReadmeFromPod
    
    0.30-4.1.al8
    
    perl-MRO-Compat
    
    0.13-4.1.al8
    
    perl-namespace-autoclean
    
    0.28-10.1.al8
    
    perl-namespace-clean
    
    0.27-7.1.al8
    
    perl-Net-Server
    
    2.009-3.1.al8
    
    perl-NTLM
    
    1.09-17.1.al8
    
    perl-Object-HashBase
    
    0.008-1.1.al8
    
    perl-Params-Classify
    
    0.015-2.2.al8
    
    perl-Params-ValidationCompiler
    
    0.27-1.1.al8
    
    perl-Parse-PMFile
    
    0.41-7.1.al8
    
    perl-Path-Tiny
    
    0.104-5.1.al8
    
    perl-Perl-Destruct-Level
    
    0.02-20.1.al8
    
    perl-perlfaq
    
    5.20180605-1.1.al8
    
    perl-PerlIO-utf8\_strict
    
    0.007-5.1.al8
    
    perl-PerlIO-via-QuotedPrint
    
    0.08-395.1.al8
    
    perl-Pod-Escapes
    
    1.07-395.1.al8
    
    perl-Pod-Markdown
    
    3.005-6.1.al8
    
    perl-Ref-Util
    
    0.203-4.1.al8
    
    perl-Ref-Util-XS
    
    0.117-2.1.al8
    
    perl-Role-Tiny
    
    2.000006-2.1.al8
    
    perl-Scope-Guard
    
    0.21-7.1.al8
    
    perl-Software-License
    
    0.103013-2.1.al8
    
    perl-Specio
    
    0.42-2.1.al8
    
    perl-Sub-Exporter-Progressive
    
    0.001013-5.1.al8
    
    perl-Sub-Identify
    
    0.14-6.1.al8
    
    perl-Sub-Info
    
    0.002-5.1.al8
    
    perl-Sub-Name
    
    0.21-7.1.al8
    
    perl-SUPER
    
    1.20141117-10.1.al8
    
    perl-Term-ANSIColor
    
    4.06-396.1.al8
    
    perl-Term-Cap
    
    1.17-395.1.al8
    
    perl-Term-Size-Any
    
    0.002-23.1.al8
    
    perl-Term-Size-Perl
    
    0.031-1.1.al8
    
    perl-Term-Table
    
    0.015-2.1.al8
    
    perl-Test-LongString
    
    0.17-10.1.al8
    
    perl-Test-Warnings
    
    0.026-7.1.al8
    
    perl-Test2-Suite
    
    0.000111-1.1.al8
    
    perl-Text-Balanced
    
    2.03-395.1.al8
    
    perl-Text-Tabs+Wrap
    
    2013.0523-395.1.al8
    
    perl-Text-Template
    
    1.51-1.1.al8
    
    perl-Types-Serialiser
    
    1.0-12.1.al8
    
    perl-Unicode-Collate
    
    1.25-2.2.al8
    
    perl-Unicode-EastAsianWidth
    
    1.33-13.1.al8
    
    perl-Unicode-LineBreak
    
    2017.004-6.1.al8
    
    perl-Unicode-Normalize
    
    1.25-396.2.al8
    
    perl-Unicode-UTF8
    
    0.62-5.1.al8
    
    perl-Unix-Syslog
    
    1.1-29.2.al8
    
    perl-Variable-Magic
    
    0.62-3.2.al8
    
    perl-YAML-LibYAML
    
    0.70-1.1.al8
    
    pgaudit
    
    1.5.0-1.1.al8
    
    php-pecl-apcu
    
    5.1.18-1.2.al8
    
    php-pecl-rrd
    
    2.0.1-1.1.al8
    
    php-pecl-xdebug
    
    2.9.5-1.1.al8
    
    php-pecl-zip
    
    1.18.2-1.2.al8
    
    pigz
    
    2.4-4.1.al8
    
    pipewire
    
    0.3.47-4.0.1.al8
    
    pipewire0.2
    
    0.2.7-6.1.al8
    
    pkgconf
    
    1.4.2-1.2.al8
    
    pki-servlet-engine
    
    9.0.50-1.al8
    
    plexus-languages
    
    0.9.10-3.1.al8
    
    plotutils
    
    2.6-20.1.al8
    
    pmdk
    
    1.12.1-1.0.1.al8
    
    pmix
    
    3.2.3-3.al8
    
    podman
    
    4.4.1-16.0.1.al8
    
    postgres-decoderbufs
    
    0.10.0-2.1.al8
    
    potrace
    
    1.15-3.1.al8
    
    power-profiles-daemon
    
    0.11.1-1.al8
    
    powermock
    
    1.6.5-9.1.al8
    
    prefixdevname
    
    0.1.0-6.2.al8
    
    pstoedit
    
    3.70-9.1.al8
    
    publicsuffix-list
    
    20180723-1.1.al8
    
    py3c
    
    1.2-4.1.al8
    
    pyodbc
    
    4.0.30-2.1.al8
    
    python-argcomplete
    
    1.9.3-6.1.al8
    
    python-argh
    
    0.26.1-8.1.al8
    
    python-asn1crypto
    
    0.24.0-3.1.al8
    
    python-attrs
    
    17.4.0-6.1.al8
    
    python-click
    
    6.7-8.1.al8
    
    python-dasbus
    
    1.2-2.1.al8
    
    python-dbus-client-gen
    
    0.4-1.1.al8
    
    python-dbus-python-client-gen
    
    0.7-3.1.al8
    
    python-dbus-signature-pyparsing
    
    0.03-2.1.al8
    
    python-dbusmock
    
    0.17-4.al8
    
    python-enchant
    
    2.0.0-3.1.al8
    
    python-evdev
    
    1.1.2-3.2.al8
    
    python-gevent
    
    1.2.2-4.2.al8
    
    python-greenlet
    
    0.4.13-4.1.al8
    
    python-html5lib
    
    0.999999999-6.1.al8
    
    python-httplib2
    
    0.10.3-4.1.al8
    
    python-humanize
    
    0.5.1-13.1.al8
    
    python-hypothesis
    
    3.44.24-6.1.al8
    
    python-imagesize
    
    1.0.0-2.1.al8
    
    python-into-dbus-python
    
    0.06-2.1.al8
    
    python-iso8601
    
    0.1.11-12.al8
    
    python-itsdangerous
    
    0.24-14.1.al8
    
    python-jmespath
    
    0.9.0-11.1.al8
    
    python-justbases
    
    0.14-4.1.al8
    
    python-justbytes
    
    0.14-2.1.al8
    
    python-lesscpy
    
    0.13.0-4.1.al8
    
    python-lit
    
    15.0.7-1.al8
    
    python-markdown
    
    2.6.11-2.1.al8
    
    python-mock
    
    2.0.0-11.1.al8
    
    python-networkx
    
    1.11-16.1.1.al8
    
    python-ordered-set
    
    2.0.2-4.1.al8
    
    python-packaging
    
    19.2-3.1.al8
    
    python-pexpect
    
    4.3.1-3.1.al8
    
    python-pid
    
    2.1.1-7.1.al8
    
    python-pluggy
    
    0.6.0-3.1.al8
    
    python-podman
    
    4.4.1-1.al8
    
    python-podman-api
    
    1.2.0-0.2.gitd0a45fe.1.al8
    
    python-productmd
    
    1.11-3.1.al8
    
    python-psutil
    
    5.4.3-11.al8
    
    python-ptyprocess
    
    0.5.2-4.1.al8
    
    python-pydbus
    
    0.6.0-5.1.al8
    
    python-pysocks
    
    1.6.8-3.1.al8
    
    python-pytoml
    
    0.1.14-5.git7dea353.1.al8
    
    python-qt5
    
    5.15.0-3.0.1.al8
    
    python-requests-file
    
    1.4.3-5.1.al8
    
    python-requests-ftp
    
    0.3.1-11.1.al8
    
    python-resolvelib
    
    0.5.4-5.al8
    
    python-rpmfluff
    
    0.5.7.1-2.1.al8
    
    python-semantic\_version
    
    2.6.0-5.1.al8
    
    python-simpleline
    
    1.1.3-1.0.1.al8
    
    python-snowballstemmer
    
    1.2.1-6.1.al8
    
    python-sphinx-theme-alabaster
    
    0.7.9-7.1.al8
    
    python-sphinx\_rtd\_theme
    
    0.3.1-3.1.al8
    
    python-sphinxcontrib-websupport
    
    1.0.1-10.20180316git.1.al8
    
    python-sure
    
    1.4.0-6.1.al8
    
    python-sushy
    
    1.3.1-3.1.al8
    
    python-systemd
    
    234-8.2.al8
    
    python-unittest2
    
    1.1.0-16.1.al8
    
    python-varlink
    
    29.0.0-1.1.al8
    
    python-webencodings
    
    0.5.1-6.1.al8
    
    python-werkzeug
    
    0.12.2-4.1.al8
    
    python-whoosh
    
    2.7.4-9.1.al8
    
    python2-pycairo
    
    1.16.3-6.1.al8
    
    pyxdg
    
    0.25-16.1.al8
    
    qatengine
    
    0.6.19-1.al8
    
    qatlib
    
    22.07.0-1.al8
    
    qatzip
    
    1.0.9-1.al8
    
    qhull
    
    2015.2-5.1.al8
    
    qpl
    
    0.2.0-1.al8
    
    qt5
    
    5.15.3-1.0.1.al8
    
    rapidjson
    
    1.1.0-3.1.al8
    
    re2c
    
    0.14.3-2.1.al8
    
    redhat-lsb
    
    4.1-47.2.al8
    
    redis
    
    6.2.7-1.0.1.al8
    
    resteasy
    
    3.0.26-6.1.al8
    
    rhc
    
    0.1.2-2.1.al8
    
    rhel-system-roles
    
    1.0-20.1.al8
    
    rhn-custom-info
    
    5.4.42-4.1.al8
    
    rhn-virtualization
    
    5.4.70-4.1.al8
    
    rpcsvc-proto
    
    1.3.1-4.1.al8
    
    rpm-mpi-hooks
    
    8-2.al8
    
    rpm-ostree
    
    2022.10.115.g15eba7b1-2.0.1.al8
    
    rshim
    
    2.0.5-2.0.1.al8
    
    rt-tests
    
    2.5-1.0.1.al8
    
    rubygem-bson
    
    4.8.1-1.2.al8
    
    rubygem-diff-lcs
    
    1.3-4.1.al8
    
    rubygem-json
    
    2.3.1-200.1.al8
    
    rubygem-mongo
    
    2.11.3-1.1.al8
    
    rubygem-mysql2
    
    0.5.3-1.2.al8
    
    rubygem-pg
    
    1.2.3-1.1.al8
    
    rubygem-rdoc
    
    6.2.1-201.1.al8
    
    rubygem-rspec
    
    3.7.0-2.1.al8
    
    rubygem-rspec-core
    
    3.7.1-5.1.al8
    
    rubygem-rspec-expectations
    
    3.7.0-4.1.al8
    
    rubygem-rspec-mocks
    
    3.7.0-4.1.al8
    
    rubygem-rspec-support
    
    3.7.1-2.1.al8
    
    runc
    
    1.1.4-1.0.1.al8
    
    rust
    
    1.66.1-2.al8
    
    rust-srpm-macros
    
    5-2.1.al8
    
    rust-toolset
    
    1.58.1-1.al8
    
    sat4j
    
    2.3.5-19.1.al8
    
    sblim-sfcCommon
    
    1.0.1-13.2.al8
    
    scala
    
    2.10.6-14.1.al8
    
    scap-workbench
    
    1.2.0-8.1.al8
    
    scons
    
    3.1.2-1.al8
    
    scotch
    
    6.0.5-3.1.al8
    
    SDL2
    
    2.0.10-2.1.al8
    
    shaderc
    
    2023.1-2.0.1.al8
    
    sil-scheherazade-fonts
    
    2.100-5.1.al8
    
    sisu-mojos
    
    0.3.4-1.1.al8
    
    skopeo
    
    1.11.2-0.2.0.1.al8
    
    slirp4netns
    
    1.2.0-2.al8
    
    smc-tools
    
    1.8.2-1.0.1.al8
    
    socket\_wrapper
    
    1.2.3-1.1.al8
    
    sombok
    
    2.4.0-7.1.al8
    
    spacewalk-abrt
    
    2.8.3-5.1.al8
    
    spacewalk-client-cert
    
    2.8.2-3.1.al8
    
    spacewalk-koan
    
    2.8.6-6.1.al8
    
    spacewalk-oscap
    
    2.8.5-4.1.al8
    
    spacewalk-remote-utils
    
    2.8.4-5.1.al8
    
    spacewalk-usix
    
    2.8.1-5.1.al8
    
    sparsehash
    
    2.0.2-8.1.al8
    
    spec-version-maven-plugin
    
    1.2-11.1.al8
    
    speexdsp
    
    1.2.1-2.al8
    
    spice-client-win
    
    8.8-1.al8
    
    spice-qxl-wddm-dod
    
    0.21-2.al8
    
    spice-vdagent-win
    
    0.10.0-7.al8
    
    spirv-tools
    
    2023.1-2.al8
    
    splix
    
    2.0.1-0.36.20130902svn.2.al8
    
    sscg
    
    3.0.0-7.0.1.al8
    
    sshpass
    
    1.09-4.0.1.al8
    
    stalld
    
    1.17.1-1.al8
    
    stratis-cli
    
    2.4.2-1.0.1.al8
    
    stratisd
    
    2.4.2-2.0.2.al8
    
    stress-ng
    
    0.15.00-1.1.al8
    
    subscription-manager-migration-data
    
    2.0.51-1
    
    SuperLU
    
    5.2.0-7.1.al8
    
    switcheroo-control
    
    2.4-4.0.1.al8
    
    swtpm
    
    0.7.0-4.20211109gitb79fd91.al8
    
    sysprof
    
    3.40.1-3.0.1.al8
    
    tesseract
    
    4.1.1-2.al8
    
    thermald
    
    2.5.1-1.0.1.al8
    
    timedatex
    
    0.5-3.2.al8
    
    tinycdb
    
    0.78-9.2.al8
    
    tinyxml2
    
    6.0.0-3.1.al8
    
    tlog
    
    12.1-2.0.1.al8
    
    toolbox
    
    0.0.99.3-7.0.1.al8
    
    torque
    
    4.2.10-25.1.al8
    
    tpm2-abrmd-selinux
    
    2.3.1-1.1.al8
    
    tracer
    
    0.7.5-2.1.al8
    
    tracker-miners
    
    3.1.2-3.0.2.al8
    
    twolame
    
    0.3.13-12.1.al8
    
    udica
    
    0.2.6-20.al8
    
    uglify-js
    
    2.8.29-4.1.al8
    
    uid\_wrapper
    
    1.2.4-4.1.al8
    
    umockdev
    
    0.15.4-2.0.1.al8
    
    univocity-parsers
    
    2.8.4-3.1.al8
    
    userspace-rcu
    
    0.10.1-4.1.al8
    
    utf8proc
    
    2.6.1-3.al8
    
    uthash
    
    2.0.2-4.1.al8
    
    varnish
    
    6.0.8-2.1.al8.1
    
    varnish-modules
    
    0.15.0-6.1.al8
    
    vhostmd
    
    1.1-5.1.al8
    
    virt-p2v
    
    1.42.0-5.1.al8
    
    virt-v2v
    
    1.42.0-22.al8
    
    virtio-win
    
    1.9.24-2.al8
    
    vulkan-headers
    
    1.3.239.0-2.al8
    
    vulkan-loader
    
    1.3.239.0-1.al8
    
    vulkan-tools
    
    1.3.239.0-1.al8
    
    vulkan-validation-layers
    
    1.3.239.0-2.al8
    
    web-assets
    
    5-7.1.al8
    
    webkit2gtk3
    
    2.38.5-1.0.1.al8.5
    
    woff2
    
    1.0.2-5.1.al8
    
    wpebackend-fdo
    
    1.10.0-3.al8
    
    xapian-core
    
    1.4.18-3.0.1.al8
    
    Xaw3d
    
    1.6.3-7.al8
    
    xdg-desktop-portal-gnome
    
    41.2-2.al8
    
    xdp-tools
    
    1.1.1-2.1.al8
    
    xmlstreambuffer
    
    1.5.4-8.1.al8
    
    xorg-x11-server-Xwayland
    
    21.1.3-7.al8
    
    yasm
    
    1.3.0-7.1.al8
    
    zstd
    
    1.5.1-2.0.2.al8
    
-   Deleted software packages
    
    A deleted package is a package that exists in the Alibaba Cloud Linux 2 release, but is deleted from the Alibaba Cloud Linux 3 release.
    
    **Software package name**
    
    **Software package version**
    
    a2ps
    
    4.14-23.2.al7
    
    advancecomp
    
    1.15-22.1.al7
    
    aether
    
    1.13.1-13.2.al7
    
    agg
    
    2.5-18.2.al7
    
    aic94xx-firmware
    
    30-6.1.al7
    
    akonadi
    
    1.9.2-4.2.al7
    
    alacarte
    
    3.11.91-1.1.al7
    
    alinux-indexhtml
    
    7-9.4.al7
    
    ant-antunit
    
    1.2-10.2.al7
    
    apache-commons-configuration
    
    1.9-8.2.al7
    
    apache-commons-dbcp
    
    1.4-17.2.al7
    
    apache-commons-digester
    
    1.8.1-19.2.al7
    
    apache-commons-jexl
    
    2.1.1-9.2.al7
    
    apache-commons-pool
    
    1.6-9.2.al7
    
    apache-commons-validator
    
    1.4.0-8.2.al7
    
    apache-commons-vfs
    
    2.0-11.2.al7
    
    apache-rat
    
    0.8-13.2.al7
    
    aqute-bndlib
    
    1.50.0-8.2.al7
    
    args4j
    
    2.0.16-13.2.al7
    
    ark
    
    4.10.5-4.3.al7
    
    arptables
    
    0.0.4-8.4.al7
    
    at-spi
    
    1.32.0-12.2.al7
    
    attica
    
    0.4.2-1.2.al7
    
    audiocd-kio
    
    4.10.5-3.2.al7
    
    audiofile
    
    0.3.6-9.1.al7
    
    authconfig
    
    6.2.8-30.1.al7
    
    automoc
    
    1.0-0.20.rc3.2.al7
    
    avalon-framework
    
    4.3-10.2.al7
    
    avalon-logkit
    
    2.1-14.2.al7
    
    awscli
    
    1.14.28-5.1.al7.1
    
    baekmuk-ttf-fonts
    
    2.2-36.2.al7
    
    base64coder
    
    20101219-10.2.al7
    
    bltk
    
    1.1.0-10.1.al7
    
    bluedevil
    
    2.1-1.1.al7
    
    booth
    
    1.0-8.ef769ef.git.1.al7
    
    bridge-utils
    
    1.5-9.2.al7
    
    btrfs-progs
    
    4.9.1-1.1.al7
    
    buildnumber-maven-plugin
    
    1.2-7.2.al7
    
    bwidget
    
    1.9.0-6.2.al7
    
    bzr
    
    2.5.1-14.2.al7
    
    caribou
    
    0.4.21-1.1.al7
    
    ceph-common
    
    10.2.5-4.1.al7
    
    cjkuni-ukai-fonts
    
    0.2.20080216.1-51.2.al7
    
    cjkuni-uming-fonts
    
    0.2.20080216.1-53.2.al7
    
    clufter
    
    0.77.1-1.1.al7
    
    cmpi-bindings
    
    0.9.5-6.2.al7
    
    cobertura
    
    1.9.4.1-9.2.al7
    
    codehaus-parent
    
    4-5.2.al7
    
    colord-kde
    
    0.3.0-3.3.al7
    
    compat-cheese314
    
    3.14.2-1.1.al7
    
    compat-cogl114
    
    1.14.0-3.2.al7
    
    compat-colord10
    
    1.0.4-1.2.al7
    
    compat-dapl
    
    1.2.19-4.2.al7
    
    compat-db
    
    4.7.25-28.2.al7
    
    compat-exiv2-023
    
    0.23-3.1.al7
    
    compat-gcc-32
    
    3.2.3-72.2.al7
    
    compat-gcc-34
    
    3.4.6-32.2.al7
    
    compat-gcc-44
    
    4.4.7-8.2.al7
    
    compat-glade315
    
    3.15.0-1.1.al7
    
    compat-glew
    
    1.9.0-7.2.al7
    
    compat-glibc
    
    2.12-4.2.al7
    
    compat-gnome-bluetooth38
    
    3.8.2.1-2.2.al7
    
    compat-gnome-desktop314
    
    3.14.2-1.1.al7
    
    compat-gnome-desktop38
    
    3.8.4-2.2.al7
    
    compat-grilo02
    
    0.2.12-1.1.al7
    
    compat-libcap1
    
    1.10-7.2.al7
    
    compat-libgdata013
    
    0.13.3-1.2.al7
    
    compat-libgfortran-41
    
    4.1.2-45.2.al7
    
    compat-libgweather3
    
    3.8.2-1.2.al7
    
    compat-libmediaart0
    
    0.7.0-1.1.al7
    
    compat-libxcb
    
    1.9-1.2.al7
    
    compat-openldap
    
    2.3.43-5.2.al7
    
    compat-opensm-libs
    
    3.3.15-3.1.al7
    
    compat-PackageKit08
    
    0.8.9-1.2.al7
    
    compat-poppler022
    
    0.22.5-4.1.al7
    
    compat-upower09
    
    0.9.20-1.2.al7
    
    comps-extras
    
    7-2.2.al7
    
    conman
    
    0.2.8-1.1.al7
    
    console-setup
    
    1.111-1.2.al7
    
    control-center
    
    3.28.1-8.1.al7.1
    
    coolkey
    
    1.1.0-40.1.al7
    
    cpptest
    
    1.1.1-9.2.al7
    
    cpuid
    
    20170122-6.1.al7
    
    createrepo
    
    0.9.9-28.1.al7
    
    crypto-utils
    
    2.4.1-42.2.al7
    
    cvs
    
    1.11.23-35.2.al7
    
    cvsps
    
    2.2-0.14.b1.2.al7
    
    dapl
    
    2.1.5-3.1.al7
    
    dbusmenu-qt
    
    0.9.2-7.1.al7
    
    deltarpm
    
    3.6-3.2.al7
    
    dmraid
    
    1.0.0.rc16-28.4.al7
    
    docbook-simple
    
    1.1-12.1.al7
    
    docbook-slides
    
    3.4.0-13.2.al7
    
    docbook5-style-xsl
    
    1.78.1-4.2.al7
    
    docker
    
    1.13.1-209.git7d71120.1.al7
    
    dom4j
    
    1.6.1-20.2.al7
    
    dragon
    
    4.10.5-3.2.al7
    
    dstat
    
    0.7.2-12.1.al7
    
    dumpet
    
    2.1-8.1.al7
    
    dvgrab
    
    3.5-9.1.al7
    
    easymock2
    
    2.5.2-12.2.al7
    
    ebtables
    
    2.0.10-16.1.al7
    
    ecj
    
    4.5.2-3.1.al7
    
    edac-utils
    
    0.16-16.1.al7
    
    efax
    
    0.9a-15.2.al7
    
    ekiga
    
    4.0.1-8.2.al7
    
    ElectricFence
    
    2.2.2-39.2.al7
    
    emacs-auctex
    
    11.87-4.2.al7
    
    emacs-php-mode
    
    1.18.2-1.1.al7
    
    empathy
    
    3.12.13-1.1.al7
    
    epydoc
    
    3.0.1-14.2.al7
    
    espeak
    
    1.47.11-4.2.al7
    
    farstream
    
    0.1.2-8.2.al7
    
    fedfs-utils
    
    0.10.5-0.4.al7
    
    felix-bundlerepository
    
    1.6.6-15.1.al7
    
    felix-framework
    
    4.2.1-5.2.al7
    
    felix-osgi-obr
    
    1.0.2-12.2.al7
    
    felix-shell
    
    1.4.3-5.2.al7
    
    festival
    
    1.96-28.2.al7
    
    festival-freebsoft-utils
    
    0.10-7.1.al7
    
    filebench
    
    1.4.9.1-3.1.al7
    
    finger
    
    0.17-52.2.al7
    
    firefox
    
    78.5.0-1.1.al7
    
    firstboot
    
    19.12-1.4.al7
    
    folks
    
    0.11.4-1.1.al7
    
    fonttools
    
    2.4-3.2.al7
    
    fop
    
    1.1-6.2.al7
    
    fros
    
    1.0-5.1.al7
    
    fuseiso
    
    20070708-15.2.al7
    
    gcc-libraries
    
    8.3.1-2.1.1.1.al7
    
    gconf-editor
    
    3.0.1-8.1.al7
    
    geoclue
    
    0.12.99-7.1.al7
    
    GeoIP
    
    1.5.0-14.1.al7
    
    geronimo-jaspic-spec
    
    1.1-9.1.al7
    
    geronimo-jaxrpc
    
    2.1-14.1.al7
    
    geronimo-jta
    
    1.1.1-17.1.al7
    
    geronimo-osgi-support
    
    1.0-15.1.al7
    
    geronimo-saaj
    
    1.1-14.1.al7
    
    ghostscript-chinese
    
    0.4.0-4.1.al7
    
    ghostscript-fonts
    
    5.50-32.1.al7
    
    gimp-data-extras
    
    2.0.2-9.1.al7
    
    gimp-help
    
    2.8.2-1.4.al7
    
    glade3
    
    3.8.3-6.1.al7
    
    glassfish-dtd-parser
    
    1.2-0.8.20120120svn.1.al7
    
    glassfish-el-api
    
    2.2.4-5.1.al7
    
    gnome-clocks
    
    3.28.0-1.1.al7
    
    gnome-contacts
    
    3.28.2-1.1.al7
    
    gnome-devel-docs
    
    3.28.0-1.1.al7
    
    gnome-dictionary
    
    3.26.1-2.1.al7
    
    gnome-doc-utils
    
    0.20.10-5.1.al7
    
    gnome-documents
    
    3.28.2-2.1.al7
    
    gnome-icon-theme
    
    3.12.0-1.1.al7
    
    gnome-icon-theme-extras
    
    3.12.0-1.1.al7
    
    gnome-icon-theme-symbolic
    
    3.12.0-2.1.al7
    
    gnome-packagekit
    
    3.28.0-1.1.al7
    
    gnome-python2
    
    2.28.1-14.1.al7
    
    gnome-system-log
    
    3.9.90-3.1.al7
    
    gnome-tweak-tool
    
    3.28.1-7.1.al7
    
    gnome-vfs2
    
    2.24.4-14.1.al7
    
    gnome-weather
    
    3.26.0-1.1.al7
    
    gnote
    
    3.28.0-1.1.al7
    
    gnu-getopt
    
    1.0.14-5.1.al7
    
    gob2
    
    2.0.19-4.1.al7
    
    gperftools
    
    2.6.1-1.1.al7
    
    grantlee
    
    0.3.0-5.1.al7
    
    groovy
    
    1.8.9-8.1.al7
    
    gstreamer
    
    0.10.36-7.1.al7
    
    gstreamer-plugins-bad-free
    
    0.10.23-23.1.al7
    
    gstreamer-plugins-base
    
    0.10.36-10.1.al7
    
    gstreamer-plugins-good
    
    0.10.31-13.1.al7
    
    gstreamer-python
    
    0.10.22-6.1.al7
    
    gtkhtml3
    
    4.8.5-2.1.al7
    
    gucharmap
    
    10.0.4-1.1.al7
    
    gutenprint
    
    5.2.9-18.1.al7
    
    gwenview
    
    4.10.5-5.1.al7
    
    hawkey
    
    0.6.3-4.4.al7
    
    highcontrast-qt
    
    0.1-2.1.al7
    
    hmaccalc
    
    0.9.13-4.1.al7
    
    hsakmt
    
    1.0.0-7.4.al7
    
    hsqldb
    
    1.8.1.3-15.1.al7
    
    html2ps
    
    1.0-0.14.b7.1.al7
    
    httpunit
    
    1.7-15.1.al7
    
    ibus-chewing
    
    1.4.4-14.1.al7
    
    ibus-qt
    
    1.3.2-4.1.al7
    
    ibus-rawcode
    
    1.3.2-3.1.al7
    
    ibutils
    
    1.5.7-14.1.al7
    
    icc-profiles-openicc
    
    1.3.1-5.1.al7
    
    icon-naming-utils
    
    0.8.90-10.1.al7
    
    im-chooser
    
    1.6.4-6.1.al7
    
    ImageMagick
    
    6.9.10.68-7.2.al7
    
    imsettings
    
    1.6.3-11.1.al7
    
    indent
    
    2.2.11-13.1.al7
    
    infinipath-psm
    
    3.3-26\_g604758e\_open.2.1.al7
    
    iniparser
    
    3.1-5.1.al7
    
    iok
    
    2.1.3-6.1.al7
    
    iowatcher
    
    1.0-6.1.al7
    
    ipa-gothic-fonts
    
    003.03-5.1.al7
    
    ipa-mincho-fonts
    
    003.03-5.1.al7
    
    ipa-pgothic-fonts
    
    003.03-5.1.al7
    
    ipa-pmincho-fonts
    
    003.03-5.1.al7
    
    ipsilon
    
    1.0.0-13.1.al7
    
    isdn4k-utils
    
    3.2-99.4.al7
    
    ivtv-firmware
    
    20080701-26.1.al7
    
    ixpdimm\_sw
    
    01.00.00.2111-1.4.al7
    
    jackson
    
    1.9.4-7.1.al7
    
    jai-imageio-core
    
    1.2-0.14.20100217cvs.1.al7
    
    jakarta-taglibs-standard
    
    1.1.2-14.1.al7
    
    jandex
    
    1.0.3-8.1.al7
    
    jarjar
    
    1.4-6.1.al7
    
    java-1.6.0-openjdk
    
    1.6.0.41-1.13.13.1.1.al7
    
    java-1.7.0-openjdk
    
    1.7.0.261-2.6.22.2.1.al7
    
    jboss-annotations-1.1-api
    
    1.0.1-0.6.20120212git76e1a2.1.al7
    
    jboss-ejb-3.1-api
    
    1.0.2-10.1.al7
    
    jboss-el-2.2-api
    
    1.0.1-0.7.20120212git2fabd8.1.al7
    
    jboss-interceptors-1.1-api
    
    1.0.2-0.9.20120319git49a904.1.al7
    
    jboss-jaxrpc-1.1-api
    
    1.0.1-7.1.al7
    
    jboss-servlet-2.5-api
    
    1.0.1-5.1.al7
    
    jboss-servlet-3.0-api
    
    1.0.1-9.1.al7
    
    jboss-specs-parent
    
    1.0.0-0.8.Beta2.1.al7
    
    jboss-transaction-1.1-api
    
    1.0.1-8.1.al7
    
    jettison
    
    1.3.3-4.1.al7
    
    jetty-artifact-remote-resources
    
    1.0-10.1.al7
    
    jetty-assembly-descriptors
    
    1.0-9.1.al7
    
    jetty-build-support
    
    1.1-9.1.al7
    
    jetty-distribution-remote-resources
    
    1.1-8.1.al7
    
    jetty-parent
    
    19-8.1.al7
    
    jetty-test-policy
    
    1.2-10.1.al7
    
    jetty-toolchain
    
    1.4-9.1.al7
    
    jetty-version-maven-plugin
    
    1.0.7-9.1.al7
    
    jing-trang
    
    20091111-14.1.al7
    
    joda-convert
    
    1.3-5.1.al7
    
    joda-time
    
    2.2-3.tzdata2013c.1.al7
    
    js
    
    1.8.5-20.1.al7
    
    jsr-311
    
    1.1.1-6.1.al7
    
    juk
    
    4.10.5-3.2.al7
    
    k3b
    
    2.0.2-17.1.al7
    
    kabi-yum-plugins
    
    1.0-3.2.al7
    
    kaccessible
    
    4.10.5-3.1.al7
    
    kactivities
    
    4.10.5-3.2.al7
    
    kamera
    
    4.10.5-5.2.al7
    
    kate
    
    4.10.5-6.1.al7
    
    kcalc
    
    4.10.5-4.2.al7
    
    kcharselect
    
    4.10.5-3.2.al7
    
    kcm-gtk
    
    0.5.3-14.1.al7
    
    kcm\_touchpad
    
    0.3.1-11.1.al7
    
    kcolorchooser
    
    4.10.5-3.2.al7
    
    kcoloredit
    
    4.4.0-9.2.al7
    
    kde-base-artwork
    
    4.10.5-2.1.al7
    
    kde-baseapps
    
    4.10.5-6.1.al7
    
    kde-filesystem
    
    4-47.1.al7
    
    kde-l10n
    
    4.10.5-2.1.al7
    
    kde-plasma-networkmanagement
    
    0.9.0.9-9.2.al7
    
    kde-print-manager
    
    4.10.5-4.2.al7
    
    kde-runtime
    
    4.10.5-11.4.al7
    
    kde-settings
    
    19-23.12.1.al7
    
    kde-wallpapers
    
    4.10.5-2.1.al7
    
    kde-workspace
    
    4.11.19-16.2.al7
    
    kdeaccessibility
    
    4.10.5-2.1.al7
    
    kdeadmin
    
    4.10.5-4.1.al7
    
    kdeartwork
    
    4.10.5-4.1.al7
    
    kdegraphics
    
    4.10.5-3.1.al7
    
    kdegraphics-strigi-analyzer
    
    4.10.5-3.1.al7
    
    kdegraphics-thumbnailers
    
    4.10.5-3.1.al7
    
    kdelibs
    
    4.14.8-13.1.al7
    
    kdemultimedia
    
    4.10.5-2.1.al7
    
    kdenetwork
    
    4.10.5-8.1.al7
    
    kdepim
    
    4.10.5-7.1.al7
    
    kdepim-runtime
    
    4.10.5-3.2.al7
    
    kdepimlibs
    
    4.10.5-4.3.al7
    
    kdeplasma-addons
    
    4.10.5-5.1.al7
    
    kdesdk
    
    4.10.5-8.1.al7
    
    kdeutils
    
    4.10.5-3.1.al7
    
    kdf
    
    4.10.5-3.2.al7
    
    keytool-maven-plugin
    
    1.0-13.1.al7
    
    kgamma
    
    4.10.5-3.2.al7
    
    kgpg
    
    4.10.5-4.1.al7
    
    kiconedit
    
    4.4.0-10.1.al7
    
    kio\_sysinfo
    
    20090930-8.1.al7
    
    kmag
    
    4.10.5-4.1.al7
    
    kmix
    
    4.10.5-4.2.al7
    
    kolourpaint
    
    4.10.5-4.2.al7
    
    konkretcmpi
    
    0.9.1-5.1.al7
    
    konsole
    
    4.10.5-5.1.al7
    
    kross-interpreters
    
    4.10.5-8.1.al7
    
    kruler
    
    4.10.5-3.2.al7
    
    ksaneplugin
    
    4.10.5-3.2.al7
    
    ksc
    
    0.11.0-1.1.al7
    
    kscreen
    
    1.0.1-9.1.al7
    
    ksnapshot
    
    4.10.5-3.2.al7
    
    ksshaskpass
    
    0.5.3-7.1.al7
    
    ktimer
    
    4.10.5-3.2.al7
    
    kwallet
    
    4.10.5-3.2.al7
    
    kxml
    
    2.3.0-5.1.al7
    
    latencytop
    
    0.5-13.1.al7
    
    latrace
    
    0.5.11-6.1.1.al7
    
    libart\_lgpl
    
    2.3.21-10.1.al7
    
    libbluedevil
    
    2.1-1.1.al7
    
    libbonobo
    
    2.32.1-7.1.al7
    
    libbonoboui
    
    2.24.5-7.1.al7
    
    libchewing
    
    0.3.4-6.1.al7
    
    libcmpiutil
    
    0.5.7-3.1.al7
    
    libcryptui
    
    3.12.2-1.1.al7
    
    libdbi
    
    0.8.4-6.1.al7
    
    libdbi-drivers
    
    0.8.3-16.1.al7
    
    libee
    
    0.4.1-6.1.al7
    
    libesmtp
    
    1.0.6-7.1.al7
    
    libgee06
    
    0.6.8-3.1.al7
    
    libgepub
    
    0.6.0-1.1.al7
    
    libglade2
    
    2.6.4-11.1.al7
    
    libgnome
    
    2.32.1-9.1.al7
    
    libgnome-keyring
    
    3.12.0-1.1.al7
    
    libgnomecanvas
    
    2.30.3-8.1.al7
    
    libgnomeui
    
    2.24.5-8.1.al7
    
    libgxim
    
    0.5.0-3.1.al7
    
    libhif
    
    0.2.1-2.1.al7
    
    libibcommon
    
    1.2.0-8.1.al7
    
    libibmad
    
    1.3.13-1.1.al7
    
    libid3tag
    
    0.15.1b-17.1.al7
    
    libinvm-cim
    
    1.0.0.1041-3.4.al7
    
    libinvm-cli
    
    1.0.0.1096-3.4.al7
    
    libinvm-i18n
    
    1.0.0.1016-3.4.al7
    
    libiodbc
    
    3.52.7-7.1.al7
    
    libkcddb
    
    4.10.5-3.4.al7
    
    libkcompactdisc
    
    4.10.5-4.2.al7
    
    libkdcraw
    
    4.10.5-7.2.al7
    
    libkexiv2
    
    4.10.5-4.1.al7
    
    libkipi
    
    4.10.5-3.2.al7
    
    libksane
    
    4.10.5-4.4.al7
    
    libkscreen
    
    1.0.1-8.1.al7
    
    libmsn
    
    4.2.1-7.1.al7
    
    libmusicbrainz
    
    2.1.5-17.1.al7
    
    libmx
    
    1.4.7-10.1.al7
    
    libnfsidmap
    
    0.25-19.1.al7
    
    libnl
    
    1.1.4-3.1.al7
    
    libntlm
    
    1.3-6.1.al7
    
    libofa
    
    0.9.3-24.1.al7
    
    liboil
    
    0.3.16-10.1.al7
    
    libsexy
    
    0.1.11-23.1.al7
    
    libssh2
    
    1.8.0-4.1.al7
    
    libtnc
    
    1.25-6.1.al7
    
    libtranslit
    
    0.0.2-6.1.al7
    
    libunwind
    
    1.2-2.1.al7
    
    libusnic\_verbs
    
    2.0.3-1.1.al7
    
    libvirt-cim
    
    0.6.3-19.1.al7
    
    libvirt-java
    
    0.4.9-4.1.al7
    
    libvirt-snmp
    
    0.0.3-6.1.al7
    
    libwvstreams
    
    4.6.1-12.1.al7
    
    libXevie
    
    1.0.3-7.1.1.al7
    
    libXfont
    
    1.5.4-1.1.al7
    
    libzapojit
    
    0.0.3-4.1.al7
    
    llvm-private
    
    7.0.1-1.1.al7
    
    log4cxx
    
    0.10.0-16.1.al7
    
    log4j
    
    1.2.17-18.0.1.al7
    
    lohit-oriya-fonts
    
    2.5.4.1-3.1.al7
    
    lohit-punjabi-fonts
    
    2.5.3-2.1.al7
    
    m17n-contrib
    
    1.1.14-3.1.al7
    
    m2crypto
    
    0.21.1-17.1.al7
    
    man-pages-cs
    
    0.18.20090209-17.1.al7
    
    man-pages-es
    
    1.55-21.1.al7
    
    man-pages-fr
    
    3.52-3.1.al7
    
    man-pages-it
    
    3.15-2.1.al7
    
    man-pages-ja
    
    20130615-6.1.al7
    
    man-pages-ko
    
    20050219-25.1.al7
    
    man-pages-pl
    
    0.3-4.1.al7
    
    man-pages-ru
    
    3.41-3.20120901.1.al7
    
    man-pages-zh-CN
    
    1.5.2-4.1.al7
    
    maven-changes-plugin
    
    2.8-7.1.al7
    
    maven-deploy-plugin
    
    2.7-11.1.al7
    
    maven-downloader
    
    1.1-6.1.al7
    
    maven-doxia-tools
    
    1.4-15.1.al7
    
    maven-ear-plugin
    
    2.8-5.1.al7
    
    maven-ejb-plugin
    
    2.3-9.1.al7
    
    maven-gpg-plugin
    
    1.4-11.1.al7
    
    maven-jarsigner-plugin
    
    1.2-9.1.al7
    
    maven-javadoc-plugin
    
    2.9-8.1.al7
    
    maven-jxr
    
    2.3-11.1.al7
    
    maven-osgi
    
    0.2.0-7.1.al7
    
    maven-project-info-reports-plugin
    
    2.6-8.1.al7
    
    maven-release
    
    2.2.1-12.1.al7
    
    maven-reporting-exec
    
    1.1-5.1.al7
    
    maven-repository-builder
    
    1.0-0.5.alpha2.1.al7
    
    maven-scm
    
    1.8.1-2.1.al7
    
    maven-shared-jar
    
    1.1-8.1.al7
    
    maven-site-plugin
    
    3.2-7.1.al7
    
    maven-verifier-plugin
    
    1.0-10.1.al7
    
    maven-war-plugin
    
    2.3-9.1.al7
    
    mdds
    
    1.2.3-1.1.al7
    
    memstomp
    
    0.1.4-11.1.al7
    
    mercurial
    
    2.6.2-11.1.al7
    
    mesa-private-llvm
    
    3.9.1-3.1.al7
    
    mgetty
    
    1.1.36-28.1.al7
    
    migrationtools
    
    47-15.1.al7
    
    mipv6-daemon
    
    1.0-5.1.al7
    
    mkbootdisk
    
    1.5.5-11.1.al7
    
    mod\_auth\_kerb
    
    5.4-28.1.al7
    
    mod\_nss
    
    1.0.14-12.1.al7
    
    mod\_revocator
    
    1.0.3-21.4.al7
    
    mozjs17
    
    17.0.0-20.1.al7
    
    mozjs24
    
    24.2.0-7.1.al7
    
    mpage
    
    2.5.6-14.1.al7
    
    msv
    
    2013.5.1-7.4.al7
    
    mysql-connector-java
    
    5.1.25-3.1.al7
    
    mysql-connector-odbc
    
    5.2.5-8.1.al7
    
    MySQL-python
    
    1.2.5-1.4.al7
    
    nekohtml
    
    1.9.14-13.1.al7
    
    nepomuk-core
    
    4.10.5-6.1.al7
    
    nepomuk-widgets
    
    4.10.5-3.1.al7
    
    netsniff-ng
    
    0.5.8-10.4.al7
    
    nfsometer
    
    1.7-1.4.al7
    
    nfstest
    
    2.1.5-1.1.al7
    
    nhn-nanum-fonts
    
    3.020-9.1.al7
    
    nss-pem
    
    1.0.3-7.1.al7.1
    
    nss-softokn
    
    3.79.0-4.1.al7
    
    nss-util
    
    3.79.0-1.1.al7
    
    nss\_compat\_ossl
    
    0.9.6-8.1.al7
    
    ntp
    
    4.2.6p5-29.3.al7.2
    
    nuxwdog
    
    1.0.5-1.1.al7
    
    nvml
    
    1.5.1-2.1.1.al7
    
    obex-data-server
    
    0.4.6-6.1.al7
    
    obexd
    
    0.46-5.1.al7
    
    objectweb-anttask
    
    1.3.2-10.1.al7
    
    objectweb-asm4
    
    4.0-3.1.al7
    
    ocaml-calendar
    
    2.03.2-7.2.al7
    
    ocaml-csv
    
    1.2.3-8.1.al7
    
    ocaml-curses
    
    1.0.3-20.2.al7
    
    ocaml-fileutils
    
    0.4.4-9.1.al7
    
    ocaml-gettext
    
    0.3.7-1.2.al7
    
    ocaml-libvirt
    
    0.6.1.4-17.2.al7
    
    ocaml-xml-light
    
    2.3-0.8.svn234.2.al7
    
    okular
    
    4.10.5-9.1.al7
    
    opal
    
    3.10.10-4.1.al7
    
    opencc
    
    0.4.3-3.1.al7
    
    openjpeg
    
    1.5.1-18.1.al7
    
    openlmi-networking
    
    0.3.0-3.1.al7
    
    openlmi-providers
    
    0.5.0-4.4.al7
    
    openlmi-storage
    
    0.8.0-2.1.al7
    
    openlmi-tools
    
    0.9-22.1.al7
    
    openobex
    
    1.5-8.1.al7
    
    openssl098e
    
    0.9.8e-29.1.al7.3
    
    openvswitch
    
    2.0.0-7.1.al7
    
    oprofile
    
    0.9.9-27.1.al7
    
    optipng
    
    0.7.4-4.1.al7
    
    oracleasm
    
    2.0.8-22.1.1.al7
    
    ORBit2
    
    2.14.19-13.1.al7
    
    ortp
    
    0.20.0-10.1.al7
    
    ovmf
    
    20180508-6.gitee3198e672e2.1.al7
    
    oxygen-gtk
    
    1.2.0-6.1.al7
    
    oxygen-gtk2
    
    1.3.4-3.1.al7
    
    oxygen-gtk3
    
    1.1.4-5.4.al7
    
    oxygen-icon-theme
    
    4.10.5-2.1.al7
    
    pam\_krb5
    
    2.4.8-6.4.al7
    
    pam\_pkcs11
    
    0.6.2-30.1.al7
    
    passivetex
    
    1.25-17.1.al7
    
    pax
    
    3.4-19.1.al7
    
    pcs
    
    0.9.169-3.1.al7.3
    
    perl-AppConfig
    
    1.66-20.1.al7
    
    perl-Archive-Extract
    
    0.68-3.1.al7
    
    perl-B-Keywords
    
    1.13-2.1.al7
    
    perl-Browser-Open
    
    0.04-6.1.al7
    
    perl-Business-ISBN
    
    2.06-2.1.al7
    
    perl-Business-ISBN-Data
    
    20120719.001-2.1.al7
    
    perl-CGI-Session
    
    4.35-16.1.al7
    
    perl-Class-Load
    
    0.20-3.1.al7
    
    perl-Class-Load-XS
    
    0.06-3.1.al7
    
    perl-Config-Simple
    
    4.59-15.1.al7
    
    perl-Config-Tiny
    
    2.14-7.1.al7
    
    perl-CPAN-Changes
    
    0.20-2.1.al7
    
    perl-CPANPLUS
    
    0.91.38-4.1.al7
    
    perl-CPANPLUS-Dist-Build
    
    0.70-3.1.al7
    
    perl-Crypt-CBC
    
    2.33-2.1.al7
    
    perl-Crypt-DES
    
    2.05-20.1.al7
    
    perl-Crypt-PasswdMD5
    
    1.3-17.1.al7
    
    perl-Crypt-SSLeay
    
    0.64-5.1.al7
    
    perl-CSS-Tiny
    
    1.19-5.1.al7
    
    perl-Data-Peek
    
    0.38-3.1.al7
    
    perl-DateTime-Format-DateParse
    
    0.05-5.1.al7
    
    perl-DBIx-Simple
    
    1.35-7.1.al7
    
    perl-Devel-Cover
    
    1.03-3.1.al7
    
    perl-Devel-Cycle
    
    1.11-13.1.al7
    
    perl-Devel-EnforceEncapsulation
    
    0.50-8.1.al7
    
    perl-Devel-Leak
    
    0.03-22.1.al7
    
    perl-Email-Address
    
    1.898-3.1.al7
    
    perl-File-Find-Rule-Perl
    
    1.13-2.1.al7
    
    perl-File-Inplace
    
    0.20-8.1.al7
    
    perl-Font-AFM
    
    1.20-13.1.al7
    
    perl-Font-TTF
    
    1.02-3.1.al7
    
    perl-FreezeThaw
    
    0.5001-10.1.al7
    
    perl-GD
    
    2.49-3.1.al7
    
    perl-GD-Barcode
    
    1.15-15.1.al7
    
    perl-Hook-LexWrap
    
    0.24-2.1.al7
    
    perl-HTML-Format
    
    2.10-7.1.al7
    
    perl-HTML-FormatText-WithLinks
    
    0.14-8.1.al7
    
    perl-HTML-FormatText-WithLinks-AndTables
    
    0.02-4.1.al7
    
    perl-Image-Base
    
    1.07-23.1.al7
    
    perl-Image-Info
    
    1.33-3.1.al7
    
    perl-Image-Xbm
    
    1.08-21.1.al7
    
    perl-Image-Xpm
    
    1.09-21.1.al7
    
    perl-Inline
    
    0.53-4.1.al7
    
    perl-Inline-Files
    
    0.68-6.1.al7
    
    perl-IO-CaptureOutput
    
    1.1102-9.1.al7
    
    perl-libintl
    
    1.20-12.1.al7
    
    perl-Locale-Maketext-Gettext
    
    1.27-13.1.al7
    
    perl-Locale-PO
    
    0.23-2.1.al7
    
    perl-Log-Message
    
    0.08-3.1.al7
    
    perl-Log-Message-Simple
    
    0.10-2.1.al7
    
    perl-Mixin-Linewise
    
    0.004-2.1.al7
    
    perl-Module-Manifest
    
    1.08-10.1.al7
    
    perl-Module-Signature
    
    0.73-2.1.al7
    
    perl-Net-Daemon
    
    0.48-5.1.al7
    
    perl-Net-DNS-Resolver-Programmable
    
    0.003-15.1.al7
    
    perl-Net-LibIDN
    
    0.12-15.1.al7
    
    perl-Net-Telnet
    
    3.03-19.1.al7
    
    perl-Newt
    
    1.08-36.1.al7
    
    perl-Object-Deadly
    
    0.09-15.1.al7
    
    perl-PAR-Dist
    
    0.49-2.1.al7
    
    perl-Parallel-Iterator
    
    1.00-8.1.al7
    
    perl-Parse-CPAN-Meta
    
    1.4404-5.1.al7
    
    perl-Parse-RecDescent
    
    1.967009-5.1.al7
    
    perl-Perl-Critic
    
    1.118-5.1.al7
    
    perl-Perl-Critic-More
    
    1.000-9.1.al7
    
    perl-Perl-MinimumVersion
    
    1.32-2.1.al7
    
    perl-Perl4-CoreLibs
    
    0.003-7.1.al7
    
    perl-PlRPC
    
    0.2020-14.1.al7
    
    perl-Pod-Coverage-TrustPod
    
    0.100002-5.1.al7
    
    perl-Pod-Eventual
    
    0.093330-12.1.al7
    
    perl-Pod-POM
    
    0.27-10.1.al7
    
    perl-Pod-Spell
    
    1.04-4.1.al7
    
    perl-PPI
    
    1.215-12.1.al7
    
    perl-PPI-HTML
    
    1.08-4.1.al7
    
    perl-PPIx-Regexp
    
    0.034-3.1.al7
    
    perl-PPIx-Utilities
    
    1.001000-8.1.al7
    
    perl-Probe-Perl
    
    0.02-3.1.al7
    
    perl-Readonly-XS
    
    1.05-15.1.al7
    
    perl-Sort-Versions
    
    1.5-22.1.al7
    
    perl-String-Format
    
    1.16-11.1.al7
    
    perl-String-Similarity
    
    1.04-10.1.al7
    
    perl-Syntax-Highlight-Engine-Kate
    
    0.07-5.1.al7
    
    perl-Task-Weaken
    
    1.04-6.1.al7
    
    perl-Template-Toolkit
    
    2.24-5.1.al7
    
    perl-Term-UI
    
    0.36-2.1.al7
    
    perl-Test-ClassAPI
    
    1.06-14.1.al7
    
    perl-Test-CPAN-Meta
    
    0.23-2.1.al7
    
    perl-Test-DistManifest
    
    1.012-6.1.al7
    
    perl-Test-EOL
    
    1.3-7.1.al7
    
    perl-Test-HasVersion
    
    0.012-7.1.al7
    
    perl-Test-Inter
    
    1.05-2.1.al7
    
    perl-Test-Manifest
    
    1.23-2.1.al7
    
    perl-Test-Memory-Cycle
    
    1.04-17.1.al7
    
    perl-Test-MinimumVersion
    
    0.101080-10.1.al7
    
    perl-Test-MockObject
    
    1.20120301-3.1.al7
    
    perl-Test-NoTabs
    
    1.3-5.1.al7
    
    perl-Test-Object
    
    0.07-17.1.al7
    
    perl-Test-Output
    
    1.01-7.1.al7
    
    perl-Test-Perl-Critic
    
    1.02-10.1.al7
    
    perl-Test-Portability-Files
    
    0.05-18.1.al7
    
    perl-Test-Script
    
    1.07-12.1.al7
    
    perl-Test-Spelling
    
    0.19-2.1.al7
    
    perl-Test-SubCalls
    
    1.09-14.1.al7
    
    perl-Test-Synopsis
    
    0.06-16.1.al7
    
    perl-Test-Tester
    
    0.109-3.1.al7
    
    perl-Test-Vars
    
    0.005-3.1.al7
    
    perl-Test-Without-Module
    
    0.17-12.1.al7
    
    perl-Text-CSV\_XS
    
    1.00-3.1.al7
    
    perl-Text-Iconv
    
    1.7-18.1.al7
    
    perl-Tree-DAG\_Node
    
    1.12-2.1.al7
    
    perl-Unicode-Map8
    
    0.13-13.1.al7
    
    perl-Unicode-String
    
    2.09-29.1.al7
    
    perl-UNIVERSAL-can
    
    1.20120726-3.1.al7
    
    perl-UNIVERSAL-isa
    
    1.20120726-3.1.al7
    
    perl-Version-Requirements
    
    0.101022-244.1.al7
    
    perl-WWW-Curl
    
    4.15-13.1.al7
    
    perl-XML-Dumper
    
    0.81-17.1.al7
    
    perl-XML-Filter-BufferText
    
    1.01-17.1.al7
    
    perl-XML-Grove
    
    0.46alpha-52.1.al7
    
    perl-XML-Handler-YAWriter
    
    0.23-18.1.al7
    
    perl-XML-LibXSLT
    
    1.80-4.1.al7
    
    perl-XML-SAX-Writer
    
    0.53-4.1.al7
    
    perl-XML-TreeBuilder
    
    4.2-1.1.al7
    
    perl-XML-Writer
    
    0.623-3.1.al7
    
    perl-XML-XPathEngine
    
    0.14-3.1.al7
    
    pexpect
    
    2.3-11.1.al7
    
    phonon
    
    4.6.0-10.1.al7
    
    phonon-backend-gstreamer
    
    4.6.3-3.1.al7
    
    php-pecl-memcache
    
    3.0.8-4.1.al7
    
    pkgconfig
    
    0.27.1-4.1.al7
    
    plexus-cdc
    
    1.0-0.20.a14.1.al7
    
    plexus-digest
    
    1.1-15.1.al7
    
    plexus-mail-sender
    
    1.0-1.a2.25.1.al7
    
    plexus-tools-pom
    
    1.0.11-8.1.al7
    
    pm-utils
    
    1.4.1-27.1.al7
    
    pngcrush
    
    1.7.59-4.1.al7
    
    pngnq
    
    1.1-9.1.al7
    
    polkit-kde
    
    0.99.1-4.20130311git.1.al7
    
    polkit-qt
    
    0.103.0-10.1.al7
    
    pothana2000-fonts
    
    1.3.3-6.1.al7
    
    prelink
    
    0.5.0-9.4.al7
    
    psutils
    
    1.17-44.1.al7
    
    pth
    
    2.0.7-23.1.al7
    
    ptlib
    
    2.10.10-6.1.al7
    
    publican
    
    3.2.0-4.1.al7
    
    publican-redhat
    
    2.7-6.1.al7
    
    pygpgme
    
    0.3-9.1.al7
    
    PyGreSQL
    
    4.0-9.1.al7
    
    pykde4
    
    4.10.5-6.1.al7
    
    pyliblzma
    
    0.5.3-11.1.al7
    
    PyOpenGL
    
    3.0.1-6.1.al7
    
    pyorbit
    
    2.24.0-15.1.al7
    
    PyPAM
    
    0.5.0-19.1.al7
    
    PyQt4
    
    4.10.1-13.1.al7
    
    python
    
    2.7.5-92.1.al7
    
    python-adal
    
    0.6.0-1.1.al7
    
    python-azure-sdk
    
    4.0.0-1.1.al7
    
    python-backports
    
    1.0-8.1.al7
    
    python-backports-ssl\_match\_hostname
    
    3.5.0.1-1.1.al7
    
    python-beaker
    
    1.5.4-10.1.al7
    
    python-blivet3
    
    3.1.3-3.1.al7
    
    python-boto3
    
    1.4.6-5.1.al7
    
    python-cherrypy
    
    3.2.2-4.1.al7
    
    python-di
    
    0.3-2.1.al7
    
    python-docs
    
    2.7.5-3.2.al7
    
    python-docutils
    
    0.11-0.3.20130715svn7687.1.al7
    
    python-dtopt
    
    0.1-13.1.al7
    
    python-enum34
    
    1.0.4-1.1.al7
    
    python-fpconst
    
    0.7.3-12.1.al7
    
    python-futures
    
    3.1.1-5.1.al7
    
    python-gudev
    
    147.2-7.1.al7
    
    python-ipaddr
    
    2.1.11-2.1.al7
    
    python-ipaddress
    
    1.0.16-2.4.al7
    
    python-IPy
    
    0.75-6.1.al7
    
    python-isodate
    
    0.5.4-8.1.al7
    
    python-kerberos
    
    1.1-15.1.al7
    
    python-kitchen
    
    1.1.1-5.1.al7
    
    python-krbV
    
    1.0.90-8.1.al7
    
    python-matplotlib
    
    1.2.0-16.1.al7
    
    python-memcached
    
    1.48-4.1.al7
    
    python-msrest
    
    0.5.4-1.1.al7
    
    python-msrestazure
    
    0.5.1-1.1.al7
    
    python-mutagen
    
    1.20-6.1.al7
    
    python-nose
    
    1.3.7-1.1.al7
    
    python-paramiko
    
    2.1.1-9.1.al7
    
    python-paste
    
    1.7.5.1-9.20111221hg1498.1.al7
    
    python-pyblock
    
    0.53-6.1.al7
    
    python-pygments
    
    1.4-10.1.al7
    
    python-repoze-lru
    
    0.4-3.al7
    
    python-rhsm
    
    1.19.10-1.1.al7
    
    python-s3transfer
    
    0.1.13-1.3.al7.2
    
    python-setproctitle
    
    1.1.6-5.1.al7
    
    python-smbc
    
    1.0.13-8.1.al7
    
    python-sqlalchemy
    
    0.9.8-2.4.al7
    
    python-subprocess32
    
    3.2.6-14.1.al7
    
    python-tempita
    
    0.5.1-6.1.al7
    
    python-tornado
    
    4.2.1-5.1.al7
    
    python-twisted-core
    
    12.2.0-5.1.al7
    
    python-twisted-web
    
    12.1.0-8.1.al7
    
    python-twisted-words
    
    12.2.0-4.1.al7
    
    python-urlgrabber
    
    3.10-10.1.al7
    
    python-virtualenv
    
    15.1.0-7.1.al7
    
    python-webob
    
    1.2.3-7.1.al7
    
    python-webtest
    
    1.3.4-6.1.al7
    
    python-wheel
    
    0.31.1-5.1.al7
    
    python-which
    
    1.1.0-12.1.al7
    
    python-zope-interface
    
    4.0.5-4.1.al7
    
    python3-setuptools
    
    39.2.0-10.1.al7
    
    qca-ossl
    
    2.0.0-0.19.beta3.1.al7
    
    qca2
    
    2.0.3-7.1.al7
    
    qemu-guest-agent
    
    2.12.0-3.1.al7
    
    qimageblitz
    
    0.0.6-7.1.al7
    
    qjson
    
    0.8.1-4.1.al7
    
    qt
    
    4.8.7-9.1.al7
    
    qt3
    
    3.3.8b-51.1.al7
    
    qt5-qtenginio
    
    1.6.2-2.1.al7
    
    quagga
    
    0.99.22.4-5.1.al7
    
    ras-utils
    
    7.0-6.1.al7
    
    rcs
    
    5.9.0-7.1.al7
    
    rdate
    
    1.4-25.1.al7
    
    rdist
    
    6.1.5-61.1.al7
    
    redhat-upgrade-dracut
    
    0.8.10-1.4.al7
    
    relaxngcc
    
    1.12-6.1.al7
    
    resource-agents
    
    4.1.1-61.1.al7.18
    
    resteasy-base
    
    3.0.6-4.4.al7
    
    rfkill
    
    0.4-10.1.al7
    
    rhdb-utils
    
    9.2.0-5.1.al7
    
    rhino
    
    1.7R5-1.1.al7
    
    rngom
    
    201103-0.8.20120119svn.1.al7
    
    rp-pppoe
    
    3.11-7.1.al7
    
    rsh
    
    0.17-80.1.al7
    
    rubygem-bundler
    
    1.7.8-3.1.al7
    
    rubygem-net-http-persistent
    
    2.8-5.1.al7
    
    rubygem-thor
    
    0.19.1-1.1.al7
    
    rusers
    
    0.17-81.1.al7
    
    rwho
    
    0.17-54.1.al7
    
    sapconf
    
    0.98-16.1.al7
    
    saxon
    
    9.3.0.4-11.1.al7
    
    sblim-cim-client2
    
    2.2.1-3.1.al7
    
    sblim-cmpi-fsvol
    
    1.5.1-12.1.al7
    
    sblim-cmpi-network
    
    1.4.0-11.1.al7
    
    sblim-cmpi-nfsv3
    
    1.1.1-9.1.al7
    
    sblim-cmpi-nfsv4
    
    1.1.0-10.1.al7
    
    sblim-cmpi-params
    
    1.3.0-10.1.al7
    
    sblim-cmpi-sysfs
    
    1.2.0-10.1.al7
    
    sblim-cmpi-syslog
    
    0.9.0-4.1.al7
    
    sblim-gather
    
    2.2.8-9.1.al7
    
    sblim-smis-hba
    
    1.0.0-10.1.al7
    
    sblim-testsuite
    
    1.3.0-8.1.al7
    
    scannotation
    
    1.0.3-0.7.r12.1.al7
    
    scipy
    
    0.12.1-6.1.al7
    
    screen
    
    4.1.0-0.27.20120314git3c2946.1.al7
    
    sdparm
    
    1.08-3.1.al7
    
    seahorse-nautilus
    
    3.11.92-11.1.al7
    
    seahorse-sharing
    
    3.8.0-3.1.al7
    
    setuptool
    
    1.19.11-8.1.al7
    
    shared-desktop-ontologies
    
    0.11.0-2.1.al7
    
    shim-signed
    
    15-8.1.al7
    
    shotwell
    
    0.28.4-2.2.al7
    
    sisu-maven-plugin
    
    1.1-8.1.al7
    
    snakeyaml
    
    1.11-8.1.al7
    
    snapper
    
    0.2.8-4.4.al7
    
    SOAPpy
    
    0.11.6-17.1.al7
    
    soprano
    
    2.9.2-3.1.al7
    
    sox
    
    14.4.1-7.1.al7
    
    spice-xpi
    
    2.8-8.1.al7
    
    stax2-api
    
    3.1.1-10.1.al7
    
    strigi
    
    0.7.7-13.20120626.1.al7
    
    strongimcv
    
    5.2.0-3.1.al7
    
    svgpart
    
    4.10.5-3.2.al7
    
    svrcore
    
    4.1.3-2.1.al7
    
    sweeper
    
    4.10.5-4.2.al7
    
    system-config-date
    
    1.10.6-3.3.al7
    
    system-config-date-docs
    
    1.0.11-4.1.al7
    
    system-config-firewall
    
    1.2.29-10.1.al7
    
    system-config-kdump
    
    2.0.13-21.2.al7
    
    system-config-keyboard
    
    1.4.0-5.1.al7
    
    system-config-kickstart
    
    2.9.7-1.1.al7
    
    system-config-language
    
    1.4.0-9.1.al7
    
    system-config-users
    
    1.3.5-5.1.al7
    
    system-config-users-docs
    
    1.0.9-6.1.al7
    
    system-lsb
    
    4.1-27.1.al7
    
    system-switch-java
    
    1.1.7.1-0.1.al7
    
    sysvinit
    
    2.88-14.dsf.1.al7
    
    t1lib
    
    5.1.2-14.1.al7
    
    t1utils
    
    1.37-6.1.al7
    
    talk
    
    0.17-46.1.al7
    
    targetd
    
    0.8.6-1.1.al7
    
    tcl-pgtcl
    
    2.0.0-5.1.al7
    
    tclx
    
    8.4.0-22.1.al7
    
    tcp\_wrappers
    
    7.6-77.1.al7
    
    telepathy-farstream
    
    0.6.0-5.1.al7
    
    telepathy-filesystem
    
    0.0.2-6.1.al7
    
    telepathy-gabble
    
    0.18.1-4.1.al7
    
    telepathy-glib
    
    0.24.1-1.1.al7
    
    telepathy-haze
    
    0.8.0-1.1.al7
    
    telepathy-logger
    
    0.8.0-5.1.al7
    
    telepathy-mission-control
    
    5.16.3-3.1.al7
    
    telepathy-salut
    
    0.8.1-6.1.al7
    
    tn5250
    
    0.17.4-10.1.al7
    
    tncfhh
    
    0.8.3-16.1.al7
    
    tomcat
    
    7.0.76-16.1.al7
    
    txw2
    
    20110809-8.1.al7
    
    unique3
    
    3.0.2-8.1.al7
    
    unoconv
    
    0.6-8.1.al7
    
    uriparser
    
    0.7.5-10.2.al7
    
    urw-fonts
    
    2.4-16.1.al7
    
    vemana2000-fonts
    
    1.1.3-6.1.al7
    
    vigra
    
    1.9.0-11.1.al7
    
    virtuoso-opensource
    
    6.1.6-7.1.al7
    
    vlgothic-fonts
    
    20130607-2.1.al7
    
    vte3
    
    0.36.5-1.1.al7
    
    vulkan
    
    1.1.97.0-1.1.al7
    
    webkitgtk3
    
    2.4.11-2.1.al7
    
    webkitgtk4
    
    2.28.2-3.1.al7
    
    woodstox-core
    
    4.1.2-8.1.al7
    
    wordnet
    
    3.0-21.1.al7
    
    wqy-zenhei-fonts
    
    0.9.46-11.1.al7
    
    ws-commons-util
    
    1.0.1-29.1.al7
    
    ws-jaxme
    
    0.5.2-10.1.al7
    
    wsdl4j
    
    1.6.3-3.1.al7
    
    wvdial
    
    1.61-9.1.al7
    
    x86info
    
    1.30-6.1.al7
    
    xchat
    
    2.8.8-25.1.al7
    
    xerces-c
    
    3.1.1-10.1.al7
    
    xferstats
    
    2.16-28.1.al7
    
    xguest
    
    1.0.10-32.1.al7
    
    xhtml2fo-style-xsl
    
    20051222-9.1.al7
    
    xml-commons-apis12
    
    1.2.04-10.1.al7
    
    xml-stylebook
    
    1.0-0.14.b3\_xalan2.svn313293.1.al7
    
    xmlrpc
    
    3.1.3-9.1.al7
    
    xorg-x11-drv-keyboard
    
    1.9.0-1.2.al7
    
    xorg-x11-drv-mouse
    
    1.9.2-2.1.al7
    
    xorg-x11-drv-openchrome
    
    0.5.0-3.2.al7
    
    xorg-x11-drv-synaptics
    
    1.9.0-2.1.al7
    
    xorg-x11-drv-vmmouse
    
    13.1.0-1.1.al7.1
    
    xorg-x11-drv-void
    
    1.4.1-2.1.al7.1
    
    xorriso
    
    1.4.8-3.1.al7
    
    xpp3
    
    1.1.3.8-11.1.al7
    
    xsane
    
    0.999-9.1.al7
    
    xsettings-kde
    
    0.12.3-7.1.al7
    
    xstream
    
    1.3.1-16.1.al7
    
    xulrunner
    
    31.6.0-2.3.al7
    
    xvattr
    
    1.3-27.1.al7
    
    yum
    
    3.4.3-168.1.al7
    
    yum-langpacks
    
    0.4.2-7.1.al7
    
    yum-metadata-parser
    
    1.1.4-10.1.al7
    
    yum-rhn-plugin
    
    2.0.1-10.1.al7
    
    yum-utils
    
    1.1.31-54.1.al7
    
-   Changed packages
    
    A changed software package is a software package that is changed in Alibaba Cloud Linux 3, compared with Alibaba Cloud Linux 2.
    
    **Software package name**
    
    **Alibaba Cloud Linux 2 release**
    
    **Alibaba Cloud Linux 3 release**
    
    389-ds-base
    
    1.3.11.1-3.1.al7
    
    1.4.3.35-2.0.1.al8
    
    abattis-cantarell-fonts
    
    0.0.25-1.1.al7
    
    0.301-4.al8
    
    abrt
    
    2.1.11-60.1.al7
    
    2.10.9-24.0.1.al8
    
    abrt-java-connector
    
    1.0.6-12.1.al7
    
    1.1.0-16.3.al8
    
    accountsservice
    
    0.6.50-7.1.al7
    
    0.6.55-10.al8
    
    acl
    
    2.2.51-15.1.al7
    
    2.2.53-1.2.al8
    
    acpica-tools
    
    20160527-3.1.al7
    
    20190509-5.3.al8.alnx
    
    acpid
    
    2.0.19-9.1.al7
    
    2.0.32-6.0.1.al8
    
    adcli
    
    0.8.1-16.1.al7.1
    
    0.9.2-1.0.1.al8
    
    adobe-mappings-cmap
    
    20171205-3.1.al7
    
    20171205-12.al8
    
    adobe-mappings-pdf
    
    20180407-1.1.al7
    
    20180407-10.al8
    
    adwaita-icon-theme
    
    3.28.0-1.1.al7
    
    40.1.1-3.al8
    
    adwaita-qt
    
    1.0-1.1.al7
    
    1.4.1-3.al8
    
    aide
    
    0.15.1-13.1.al7.1
    
    0.16-100.al8
    
    alinux-logos
    
    70.0.6-3.8.al7
    
    82.0-1.1.al8
    
    alinux-release
    
    2.1903-11.al7
    
    3-1.7.al8
    
    alsa-firmware
    
    1.0.28-2.1.al7
    
    1.2.4-6.0.1.al8
    
    alsa-lib
    
    1.1.8-1.1.al7
    
    1.2.8-3.al8
    
    alsa-plugins
    
    1.1.6-1.1.al7
    
    1.2.7.1-1.al8
    
    alsa-tools
    
    1.1.0-1.4.al7
    
    1.2.2-6.al8
    
    alsa-utils
    
    1.1.8-2.1.al7
    
    1.2.8-1.0.1.al8
    
    amanda
    
    3.3.3-22.1.al7
    
    3.5.1-13.2.al8
    
    anaconda
    
    21.48.22.159-1.1.al7
    
    33.16.7.12-1.0.4.al8
    
    anaconda-user-help
    
    7.5.3-1.1.al7
    
    8.8.3-1.0.1.al8
    
    ant
    
    1.9.4-2.1.al7
    
    1.10.5-1.1.al8
    
    ant-contrib
    
    1.0-0.23.b3.2.al7
    
    1.0-0.32.b3.1.al8
    
    antlr
    
    2.7.7-30.2.al7
    
    2.7.7-56.2.al8
    
    aopalliance
    
    1.0-8.2.al7
    
    1.0-20.al8
    
    apache-commons-beanutils
    
    1.8.3-15.1.al7
    
    1.9.3-4.1.al8
    
    apache-commons-cli
    
    1.2-13.1.al7
    
    1.4-7.al8
    
    apache-commons-codec
    
    1.8-7.2.al7
    
    1.13-3.al8
    
    apache-commons-collections
    
    3.2.1-22.4.al7
    
    3.2.2-10.1.al8
    
    apache-commons-compress
    
    1.5-4.2.al7
    
    1.20-3.1.al8
    
    apache-commons-exec
    
    1.1-11.2.al7
    
    1.3-8.1.al8
    
    apache-commons-io
    
    2.4-12.1.al7
    
    2.6-6.al8
    
    apache-commons-jxpath
    
    1.3-20.2.al7
    
    1.3-36.1.al8
    
    apache-commons-lang
    
    2.6-15.2.al7
    
    2.6-21.1.al8
    
    apache-commons-lang3
    
    3.1-9.2.al7
    
    3.9-4.al8
    
    apache-commons-logging
    
    1.1.2-7.2.al7
    
    1.2-13.2.al8
    
    apache-commons-net
    
    3.2-8.1.al7
    
    3.6-5.1.al8
    
    apache-commons-parent
    
    26-8.2.al7
    
    43-2.1.al8
    
    apache-ivy
    
    2.3.0-4.2.al7
    
    2.4.0-14.1.al8
    
    apache-parent
    
    10-14.2.al7
    
    19-2.1.al8
    
    apache-resource-bundles
    
    2-11.2.al7
    
    2-20.1.al8
    
    appstream-data
    
    7-20180614.1.al7
    
    9-20220302.al8.1
    
    apr
    
    1.4.8-7.1.al7
    
    1.7.0-11.0.1.al8
    
    apr-util
    
    1.5.2-6.2.al7.1
    
    1.6.1-6.2.al8.1
    
    aqute-bnd
    
    0.0.363-11.2.al7
    
    3.5.0-4.1.al8
    
    arpwatch
    
    2.1a15-36.1.al7
    
    2.1a15-44.1.al8
    
    asciidoc
    
    8.6.8-5.2.al7
    
    9.1.0-3.al8
    
    aspell
    
    0.60.6.1-9.2.al7
    
    0.60.8-8.al8
    
    at
    
    3.1.13-24.1.al7
    
    3.1.20-12.0.1.al8
    
    at-spi2-atk
    
    2.26.2-1.1.al7
    
    2.38.0-4.al8
    
    at-spi2-core
    
    2.28.0-1.1.al7
    
    2.40.3-1.al8
    
    atinject
    
    1-13.20100611svn86.2.al7
    
    1-31.20100611svn86.al8
    
    atk
    
    2.28.1-2.1.al7
    
    2.36.0-5.0.1.al8
    
    atkmm
    
    2.24.2-1.1.al7
    
    2.24.2-7.1.al8
    
    atlas
    
    3.10.1-12.1.al7
    
    3.10.3-8.1.al8
    
    attr
    
    2.4.46-13.1.al7
    
    2.4.48-3.2.al8
    
    audit
    
    2.8.5-4.1.al7
    
    3.0.7-4.0.1.al8
    
    augeas
    
    1.4.0-10.1.al7
    
    1.13.0-3.al8
    
    authd
    
    1.4.3-42.2.al7
    
    1.4.4-5.2.al8.1
    
    autoconf
    
    2.69-11.2.al7
    
    2.69-29.0.1.al8
    
    autoconf-archive
    
    2017.03.21-1.1.al7
    
    2019.01.06-9.al8
    
    autoconf213
    
    2.13-31.1.al7
    
    2.13-39.1.al8
    
    autofs
    
    5.0.7-116.1.al7.1
    
    5.1.4-102.0.1.al8.2
    
    autogen
    
    5.18-5.1.al7
    
    5.18.12-8.1.al8
    
    automake
    
    1.13.4-3.2.al7
    
    1.16.2-6.0.2.al8
    
    autotrace
    
    0.31.1-38.1.al7
    
    0.31.1-55.al8
    
    avahi
    
    0.6.31-20.1.al7
    
    0.7-20.1.al8
    
    babel
    
    0.9.6-8.2.al7
    
    2.5.1-7.0.1.al8
    
    babl
    
    0.1.10-10.1.al7
    
    0.1.86-4.al8
    
    bacula
    
    5.2.13-23.1.2.al7
    
    11.0.1-5.al8
    
    baobab
    
    3.28.0-2.1.al7
    
    3.28.0-4.1.al8
    
    basesystem
    
    10.0-7.2.al7
    
    11-5.1.al8
    
    bash
    
    4.2.46-35.1.al7
    
    4.4.20-4.al8
    
    bash-completion
    
    2.1-8.1.al7
    
    2.7-5.1.al8
    
    batik
    
    1.8-0.12.svn1230816.2.al7
    
    1.11-6.1.al8
    
    bc
    
    1.06.95-13.2.al7
    
    1.07.1-5.2.al8
    
    bcc
    
    0.8.0-1.1.al7
    
    0.19.0-5.0.2.al8
    
    bcel
    
    5.2-18.1.al7
    
    6.2-2.1.al8
    
    bea-stax
    
    1.2.0-9.2.al7
    
    1.2.0-16.1.al8
    
    beust-jcommander
    
    1.30-5.1.al7
    
    1.71-5.1.al8
    
    bind
    
    9.11.4-26.P2.6.al7.13
    
    9.11.36-8.al8.1
    
    bind-dyndb-ldap
    
    11.1-7.1.al7
    
    11.6-4.0.1.al8
    
    binutils
    
    2.27-44.base.1.al7.1
    
    2.35-12.2.al8
    
    biosdevname
    
    0.7.3-2.1.al7
    
    0.7.3-2.2.al8
    
    bison
    
    3.0.4-2.1.al7
    
    3.7.4-5.al8
    
    bitmap-fonts
    
    0.3-21.1.al7
    
    0.3-28.1.al8
    
    blktrace
    
    1.0.5-9.2.al7
    
    1.2.0-10.2.al8
    
    bluez
    
    5.44-7.1.al7
    
    5.63-1.0.1.al8
    
    bogofilter
    
    1.2.5-1.1.al7
    
    1.2.5-2.1.al8
    
    bolt
    
    0.7-1.1.al7
    
    0.9.1-1.1.al8
    
    boost
    
    1.53.0-28.1.al7
    
    1.66.0-13.0.1.al8
    
    bpg-fonts
    
    20120413-3.2.al7
    
    20120413-11.1.al8
    
    brasero
    
    3.12.2-5.1.al7.1
    
    3.12.2-19.al8
    
    brltty
    
    4.5-16.2.al7
    
    6.3-4.1.al8
    
    bsf
    
    2.4.0-19.2.al7
    
    2.4.0-32.1.al8
    
    bsh
    
    1.3.0-29.2.al7
    
    2.0-13.b6.1.al8
    
    byacc
    
    1.9.20130304-3.1.al7
    
    2.0.20210109-4.al8
    
    byaccj
    
    1.15-8.1.al7
    
    1.15-17.1.al8
    
    byteman
    
    2.1.4.1-3.1.al7
    
    4.0.4-2.1.al8
    
    bzip2
    
    1.0.6-13.2.al7
    
    1.0.6-26.2.al8
    
    c-ares
    
    1.10.0-3.2.al7.1
    
    1.13.0-6.al8.2
    
    ca-certificates
    
    2022.2.54-74.1.al7
    
    2023.2.60\_v7.0.306-80.0.al8
    
    cachefilesd
    
    0.10.9-1.4.al7
    
    0.10.10-4.2.al8
    
    cairo
    
    1.15.12-4.1.al7
    
    1.17.4-7.al8
    
    cairomm
    
    1.12.0-1.1.al7
    
    1.12.0-8.1.al8
    
    cal10n
    
    0.7.7-4.1.al7
    
    0.8.1-7.1.al8
    
    cdi-api
    
    1.0-11.SP4.2.al7
    
    2.0.1-3.al8
    
    cdparanoia
    
    10.2-17.1.al7
    
    10.2-27.2.al8
    
    cdrdao
    
    1.2.3-20.1.al7
    
    1.2.3-32.2.al8
    
    cdrkit
    
    1.1.11-25.1.al7
    
    1.1.11-39.2.al8
    
    celt051
    
    0.5.1.3-8.1.al7
    
    0.5.1.3-15.2.al8
    
    certmonger
    
    0.78.4-17.1.al7
    
    0.79.17-2.0.1.al8
    
    cgdcbxd
    
    1.0.2-7.4.al7
    
    1.0.2-9.2.al8
    
    cglib
    
    2.2-18.2.al7
    
    3.2.4-7.1.al8
    
    check
    
    0.9.9-5.2.al7
    
    0.15.2-6.al8
    
    checkpolicy
    
    2.5-8.1.al7
    
    2.9-1.2.al8
    
    cheese
    
    3.28.0-1.1.al7
    
    3.38.0-6.0.2.al8
    
    chkconfig
    
    1.7.6-1.1.al7
    
    1.19.1-1.al8
    
    chrome-gnome-shell
    
    10.1-4.1.al7
    
    10.1-7.1.al8
    
    chrony
    
    3.4-1.1.al7
    
    4.2-1.0.1.al8
    
    chrpath
    
    0.16-0.1.al7
    
    0.16-7.2.al8
    
    cifs-utils
    
    6.2-10.1.al7
    
    7.0-1.0.1.al8
    
    cim-schema
    
    2.33.0-6.1.al7
    
    2.43.0-8.1.al8
    
    clevis
    
    7-8.1.al7
    
    18-110.al8
    
    cloud-init
    
    19.1.17-1.0.1.al7
    
    19.1.17-1.0.1.al8
    
    cloud-utils-growpart
    
    0.29-5.1.al7
    
    0.33-0.0.1.al8
    
    clucene
    
    2.3.3.4-11.2.al7
    
    2.3.3.4-31.20130812.e8e3d20git.2.al8
    
    clutter
    
    1.26.2-2.1.al7
    
    1.26.4-7.al8
    
    clutter-gst2
    
    2.0.18-1.1.al7
    
    2.0.18-5.2.al8
    
    clutter-gst3
    
    3.0.26-1.1.al7
    
    3.0.27-7.al8
    
    clutter-gtk
    
    1.8.4-1.1.al7
    
    1.8.4-3.2.al8
    
    cmake
    
    2.8.12.2-2.4.al7
    
    3.20.2-5.al8
    
    cockpit
    
    195.1-1.2.al7
    
    286.1-1.0.1.al8
    
    codemodel
    
    2.6-9.2.al7
    
    2.6-24.1.al8
    
    cogl
    
    1.22.2-2.1.al7
    
    1.22.8-5.al8
    
    color-filesystem
    
    1-13.2.al7
    
    1-20.1.al8
    
    colord
    
    1.3.4-2.1.al7
    
    1.4.5-4.0.1.al8
    
    colord-gtk
    
    0.1.25-4.2.al7
    
    0.2.0-7.al8
    
    compat-exiv2-026
    
    0.26-3.1.al7
    
    0.26-7.0.1.al8
    
    compat-libtiff3
    
    3.9.4-12.1.al7
    
    3.9.4-13.2.al8
    
    conntrack-tools
    
    1.4.4-7.1.al7
    
    1.4.4-11.0.1.al8
    
    convmv
    
    1.15-2.2.al7
    
    2.05-11.al8
    
    copy-jdk-configs
    
    3.3-11.1.al7
    
    4.0-3.al8
    
    coreutils
    
    8.22-24.1.al7
    
    8.30-15.al8
    
    corosync
    
    2.4.5-7.1.al7.1
    
    3.1.7-1.al8
    
    cpio
    
    2.11-28.1.al7
    
    2.12-11.0.1.al8
    
    cppunit
    
    1.12.1-11.2.al7
    
    1.14.0-4.1.al8
    
    cracklib
    
    2.9.0-11.2.al7
    
    2.9.6-15.2.al8
    
    crash
    
    7.2.3-10.2.al7
    
    8.0.2-2.0.2.al8
    
    crash-gcore-command
    
    1.3.1-0.2.al7
    
    1.6.3-3.0.1.al8
    
    crash-ptdump-command
    
    1.0.3-3.1.al7
    
    1.0.7-2.0.1.al8
    
    crash-trace-command
    
    2.0-14.1.al7
    
    3.0-6.0.1.al8
    
    crda
    
    3.18\_2018.05.31-4.1.al7
    
    3.18\_2020.04.29-1.1.al8
    
    criu
    
    3.12-2.1.al7
    
    3.15-4.0.1.al8
    
    cronie
    
    1.4.11-25.1.al7
    
    1.5.2-8.al8
    
    crontabs
    
    1.11-6.20121102git.1.al7
    
    1.11-17.20190603git.1.al8
    
    cryptsetup
    
    2.0.3-6.1.al7
    
    2.3.7-5.0.1.al8
    
    cscope
    
    15.8-10.1.al7
    
    15.9-17.0.1.al8
    
    ctags
    
    5.8-13.2.al7
    
    5.8-23.0.1.al8
    
    culmus-fonts
    
    0.130-3.1.al7
    
    0.133-1.al8
    
    cups
    
    1.6.3-52.1.al7
    
    2.2.6-52.0.1.al8
    
    cups-filters
    
    1.0.35-29.1.al7
    
    1.20.0-29.0.1.al8.2
    
    cups-pk-helper
    
    0.2.6-2.1.al7
    
    0.2.6-5.2.al8
    
    curl
    
    7.29.0-59.1.al7.1
    
    7.61.1-31.0.3.al8.2
    
    custodia
    
    0.3.1-4.1.al7
    
    0.6.0-3.1.al8
    
    cyrus-imapd
    
    2.4.17-15.1.al7
    
    3.0.7-24.1.al8
    
    cyrus-sasl
    
    2.1.26-24.1.al7
    
    2.1.27-6.0.1.al8
    
    Cython
    
    0.19-5.1.al7
    
    0.28.1-7.1.al8
    
    dblatex
    
    0.3.4-11.2.al7
    
    0.3.10-8.1.al8
    
    dbus
    
    1.10.24-15.1.al7
    
    1.12.8-25.0.1.al8
    
    dbus-glib
    
    0.100-7.1.al7
    
    0.110-2.2.al8
    
    dbus-python
    
    1.1.1-9.2.al7
    
    1.2.4-15.2.al8
    
    dbxtool
    
    7-1.1.al7
    
    8-5.3.al8.2
    
    dconf
    
    0.28.0-4.1.al7
    
    0.28.0-4.1.al8
    
    dconf-editor
    
    3.28.0-1.1.al7
    
    3.28.0-1.2.al8
    
    dcraw
    
    9.19-6.2.al7
    
    9.28.0-13.al8
    
    dejagnu
    
    1.5.1-3.2.al7
    
    1.6.1-2.1.al8
    
    dejavu-fonts
    
    2.33-6.2.al7
    
    2.35-7.1.al8
    
    desktop-file-utils
    
    0.23-2.1.al7
    
    0.26-6.al8
    
    devhelp
    
    3.28.1-1.1.al7
    
    40.1-1.al8
    
    device-mapper-multipath
    
    0.4.9-136.1.al7
    
    0.8.4-37.0.1.al8
    
    device-mapper-persistent-data
    
    0.8.5-3.1.al7.2
    
    0.9.0-7.0.1.al8
    
    dhcp
    
    4.2.5-83.1.al7.1
    
    4.3.6-49.0.1.al8
    
    dialog
    
    1.2-5.20130523.1.al7
    
    1.3-13.20171209.2.al8
    
    diffstat
    
    1.57-4.2.al7
    
    1.64-6.al8
    
    diffutils
    
    3.3-6.1.al7
    
    3.6-6.1.al8
    
    ding-libs
    
    0.6.1-32.1.al7
    
    0.6.1-40.al8
    
    dleyna-connector-dbus
    
    0.2.0-2.1.al7
    
    0.3.0-2.2.al8
    
    dleyna-core
    
    0.5.0-1.1.al7
    
    0.6.0-3.1.al8
    
    dleyna-server
    
    0.5.0-3.1.al7
    
    0.6.0-3.1.al8
    
    dlm
    
    4.0.7-1.1.al7
    
    4.1.0-1.1.al8
    
    dmidecode
    
    3.2-5.1.al7
    
    3.3-5.0.2.al8
    
    dnsmasq
    
    2.76-17.1.al7.3
    
    2.79-27.al8
    
    dnssec-trigger
    
    0.11-22.4.al7
    
    0.15-4.2.al8
    
    docbook-dtds
    
    1.0-60.2.al7
    
    1.0-69.1.al8
    
    docbook-style-dsssl
    
    1.79-18.2.al7
    
    1.79-25.1.al8
    
    docbook-style-xsl
    
    1.78.1-3.1.al7
    
    1.79.2-9.1.al8
    
    docbook-utils
    
    0.6.14-36.2.al7
    
    0.6.14-44.1.al8
    
    docbook5-schemas
    
    5.0-10.2.al7
    
    5.1-5.al8
    
    dos2unix
    
    6.0.3-7.1.al7
    
    7.4.0-3.2.al8
    
    dosfstools
    
    3.0.20-10.1.al7
    
    4.1-6.2.al8
    
    dotconf
    
    1.3-8.2.al7
    
    1.3-18.2.al8
    
    dovecot
    
    2.2.36-8.1.al7
    
    2.3.16-3.al8
    
    doxygen
    
    1.8.5-4.1.al7
    
    1.8.14-12.1.al8
    
    dpdk
    
    18.11.8-2.1.al7
    
    21.11-3.al8
    
    dracut
    
    033-572.1.al7.alnx
    
    049-223.git20230119.al8
    
    dropwatch
    
    1.4-9.1.al7
    
    1.5-1.2.al8
    
    dump
    
    0.4-0.23.b44.1.al7
    
    0.4-0.36.b46.2.al8
    
    dvd+rw-tools
    
    7.1-15.2.al7
    
    7.1-27.2.al8
    
    dwz
    
    0.11-3.2.al7
    
    0.14-3.al8
    
    dyninst
    
    9.3.1-3.1.al7
    
    12.1.0-1.al8
    
    e2fsprogs
    
    1.43.5-8.4.al7
    
    1.46.0-1.0.1.al8
    
    easymock
    
    1.2-22.1.al7
    
    3.5-4.1.al8
    
    ed
    
    1.9-4.2.al7
    
    1.14.2-4.2.al8
    
    efibootmgr
    
    17-2.1.al7
    
    16-1.2.al8
    
    efivar
    
    36-12.1.al7
    
    37-4.1.al8
    
    elfutils
    
    0.176-5.1.al7
    
    0.188-3.0.1.al8
    
    elinks
    
    0.12-0.37.pre6.1.al7
    
    0.12-0.58.pre6.al8
    
    emacs
    
    24.3-23.2.al7
    
    27.2-8.0.3.al8.1
    
    enchant
    
    1.6.0-8.2.al7
    
    1.6.0-21.3.al8
    
    enscript
    
    1.6.6-7.1.al7
    
    1.6.6-17.2.al8
    
    environment-modules
    
    3.2.10-10.2.al7
    
    4.5.2-3.0.1.al8
    
    eog
    
    3.28.3-1.1.al7
    
    40.3-2.0.2.al8
    
    epel-aliyuncs-release
    
    7-14.1.al7
    
    8-15.1.al8
    
    esc
    
    1.1.0-44.1.al7
    
    1.1.2-24.al8
    
    ethtool
    
    4.8-10.1.al7
    
    5.13-2.al8
    
    evince
    
    3.28.2-10.1.al7
    
    40.5-2.al8
    
    evolution
    
    3.28.5-10.1.al7
    
    3.40.4-9.0.1.al8
    
    evolution-data-server
    
    3.28.5-5.1.al7.1
    
    3.40.4-6.0.2.al8
    
    evolution-ews
    
    3.28.5-8.1.al7
    
    3.40.4-1.al8
    
    evolution-mapi
    
    3.28.3-2.1.al7
    
    3.40.1-5.al8
    
    exec-maven-plugin
    
    1.2.1-13.2.al7
    
    1.6.0-3.1.al8
    
    exempi
    
    2.2.0-9.1.al7
    
    2.6.0-0.2.20211007gite23c213.al8
    
    exiv2
    
    0.27.0-4.1.al7
    
    0.27.5-2.al8
    
    expat
    
    2.1.0-15.1.al7
    
    2.2.5-11.al8
    
    expect
    
    5.45-14.2.al7
    
    5.45.4-5.2.al8
    
    fabtests
    
    1.7.2-1.1.al7
    
    1.17.0-2.0.1.al8
    
    farstream02
    
    0.2.3-3.2.al7
    
    0.2.8-2.2.al8
    
    fcoe-utils
    
    1.0.32-2.1.al7
    
    1.0.33-4.git848bcc6.0.1.al8
    
    felix-osgi-compendium
    
    1.4.0-19.2.al7
    
    1.4.0-26.1.al8
    
    felix-osgi-core
    
    1.4.0-15.2.al7
    
    1.4.0-23.1.al8
    
    felix-osgi-foundation
    
    1.2.0-16.1.al7
    
    1.2.0-23.1.al8
    
    felix-parent
    
    1.2.1-15.1.al7
    
    4-5.1.al8
    
    felix-utils
    
    1.2.0-5.2.al7
    
    1.10.4-2.1.al8
    
    fence-agents
    
    4.2.1-41.1.al7.6
    
    4.10.0-43.0.1.al8
    
    fence-virt
    
    0.3.2-16.2.al7
    
    1.0.0-2.0.1.al8
    
    fetchmail
    
    6.3.24-7.1.al7
    
    6.4.24-1.0.1.al8
    
    fftw
    
    3.3.3-8.2.al7
    
    3.3.8-12.al8
    
    file
    
    5.11-37.1.al7
    
    5.33-24.al8
    
    file-roller
    
    3.28.1-2.1.al7
    
    3.28.1-4.0.2.al8
    
    filesystem
    
    3.2-25.1.al7
    
    3.8-6.0.1.al8
    
    findutils
    
    4.5.11-6.1.al7
    
    4.6.0-20.2.al8
    
    fio
    
    3.7-1.2.al7
    
    3.34-1.al8
    
    fipscheck
    
    1.4.1-6.1.al7
    
    1.5.0-4.2.al8
    
    firewalld
    
    0.6.3-13.1.al7
    
    0.9.3-13.0.1.al8
    
    flac
    
    1.3.0-5.1.al7
    
    1.3.3-11.al8
    
    flatpak
    
    1.0.9-12.1.al7
    
    1.10.7-1.al8
    
    flex
    
    2.5.37-6.1.al7
    
    2.6.4-9.al8
    
    flite
    
    1.3-22.2.al7
    
    1.3-31.2.al8
    
    fltk
    
    1.3.4-3.1.al7
    
    1.3.4-5.2.al8
    
    flute
    
    1.3.0-11.OOo31.1.al7
    
    1.3.0-18.OOo31.1.al8
    
    fontawesome-fonts
    
    4.1.0-2.1.al7
    
    4.7.0-4.1.al8
    
    fontconfig
    
    2.13.0-4.3.1.al7
    
    2.13.1-4.al8
    
    fontforge
    
    20120731b-13.1.al7
    
    20200314-5.2.0.2.al8
    
    fontpackages
    
    1.44-8.2.al7
    
    1.44-22.1.al8
    
    fonts-tweak-tool
    
    0.3.2-5.1.al7
    
    0.4.5-3.2.al8
    
    foomatic
    
    4.0.9-10.1.al7
    
    4.0.12-23.2.al8
    
    foomatic-db
    
    4.0-41.20130911.1.al7
    
    4.0-57.20180102.1.al8
    
    forge-parent
    
    31-2.2.al7
    
    38-11.1.al8
    
    fprintd
    
    0.8.1-2.1.al7
    
    1.94.0-3.al8
    
    freeglut
    
    3.0.0-8.1.al7
    
    3.2.1-9.al8
    
    freeipmi
    
    1.5.7-3.1.al7
    
    1.6.9-1.0.1.al8
    
    freeradius
    
    3.0.13-15.1.al7
    
    3.0.20-14.al8
    
    freerdp
    
    2.1.1-5.1.al7
    
    2.2.0-10.0.1.al8
    
    freetype
    
    2.8-14.1.al7.1
    
    2.10.4-9.al8
    
    frei0r-plugins
    
    1.3-13.2.al7
    
    1.6.1-7.1.al8
    
    fribidi
    
    1.0.2-1.1.al7.1
    
    1.0.4-9.0.1.al8
    
    ftp
    
    0.17-67.4.al7
    
    0.17-78.2.al8
    
    fuse
    
    2.9.2-11.1.al7
    
    2.9.7-16.al8
    
    fusesource-pom
    
    1.9-7.1.al7
    
    1.11-3.1.al8
    
    fwupd
    
    1.0.8-5.1.al7
    
    1.7.8-1.0.1.al8
    
    fwupdate
    
    12-6.1.al7
    
    11-3.3.al8
    
    fxload
    
    2002\_04\_11-16.2.al7
    
    2008\_10\_13-10.2.al8
    
    gamin
    
    0.1.10-16.1.al7
    
    0.1.10-32.1.al8
    
    gavl
    
    1.4.0-4.2.al7
    
    1.4.0-12.2.al8
    
    gawk
    
    4.0.2-4.1.al7.1
    
    4.2.1-4.0.1.al8
    
    gc
    
    7.2d-7.2.al7
    
    8.0.4-7.0.1.al8
    
    gcab
    
    0.7-4.1.al7
    
    1.4-6.0.1.al8
    
    gcc
    
    4.8.5-44.1.al7
    
    10.2.1-3.5.al8
    
    GConf2
    
    3.2.6-8.1.al7
    
    3.2.6-22.2.al8
    
    gcr
    
    3.28.0-1.1.al7
    
    3.40.0-3.0.1.al8
    
    gd
    
    2.0.35-27.1.al7
    
    2.2.5-7.1.al8
    
    gdb
    
    7.6.1-120.1.al7
    
    9.2-7.1.0.4.al8
    
    gdbm
    
    1.10-8.1.al7
    
    1.18-2.0.1.al8
    
    gdisk
    
    0.8.10-3.1.al7
    
    1.0.7-5.al8
    
    gdk-pixbuf2
    
    2.36.12-3.1.al7
    
    2.42.6-3.0.1.al8
    
    gdm
    
    3.28.2-26.1.al7
    
    40.0-27.0.1.al8
    
    gedit
    
    3.28.1-3.1.al7
    
    40.0-6.0.1.al8
    
    gedit-plugins
    
    3.28.1-1.1.al7
    
    40.1-2.0.1.al8
    
    gegl
    
    0.2.0-19.1.al7.1
    
    0.2.0-39.1.al8
    
    geoclue2
    
    2.4.8-1.1.al7
    
    2.6.0-7.al8
    
    geocode-glib
    
    3.26.0-3.1.al7
    
    3.26.2-5.al8
    
    geoipupdate
    
    2.5.0-2.1.al7
    
    2.5.0-2.2.al8
    
    geronimo-annotation
    
    1.0-15.1.al7
    
    1.0-26.al8
    
    geronimo-jms
    
    1.1.1-19.1.al7
    
    1.1.1-25.1.al8
    
    geronimo-parent-poms
    
    1.6-16.1.al7
    
    1.6-25.1.al8
    
    gettext
    
    0.19.8.1-3.1.al7
    
    0.19.8.1-17.2.al8
    
    gfs2-utils
    
    3.1.10-11.1.al7.1
    
    3.2.0-11.0.1.al8
    
    ghostscript
    
    9.25-5.1.al7
    
    9.54.0-9.al8
    
    giflib
    
    4.1.6-9.1.al7
    
    5.2.1-9.al8
    
    gimp
    
    2.8.22-1.1.al7
    
    2.8.22-15.2.al8
    
    git
    
    1.8.3.1-25.1.al7
    
    2.39.3-1.1.al8
    
    gjs
    
    1.52.5-1.2.al7
    
    1.68.6-3.0.1.al8
    
    gl-manpages
    
    1.1-7.20130122.1.al7
    
    1.1-15.20161227.1.al8
    
    glade
    
    3.22.1-1.1.al7
    
    3.22.1-1.2.al8
    
    glassfish-el
    
    2.2.5-6.1.al7
    
    3.0.1-0.14.b08.1.al8
    
    glassfish-fastinfoset
    
    1.2.12-9.1.al7
    
    1.2.13-9.1.al8
    
    glassfish-jaxb
    
    2.2.5-6.1.al7
    
    2.2.11-11.1.al8
    
    glassfish-jaxb-api
    
    2.2.7-4.1.al7
    
    2.2.12-8.1.al8
    
    glassfish-jsp
    
    2.2.6-11.1.al7
    
    2.3.4-6.1.al8
    
    glassfish-jsp-api
    
    2.2.1-9.1.al7
    
    2.3.3-3.1.al8
    
    glew
    
    1.10.0-5.1.al7
    
    2.0.0-6.2.al8
    
    glib-networking
    
    2.56.1-1.1.al7
    
    2.56.1-1.1.2.al8
    
    glib2
    
    2.56.1-9.1.al7
    
    2.68.4-6.al8
    
    glibc
    
    2.17-325.2.al7
    
    2.32-1.12.al8
    
    glibmm24
    
    2.56.0-1.1.al7
    
    2.56.0-2.1.al8
    
    glm
    
    0.9.6.3-1.1.al7
    
    0.9.9.2-1.1.al8
    
    glusterfs
    
    6.0-61.1.al7
    
    6.0-61.3.0.1.al8
    
    gmp
    
    6.0.0-15.1.al7
    
    6.2.0-10.0.1.al8
    
    gnome-abrt
    
    0.3.4-9.1.al7
    
    1.2.6-6.1.al8
    
    gnome-backgrounds
    
    3.28.0-1.1.al7
    
    40.1-2.al8
    
    gnome-bluetooth
    
    3.28.2-1.1.al7
    
    3.34.3-1.1.al8
    
    gnome-boxes
    
    3.28.5-4.1.al7
    
    40.3-2.0.1.al8
    
    gnome-calculator
    
    3.28.2-1.1.al7
    
    3.28.2-2.0.1.al8
    
    gnome-color-manager
    
    3.28.0-1.1.al7
    
    3.36.0-7.0.1.al8
    
    gnome-common
    
    3.18.0-1.1.al7
    
    3.18.0-5.1.al8
    
    gnome-desktop3
    
    3.28.2-2.1.al7
    
    40.4-1.0.1.al8
    
    gnome-disk-utility
    
    3.28.3-1.1.al7
    
    40.2-2.1.al8
    
    gnome-font-viewer
    
    3.28.0-1.1.al7
    
    40.0-3.0.1.al8
    
    gnome-initial-setup
    
    3.28.0-2.1.al7
    
    40.4-3.0.1.al8
    
    gnome-keyring
    
    3.28.2-1.1.al7
    
    40.0-3.al8
    
    gnome-menus
    
    3.13.3-3.1.al7
    
    3.36.0-8.0.1.al8
    
    gnome-online-accounts
    
    3.28.2-1.1.al7
    
    3.40.0-2.0.1.al8
    
    gnome-online-miners
    
    3.26.0-1.1.al7
    
    3.26.0-3.2.al8
    
    gnome-screenshot
    
    3.26.0-1.1.al7
    
    40.0-4.al8
    
    gnome-session
    
    3.28.1-8.1.al7
    
    40.1.1-7.0.1.al8
    
    gnome-settings-daemon
    
    3.28.1-11.1.al7
    
    40.0.1-11.0.1.al8
    
    gnome-shell
    
    3.28.3-34.1.al7
    
    40.10-12.0.1.al8
    
    gnome-shell-extensions
    
    3.28.1-17.1.al7
    
    40.7-7.0.1.al8
    
    gnome-software
    
    3.28.2-3.1.al7
    
    3.36.1-11.0.1.al8
    
    gnome-system-monitor
    
    3.28.2-1.1.al7
    
    3.28.2-1.2.al8
    
    gnome-terminal
    
    3.28.2-3.1.al7
    
    3.28.3-3.1.al8
    
    gnome-themes-standard
    
    3.28-2.1.al7
    
    3.22.3-4.2.al8
    
    gnome-user-docs
    
    3.28.2-1.1.al7
    
    40.0-3.al8
    
    gnome-video-effects
    
    0.4.3-1.1.al7
    
    0.5.0-7.al8
    
    gnu-efi
    
    3.0.8-2.1.al7
    
    3.0.11-8.0.2.al8
    
    gnu-free-fonts
    
    20120503-8.1.al7
    
    20120503-18.1.al8.0.1
    
    gnupg2
    
    2.0.22-5.1.al7
    
    2.2.20-3.al8
    
    gnuplot
    
    4.6.2-3.1.al7
    
    5.2.4-3.al8
    
    gnutls
    
    3.3.29-9.1.al7
    
    3.6.16-6.0.1.al8
    
    gobject-introspection
    
    1.56.1-1.1.al7
    
    1.68.0-11.0.1.al8
    
    gom
    
    0.4-1.1.al7
    
    0.4-6.al8
    
    google-crosextra-caladea-fonts
    
    1.002-0.4.20130214.1.al7
    
    1.002-0.10.20130214.1.al8
    
    google-crosextra-carlito-fonts
    
    1.103-0.2.20130920.1.al7
    
    1.103-0.8.20130920.1.al8
    
    google-guice
    
    3.1.3-9.1.al7
    
    4.2.2-4.al8
    
    google-noto-emoji-fonts
    
    20180508-4.1.al7
    
    20211102-1.0.1.al8
    
    google-noto-fonts
    
    20141117-5.4.al7
    
    20181223-2.al8
    
    gperf
    
    3.0.4-8.1.al7
    
    3.1-5.1.al8
    
    gpgme
    
    1.3.2-5.1.al7
    
    1.13.1-11.0.1.al8
    
    gpm
    
    1.20.7-6.1.al7
    
    1.20.7-17.1.al8
    
    graphite2
    
    1.3.10-1.1.al7
    
    1.3.14-9.0.1.al8
    
    graphviz
    
    2.30.1-22.1.al7
    
    2.40.1-44.0.1.al8
    
    grep
    
    2.20-3.1.al7
    
    3.1-6.2.al8
    
    grilo
    
    0.3.6-1.1.al7
    
    0.3.13-7.0.1.al8
    
    grilo-plugins
    
    0.3.7-1.1.al7
    
    0.3.13-6.al8
    
    groff
    
    1.22.2-8.1.al7
    
    1.22.3-18.2.al8
    
    grub2
    
    2.02-0.87.1.al7.alnx
    
    2.02-148.0.1.al8.1
    
    grubby
    
    8.28-26.2.al7
    
    8.40-47.0.1.al8
    
    gsettings-desktop-schemas
    
    3.28.0-3.1.al7
    
    40.0-6.0.1.al8
    
    gsl
    
    1.15-13.1.al7
    
    2.6-7.0.1.al8
    
    gsm
    
    1.0.13-11.1.al7
    
    1.0.19-6.al8
    
    gsound
    
    1.0.2-2.1.al7
    
    1.0.2-6.2.al8
    
    gspell
    
    1.6.1-1.1.al7
    
    1.9.1-3.al8
    
    gssdp
    
    1.0.2-1.1.al7
    
    1.0.5-1.1.al8
    
    gssproxy
    
    0.7.0-30.1.al7
    
    0.8.0-21.al8
    
    gstreamer1
    
    1.10.4-2.1.al7
    
    1.18.4-4.0.1.al8
    
    gstreamer1-plugins-bad-free
    
    1.10.4-3.1.al7
    
    1.18.4-6.0.1.al8
    
    gstreamer1-plugins-base
    
    1.10.4-2.1.al7
    
    1.18.4-5.1.al8
    
    gstreamer1-plugins-good
    
    1.10.4-2.1.al7
    
    1.16.1-3.al8
    
    gstreamer1-plugins-ugly-free
    
    1.10.4-3.1.al7
    
    1.16.1-1.1.al8
    
    gtk-doc
    
    1.28-2.1.al7
    
    1.33.2-5.0.1.al8
    
    gtk-vnc
    
    0.7.0-3.1.al7
    
    1.3.0-1.1.al8
    
    gtk2
    
    2.24.31-1.1.al7
    
    2.24.32-5.1.al8
    
    gtk3
    
    3.22.30-8.1.al7
    
    3.24.31-2.0.1.al8
    
    gtkmm24
    
    2.24.5-1.1.al7
    
    2.24.5-6.1.al8
    
    gtkmm30
    
    3.22.2-1.1.al7
    
    3.22.2-3.1.al8
    
    gtksourceview3
    
    3.24.8-2.1.al7
    
    3.24.9-1.2.al8
    
    gtkspell
    
    2.0.16-8.1.al7
    
    2.0.16-15.2.al8
    
    gtkspell3
    
    3.0.3-4.1.al7
    
    3.0.9-5.2.al8
    
    guava
    
    13.0-6.1.al7
    
    28.1-3.al8
    
    gubbi-fonts
    
    1.1-3.1.al7
    
    1.3-10.0.1.al8
    
    guile
    
    2.0.9-5.1.al7
    
    2.0.14-7.2.al8
    
    gupnp
    
    1.0.2-6.1.al7
    
    1.0.6-2.1.al8
    
    gupnp-av
    
    0.12.10-1.1.al7
    
    0.12.10-6.2.al8
    
    gupnp-dlna
    
    0.10.5-1.1.al7
    
    0.10.5-9.2.al8
    
    gupnp-igd
    
    0.2.5-2.1.al7
    
    0.2.5-4.2.al8
    
    gvfs
    
    1.36.2-7.1.al7
    
    1.48.1-4.0.3.al8
    
    gzip
    
    1.5-11.1.al7
    
    1.9-13.al8
    
    hamcrest
    
    1.3-6.1.al7
    
    1.3-29.1.al8
    
    haproxy
    
    1.5.18-9.1.al7
    
    2.4.17-6.0.1.al8
    
    hardlink
    
    1.0-19.1.al7
    
    1.3-6.2.al8
    
    harfbuzz
    
    1.7.5-2.1.al7
    
    2.7.4-8.0.1.al8
    
    hawtjni
    
    1.6-10.1.al7
    
    1.16-2.1.al8
    
    hdparm
    
    9.43-5.1.al7
    
    9.54-4.0.1.al8
    
    help2man
    
    1.41.1-3.1.al7
    
    1.48.2-3.al8
    
    hesiod
    
    3.2.1-3.1.al7
    
    3.2.1-11.2.al8
    
    hexedit
    
    1.2.13-5.1.al7
    
    1.6-1.al8
    
    hicolor-icon-theme
    
    0.12-7.1.al7
    
    0.17-2.1.al8
    
    highlight
    
    3.13-3.1.al7
    
    3.60-5.al8
    
    hivex
    
    1.3.10-6.12.1.al7
    
    1.3.18-23.0.1.al8
    
    hostname
    
    3.13-3.1.al7.1
    
    3.20-6.2.al8
    
    hplip
    
    3.15.9-5.1.al7
    
    3.18.4-9.2.al8
    
    hspell
    
    1.2-6.1.al7
    
    1.4-6.2.al8
    
    http-parser
    
    2.7.1-9.1.al7
    
    2.9.4-6.al8
    
    httpcomponents-client
    
    4.2.5-5.1.al7
    
    4.5.10-4.al8
    
    httpcomponents-core
    
    4.2.4-6.1.al7
    
    4.4.12-3.al8
    
    httpcomponents-project
    
    6-4.1.al7
    
    9-2.1.al8
    
    httpd
    
    2.4.6-99.1.al7.1
    
    2.4.37-56.0.1.al8.6
    
    hunspell
    
    1.3.2-16.1.al7
    
    1.7.0-11.al8
    
    hunspell-af
    
    0.20080825-8.1.al7
    
    0.20080825-16.1.al8
    
    hunspell-ak
    
    0.6-7.1.al7
    
    0.9.1-1.1.al8
    
    hunspell-am
    
    0.20090704-7.1.al7
    
    0.20090704-14.1.al8
    
    hunspell-ar
    
    0.20080110-10.1.al7
    
    3.5-7.1.al8
    
    hunspell-as
    
    1.0.3-9.1.al7
    
    1.0.3-17.1.al8
    
    hunspell-ast
    
    0.02-6.1.al7
    
    2.0-7.al8
    
    hunspell-az
    
    0.20040827-10.1.al7
    
    0.20040827-17.1.al8
    
    hunspell-be
    
    1.1-7.1.al7
    
    1.1-15.1.al8
    
    hunspell-ber
    
    0.20080210-8.1.al7
    
    0.20080210-15.1.al8
    
    hunspell-bg
    
    4.3-6.1.al7
    
    4.3-13.1.al8
    
    hunspell-bn
    
    0.06-4.1.al7
    
    1.0.0-9.1.al8
    
    hunspell-br
    
    0.8-5.1.al7
    
    0.15-1.1.al8
    
    hunspell-ca
    
    2.3-4.1.al7
    
    2.3-11.1.al8
    
    hunspell-cop
    
    0.3-5.1.al7
    
    0.3-13.1.al8
    
    hunspell-csb
    
    0.20050311-10.1.al7
    
    0.20050311-17.1.al8
    
    hunspell-cv
    
    1.02-6.1.al7
    
    1.06-1.1.al8
    
    hunspell-cy
    
    0.20040425-10.1.al7
    
    0.20040425-18.1.al8
    
    hunspell-da
    
    1.7.42-2.1.al7
    
    1.7.42-9.1.al8
    
    hunspell-de
    
    0.20120607-4.1.al7
    
    0.20161207-1.1.al8
    
    hunspell-dsb
    
    1.4.6-4.1.al7
    
    1.4.8-1.1.al8
    
    hunspell-el
    
    0.8-7.1.al7
    
    0.9-1.1.al8
    
    hunspell-en
    
    0.20121024-6.1.al7
    
    0.20140811.1-12.1.al8
    
    hunspell-eo
    
    1.0-0.7.dev.1.al7
    
    1.0-0.15.dev.1.al8
    
    hunspell-es
    
    0.6-4.1.al7
    
    2.3-10.al8
    
    hunspell-et
    
    0.20030606-11.1.al7
    
    0.20030606-19.1.al8
    
    hunspell-eu
    
    0.20080507-8.1.al7
    
    5.1-4.al8
    
    hunspell-fa
    
    0.20070116-9.1.al7
    
    0.20070116-16.1.al8
    
    hunspell-fj
    
    1.2-7.1.al7
    
    1.2-15.1.al8
    
    hunspell-fo
    
    0.4.1-4.1.al7
    
    0.4.2-8.1.al8
    
    hunspell-fr
    
    4.6-4.1.al7
    
    6.2-1.1.al8
    
    hunspell-fur
    
    0.20050912-9.1.al7
    
    0.20050912-16.1.al8
    
    hunspell-fy
    
    2.0.1-6.1.al7
    
    3.0.0-1.1.al8
    
    hunspell-ga
    
    4.6-7.1.al7
    
    5.0-1.1.al8
    
    hunspell-gd
    
    2.6-3.1.al7
    
    2.6-10.1.al8
    
    hunspell-gl
    
    0.20080515-8.1.al7
    
    0.20080515-16.1.al8
    
    hunspell-grc
    
    2.1.5-7.1.al7
    
    2.1.5-16.1.al8
    
    hunspell-gu
    
    20061015-11.1.al7
    
    1.0.0-9.1.al8
    
    hunspell-gv
    
    0.20040505-9.1.al7
    
    0.20040505-16.1.al8
    
    hunspell-haw
    
    0.02-4.1.al7
    
    0.03-1.1.al8
    
    hunspell-hi
    
    20050726-12.1.al7
    
    1.0.0-9.1.al8
    
    hunspell-hil
    
    0.14-6.1.al7
    
    0.14-14.1.al8
    
    hunspell-hr
    
    0.20040608-10.1.al7
    
    0.20040608-17.1.al8
    
    hunspell-hsb
    
    0.20060327.3-5.1.al7
    
    0.20060327.3-12.1.al8
    
    hunspell-ht
    
    0.06-6.1.al7
    
    0.06-13.1.al8
    
    hunspell-hu
    
    1.6.1-6.1.al7
    
    1.6.1-13.1.al8
    
    hunspell-hy
    
    0.20.0-6.1.al7
    
    0.20.0-13.1.al8
    
    hunspell-ia
    
    0.20050226-9.1.al7
    
    0.20050226-16.1.al8
    
    hunspell-id
    
    0.20040812-8.1.al7
    
    0.20040812-16.1.al8
    
    hunspell-is
    
    0.20090823-6.1.al7
    
    0.20090823-14.1.al8
    
    hunspell-it
    
    2.4-0.10.20070901.1.al7
    
    2.4-0.17.20070901.1.al8
    
    hunspell-kk
    
    1.1-6.1.al7
    
    1.1-14.1.al8
    
    hunspell-km
    
    1.1-7.1.al7
    
    1.82-1.1.al8
    
    hunspell-kn
    
    1.0.3-7.1.al7
    
    1.0.3-15.1.al8
    
    hunspell-ko
    
    0.5.5-5.1.al7
    
    0.7.0-5.1.al8
    
    hunspell-ku
    
    0.21-11.1.al7
    
    0.21-18.1.al8
    
    hunspell-ky
    
    0.20090415-8.1.al7
    
    0.20090415-15.1.al8
    
    hunspell-la
    
    0.20110807-6.1.al7
    
    0.20130331-11.1.al8
    
    hunspell-lb
    
    0.20121128-2.1.al7
    
    0.20121128-9.1.al8
    
    hunspell-ln
    
    0.02-7.1.al7
    
    0.02-14.1.al8
    
    hunspell-lt
    
    1.2.1-10.1.al7
    
    1.2.1-18.1.al8
    
    hunspell-mai
    
    1.0.1-7.1.al7
    
    1.0.1-15.1.al8
    
    hunspell-mg
    
    0.20050109-10.1.al7
    
    0.20050109-18.1.al8
    
    hunspell-mi
    
    0.20080630-8.1.al7
    
    0.20080630-16.1.al8
    
    hunspell-mk
    
    0.20051126-8.1.al7
    
    0.20051126-17.1.al8
    
    hunspell-ml
    
    0.1-10.1.al7
    
    0.1-18.1.al8
    
    hunspell-mn
    
    0.20080709-8.1.al7
    
    0.20080709-16.1.al8
    
    hunspell-mos
    
    0.20101130-6.1.al7
    
    0.20101130-13.1.al8
    
    hunspell-mr
    
    20060920-15.1.al7
    
    1.0.0-9.1.al8
    
    hunspell-ms
    
    0.20050117-9.1.al7
    
    0.20050117-17.1.al8
    
    hunspell-mt
    
    0.20020708-9.1.al7
    
    0.20110414-1.1.al8
    
    hunspell-nds
    
    0.1-8.1.al7
    
    0.1-15.1.al8
    
    hunspell-ne
    
    20080425-9.1.al7
    
    20080425-17.1.al8
    
    hunspell-nl
    
    2.10-5.1.al7
    
    2.20.19-5.al8
    
    hunspell-no
    
    2.0.10-1.4.al7
    
    2.0.10-7.1.al8
    
    hunspell-nr
    
    0.20091030-6.1.al7
    
    0.20091030-14.1.al8
    
    hunspell-nso
    
    0.20091201-6.1.al7
    
    0.20091201-14.1.al8
    
    hunspell-ny
    
    0.01-6.1.al7
    
    0.01-14.1.al8
    
    hunspell-oc
    
    0.5-8.1.al7
    
    0.6.2-1.1.al8
    
    hunspell-om
    
    0.04-6.1.al7
    
    0.04-15.1.al8
    
    hunspell-or
    
    0.03-4.1.al7
    
    1.0.0-9.1.al8
    
    hunspell-pa
    
    20050726-10.1.al7
    
    1.0.0-9.1.al8
    
    hunspell-pl
    
    0.20130130-2.1.al7
    
    0.20180707-1.1.al8
    
    hunspell-pt
    
    0.20130125-2.1.al7
    
    0.20130125-10.1.al8
    
    hunspell-qu
    
    0.9-5.1.al7
    
    0.9-13.1.al8
    
    hunspell-quh
    
    0.20110816-5.1.al7
    
    0.20110816-13.1.al8
    
    hunspell-ro
    
    3.3.7-5.1.al7
    
    3.3.7-12.1.al8
    
    hunspell-ru
    
    0.99g5-5.1.al7
    
    0.99g5-13.1.al8
    
    hunspell-rw
    
    0.20050109-8.1.al7
    
    0.20050109-16.1.al8
    
    hunspell-sc
    
    0.20081101-11.1.al7
    
    0.20081101-19.1.al8
    
    hunspell-se
    
    1.0-0.7.beta7.1.al7
    
    1.0-0.14.beta7.1.al8
    
    hunspell-shs
    
    0.20090828-6.1.al7
    
    0.20090828-13.1.al8
    
    hunspell-si
    
    0.2.1-9.1.al7
    
    0.2.1-16.1.al8
    
    hunspell-sk
    
    0.20110228-5.1.al7
    
    0.20110228-12.1.al8
    
    hunspell-sl
    
    0.20070127-10.1.al7
    
    0.20070127-18.1.al8
    
    hunspell-smj
    
    1.0-0.7.beta7.1.al7
    
    1.0-0.14.beta7.1.al8
    
    hunspell-so
    
    1.0.2-5.1.al7
    
    1.0.2-13.1.al8
    
    hunspell-sq
    
    1.6.4-5.1.al7
    
    1.6.4-12.1.al8
    
    hunspell-sr
    
    0.20100920-7.1.al7
    
    0.20130330-10.1.al8
    
    hunspell-ss
    
    0.20091030-6.1.al7
    
    0.20091030-14.1.al8
    
    hunspell-st
    
    0.20091030-6.1.al7
    
    0.20091030-14.1.al8
    
    hunspell-sv
    
    2.10-3.1.al7
    
    2.28-8.1.al8
    
    hunspell-sw
    
    0.20050819-9.1.al7
    
    0.20050819-17.1.al8
    
    hunspell-ta
    
    20100226-8.1.al7
    
    1.0.0-9.1.al8
    
    hunspell-te
    
    0.20050929-11.1.al7
    
    1.0.0-9.1.al8
    
    hunspell-tet
    
    0.20050108-10.1.al7
    
    0.20050108-18.1.al8
    
    hunspell-th
    
    0.20061212-10.1.al7
    
    0.20061212-18.1.al8
    
    hunspell-ti
    
    0.20090911-6.1.al7
    
    0.20090911-13.1.al8
    
    hunspell-tk
    
    0.02-4.1.al7
    
    0.02-12.1.al8
    
    hunspell-tl
    
    0.20050109-9.1.al7
    
    0.20050109-17.1.al8
    
    hunspell-tn
    
    0.20091101-6.1.al7
    
    0.20150904-1.1.al8
    
    hunspell-tpi
    
    0.05-5.1.al7
    
    0.07-10.1.al8
    
    hunspell-ts
    
    0.20091101-6.1.al7
    
    0.20110323.1-1.1.al8
    
    hunspell-uk
    
    1.6.5-5.1.al7
    
    1.8.0-1.1.al8
    
    hunspell-ur
    
    0.64-7.1.al7
    
    0.64-14.1.al8
    
    hunspell-uz
    
    0.6-8.1.al7
    
    0.6-16.1.al8
    
    hunspell-ve
    
    0.20091030-6.1.al7
    
    0.20091030-14.1.al8
    
    hunspell-vi
    
    0.20080604-8.1.al7
    
    0.20120418-1.1.al8
    
    hunspell-wa
    
    0.4.15-9.1.al7
    
    0.4.17-9.1.al8
    
    hunspell-xh
    
    0.20091030-6.1.al7
    
    0.20091030-14.1.al8
    
    hunspell-yi
    
    1.1-7.1.al7
    
    1.1-15.1.al8
    
    hunspell-zu
    
    0.20100126-8.1.al7
    
    0.20100126-16.1.al8
    
    hwdata
    
    0.252-9.7.1.al7
    
    0.314-8.16.al8
    
    hwloc
    
    1.11.8-4.1.al7
    
    2.2.0-3.al8
    
    hyperv-daemons
    
    0-0.34.20180415git.1.al7
    
    0-0.41.20190303git.0.1.al8
    
    hyphen
    
    2.8.6-5.1.al7
    
    2.8.8-9.2.al8
    
    hyphen-as
    
    0.7.0-4.1.al7
    
    0.7.0-11.1.al8
    
    hyphen-bg
    
    4.3-6.1.al7
    
    4.3-13.1.al8
    
    hyphen-bn
    
    0.7.0-4.1.al7
    
    0.7.0-11.1.al8
    
    hyphen-ca
    
    0.9.3-6.1.al7
    
    0.9.3-14.1.al8
    
    hyphen-cy
    
    0.20110620-5.1.al7
    
    0.20110620-12.1.al8
    
    hyphen-da
    
    0.20070903-8.1.al7
    
    0.20070903-17.1.al8
    
    hyphen-de
    
    0.20060120-11.1.al7
    
    0.20060120-19.1.al8
    
    hyphen-el
    
    0.20051018-9.1.al7
    
    0.20051018-17.1.al8
    
    hyphen-es
    
    0.20110222svn-4.1.al7
    
    2.3-2.1.al8
    
    hyphen-eu
    
    0.20110620-5.1.al7
    
    0.20190406-2.al8
    
    hyphen-fa
    
    0.20081119-7.1.al7
    
    0.20130404-9.1.al8
    
    hyphen-fo
    
    0.20040420-6.1.al7
    
    0.20040420-13.1.al8
    
    hyphen-fr
    
    2.0-8.1.al7
    
    3.0-10.al8
    
    hyphen-ga
    
    0.20040220-8.1.al7
    
    0.20040220-16.1.al8
    
    hyphen-gl
    
    0.99-7.1.al7
    
    0.99-15.1.al8
    
    hyphen-grc
    
    0.20110913-5.1.al7
    
    0.20110913-12.1.al8
    
    hyphen-gu
    
    0.7.0-4.1.al7
    
    0.7.0-11.1.al8
    
    hyphen-hi
    
    0.7.0-4.1.al7
    
    0.7.0-11.1.al8
    
    hyphen-hsb
    
    0.20110620-5.1.al7
    
    0.20110620-12.1.al8
    
    hyphen-hu
    
    0.20090612-10.1.al7
    
    0.20090612-19.1.al8
    
    hyphen-ia
    
    0.20050628-7.1.al7
    
    0.20050628-14.1.al8
    
    hyphen-id
    
    0.20040812-8.1.al7
    
    0.20040812-16.1.al8
    
    hyphen-is
    
    0.20030920-10.1.al7
    
    0.20030920-19.1.al8
    
    hyphen-it
    
    0.20071127-10.1.al7
    
    0.20071127-18.1.al8
    
    hyphen-kn
    
    0.7.0-4.1.al7
    
    0.7.0-11.1.al8
    
    hyphen-ku
    
    1.71.2-6.1.al7
    
    1.71.2-14.1.al8
    
    hyphen-lt
    
    0.20100531-6.1.al7
    
    0.20100531-13.1.al8
    
    hyphen-mi
    
    0.20080630-8.1.al7
    
    0.20080630-16.1.al8
    
    hyphen-ml
    
    0.7.0-4.1.al7
    
    0.7.0-11.1.al8
    
    hyphen-mn
    
    0.20100531-6.1.al7
    
    0.20100531-13.1.al8
    
    hyphen-mr
    
    0.7.0-4.1.al7
    
    0.7.0-11.1.al8
    
    hyphen-nl
    
    0.20050617-10.1.al7
    
    0.20050617-18.1.al8
    
    hyphen-or
    
    0.7.0-5.1.al7
    
    0.7.0-12.1.al8
    
    hyphen-pa
    
    0.7.0-4.1.al7
    
    0.7.0-11.1.al8
    
    hyphen-pl
    
    0.20060726-9.1.al7
    
    0.20060726-17.1.al8
    
    hyphen-pt
    
    0.20021021-9.1.al7
    
    0.20140727-3.al8
    
    hyphen-ro
    
    3.3.6-6.1.al7
    
    3.3.6-13.1.al8
    
    hyphen-ru
    
    0.20020727-9.1.al7
    
    0.20020727-17.1.al8
    
    hyphen-sa
    
    0.20110915-5.1.al7
    
    0.20110915-13.1.al8
    
    hyphen-sk
    
    0.20031227-10.1.al7
    
    0.20031227-18.1.al8
    
    hyphen-sl
    
    0.20070127-8.1.al7
    
    0.20070127-16.1.al8
    
    hyphen-sv
    
    1.00.1-10.1.al7
    
    1.00.1-18.1.al8
    
    hyphen-ta
    
    0.7.0-4.1.al7
    
    0.7.0-11.1.al8
    
    hyphen-te
    
    0.7.0-4.1.al7
    
    0.7.0-11.1.al8
    
    hyphen-tk
    
    0.20110620-5.1.al7
    
    0.20110620-12.1.al8
    
    hyphen-uk
    
    0.20030903-8.1.al7
    
    0.20030903-16.1.al8
    
    i2c-tools
    
    3.1.0-13.1.al7
    
    4.0-12.2.al8
    
    ibus
    
    1.5.17-14.1.al7
    
    1.5.19-14.0.1.al8
    
    ibus-hangul
    
    1.4.2-11.1.al7
    
    1.5.1-6.1.al8
    
    ibus-kkc
    
    1.5.18-7.4.al7
    
    1.5.22-9.2.al8
    
    ibus-libpinyin
    
    1.6.91-4.1.al7
    
    1.10.0-2.1.al8
    
    ibus-m17n
    
    1.3.4-13.1.al7
    
    1.3.4-26.2.al8
    
    ibus-sayura
    
    1.3.2-3.1.al7
    
    1.3.2-13.2.al8
    
    ibus-table
    
    1.5.0-5.1.al7
    
    1.9.18-6.1.al8
    
    ibus-table-chinese
    
    1.4.6-3.1.al7
    
    1.8.2-9.1.al8
    
    ibus-typing-booster
    
    1.2.3-5.1.al7
    
    2.1.0-5.1.al8
    
    icedtea-web
    
    1.7.1-4.1.al7
    
    1.8.4-4.1.al8
    
    icoutils
    
    0.31.3-1.1.al7
    
    0.32.3-2.2.al8
    
    icu
    
    50.2-4.1.al7
    
    60.3-2.1.al8
    
    ilmbase
    
    1.0.3-7.1.al7
    
    2.2.0-13.1.al8
    
    ima-evm-utils
    
    1.1-3.1.al7
    
    1.3.2-12.1.al8
    
    imake
    
    1.0.5-10.1.al7
    
    1.0.7-11.1.al8
    
    infiniband-diags
    
    2.1.0-1.1.al7
    
    2.2.0-3.2.al8
    
    initial-setup
    
    0.3.9.45-1.1.al7
    
    0.3.81.7-1.1.al8
    
    initscripts
    
    9.49.53-1.1.al7.1
    
    10.00.18-1.al8
    
    inkscape
    
    0.92.2-3.2.al7
    
    0.92.3-13.1.al8
    
    intel-cmt-cat
    
    3.0.1-1.1.al7
    
    4.0.0-0.1.al8
    
    intltool
    
    0.50.2-7.1.al7
    
    0.51.0-11.1.al8
    
    iotop
    
    0.6-4.1.al7
    
    0.6-17.0.1.al8
    
    ipa
    
    4.6.8-5.1.al7.15
    
    4.9.11-7.0.1.al8
    
    iperf3
    
    3.1.7-3.1.al7
    
    3.9-10.al8
    
    ipmitool
    
    1.8.18-10.1.al7
    
    1.8.18-18.0.2.al8
    
    iproute
    
    4.11.0-30.al7.1
    
    5.18.0-1.1.0.1.al8
    
    iprutils
    
    2.4.17.1-3.1.al7
    
    2.4.19-1.1.al8
    
    ipset
    
    7.1-1.1.al7
    
    7.1-1.2.al8
    
    iptables
    
    1.4.21-35.1.al7
    
    1.8.4-24.0.1.al8
    
    iptraf-ng
    
    1.1.4-7.1.al7
    
    1.2.1-2.1.al8
    
    iptstate
    
    2.2.5-4.1.al7
    
    2.2.6-6.2.al8
    
    iputils
    
    20160308-10.2.al7
    
    20180629-10.0.2.al8
    
    ipvsadm
    
    1.27-8.1.al7
    
    1.31-1.1.al8
    
    ipxe
    
    20180825-3.git133f4c.1.al7
    
    20200823-9.git4bd064de.al8
    
    irqbalance
    
    1.0.7-12.1.al7
    
    1.9.0-4.0.1.al8
    
    irssi
    
    0.8.15-16.1.al7
    
    1.1.1-3.1.al8
    
    iscsi-initiator-utils
    
    6.2.0.874-22.1.al7
    
    6.2.1.4-8.git095f59c.0.1.al8
    
    isns-utils
    
    0.93-7.1.al7
    
    0.99-1.2.al8
    
    iso-codes
    
    3.46-2.1.al7
    
    4.6.0-3.0.1.al8
    
    isomd5sum
    
    1.0.10-5.1.al7
    
    1.2.3-3.2.al8
    
    isorelax
    
    0-0.15.release20050331.1.al7
    
    0-0.23.release20050331.1.al8
    
    istack-commons
    
    2.17-4.1.al7
    
    2.21-9.1.al8
    
    itstool
    
    2.0.2-1.1.al7
    
    2.0.6-7.al8
    
    iw
    
    4.3-2.1.al7
    
    4.14-5.2.al8
    
    jakarta-commons-httpclient
    
    3.1-16.1.al7
    
    3.1-28.1.al8
    
    jakarta-oro
    
    2.0.8-16.1.al7
    
    2.0.8-25.1.al8
    
    jansi
    
    1.9-7.1.al7
    
    1.18-4.al8
    
    jansi-native
    
    1.4-11.1.al7
    
    1.7-7.2.al8
    
    jansson
    
    2.10-1.1.al7
    
    2.14-1.0.1.al8
    
    jasper
    
    1.900.1-33.1.al7
    
    2.0.14-5.0.1.al8
    
    java-1.8.0-openjdk
    
    1.8.0.382.b05-1.1.al7
    
    1.8.0.382.b05-2.0.3.al8
    
    java-11-openjdk
    
    11.0.20.0.8-1.1.al7
    
    11.0.20.0.8-3.0.2.al8
    
    java-atk-wrapper
    
    0.30.4-5.1.al7
    
    0.33.2-6.2.al8
    
    java\_cup
    
    0.11a-16.1.al7
    
    0.11b-8.1.al8
    
    javacc
    
    5.0-10.1.al7
    
    7.0.2-6.1.al8
    
    javacc-maven-plugin
    
    2.6-17.1.al7
    
    2.6-25.1.al8
    
    javamail
    
    1.4.6-8.1.al7
    
    1.6.2-2.1.al8
    
    javapackages-tools
    
    3.4.1-11.1.al7
    
    5.3.1-7.3.al8
    
    javassist
    
    3.16.1-10.1.al7
    
    3.18.1-8.1.al8
    
    jaxen
    
    1.1.3-11.1.al7
    
    1.1.6-18.1.al8
    
    jbigkit
    
    2.0-11.1.al7
    
    2.1-14.2.al8
    
    jboss-parent
    
    6-12.1.al7
    
    20-4.1.al8
    
    jdepend
    
    2.9.1-10.1.al7
    
    2.9.1-20.1.al8
    
    jdependency
    
    0.7-10.1.al7
    
    1.2-2.1.al8
    
    jdom
    
    1.1.3-6.1.al7
    
    1.1.3-17.1.al8
    
    jetty
    
    9.0.3-8.1.al7
    
    9.4.30-2.v20200611.1.al8
    
    jflex
    
    1.4.3-20.1.al7
    
    1.6.1-12.1.al8
    
    jline
    
    1.0-8.1.al7
    
    2.14.6-2.1.al8
    
    jna
    
    3.5.2-8.1.al7
    
    5.6.0-8.0.1.al8
    
    jomolhari-fonts
    
    0.003-17.1.al7
    
    0.003-24.1.al8
    
    jose
    
    10-1.1.al7
    
    10-2.3.al8
    
    jsch
    
    0.1.50-5.1.al7
    
    0.1.55-3.1.al8
    
    json-c
    
    0.11-4.1.al7
    
    0.13.1-3.0.1.al8
    
    json-glib
    
    1.4.2-2.1.al7
    
    1.4.4-1.2.al8
    
    jsoup
    
    1.6.1-10.1.al7
    
    1.12.1-3.al8
    
    jsr-305
    
    0-0.18.20090319svn.1.al7
    
    0-0.25.20130910svn.1.al8
    
    jss
    
    4.4.9-3.1.al7
    
    4.9.4-1.al8
    
    jtidy
    
    1.0-0.16.20100930svn1125.1.al7
    
    1.0-0.28.20100930svn1125.1.al8
    
    junit
    
    4.11-8.1.al7
    
    4.12-14.1.al8
    
    jvnet-parent
    
    4-2.1.al7
    
    4-10.1.al8
    
    jzlib
    
    1.1.1-6.1.al7
    
    1.1.3-14.al8
    
    kacst-fonts
    
    2.0-12.1.al7
    
    2.0-27.al8
    
    kbd
    
    1.15.5-16.1.al7
    
    2.0.4-10.1.al8
    
    keepalived
    
    1.3.5-19.1.al7
    
    2.2.4-6.al8
    
    kernel
    
    3.10.0-1160.al7.1
    
    4.19.91-0.41.git.67a612f5f.al8
    
    kexec-tools
    
    2.0.15-51.1.al7.3.alnx
    
    2.0.25-5.0.2.al8
    
    keybinder3
    
    0.3.0-1.1.al7
    
    0.3.2-4.2.al8
    
    keycloak-httpd-client-install
    
    0.8-1.1.al7
    
    1.1-10.al8
    
    keyutils
    
    1.5.8-3.1.al7
    
    1.5.10-9.al8
    
    khmeros-fonts
    
    5.0-17.1.al7
    
    5.0-25.1.al8
    
    kmod
    
    20-28.1.al7
    
    25-19.0.2.al8
    
    kmod-kvdo
    
    6.1.1.125-5.1.al7
    
    6.2.8.7-88.0.1.al8
    
    kpatch
    
    0.6.1-6.1.al7
    
    0.9.7-2.0.1.al8
    
    krb5
    
    1.15.1-55.1.al7
    
    1.18.2-25.0.1.al8
    
    ksh
    
    20120801-144.1.al7
    
    20120801-257.0.1.al8
    
    kurdit-unikurd-web-fonts
    
    20020502-11.1.al7
    
    20020502-19.1.al8
    
    ladspa
    
    1.13-12.1.al7
    
    1.13-20.1.al8
    
    langtable
    
    0.0.31-4.1.al7
    
    0.0.51-4.1.al8
    
    lapack
    
    3.4.2-8.1.al7
    
    3.8.0-8.2.al8
    
    lasso
    
    2.5.1-8.1.al7
    
    2.6.0-13.0.1.al8
    
    latex2html
    
    2012-3.1.al7
    
    2018.2-2.1.al8
    
    lcms2
    
    2.6-3.4.al7
    
    2.9-2.2.al8
    
    ldapjdk
    
    4.19-5.1.al7
    
    4.23.0-1.al8
    
    ldns
    
    1.6.16-10.4.al7
    
    1.7.0-21.2.al8
    
    ledmon
    
    0.92-1.1.al7
    
    0.96-3.0.1.al8
    
    less
    
    458-9.1.al7
    
    530-1.2.al8
    
    lftp
    
    4.4.8-14.1.al7
    
    4.9.2-4.al8
    
    libabw
    
    0.1.1-2.1.al7
    
    0.1.3-7.al8
    
    libaio
    
    0.3.109-13.1.al7
    
    0.3.112-1.2.al8
    
    libao
    
    1.1.0-8.1.al7
    
    1.2.0-10.2.al8
    
    libappindicator
    
    12.10.0-13.1.al7
    
    12.10.0-19.2.al8
    
    libappstream-glib
    
    0.7.8-2.1.al7
    
    0.7.18-4.0.1.al8
    
    libarchive
    
    3.1.2-14.1.al7
    
    3.5.3-4.al8
    
    libassuan
    
    2.1.0-3.1.al7
    
    2.5.1-3.2.al8
    
    libasyncns
    
    0.8-7.1.al7
    
    0.8-14.2.al8
    
    libatasmart
    
    0.19-6.1.al7
    
    0.19-14.2.al8
    
    libavc1394
    
    0.5.3-14.1.al7
    
    0.5.4-7.2.al8
    
    libbase
    
    1.1.3-10.1.al7
    
    1.1.3-18.1.al8
    
    libblockdev
    
    2.18-5.1.al7
    
    2.28-2.al8
    
    libbluray
    
    0.2.3-6.1.al7
    
    1.0.2-3.2.al8
    
    libburn
    
    1.2.8-4.1.al7
    
    1.5.4-4.al8
    
    libbytesize
    
    1.2-1.1.al7
    
    2.5-3.0.1.al8
    
    libcacard
    
    2.7.0-1.1.al7
    
    2.8.0-6.0.2.al8
    
    libcanberra
    
    0.30-9.1.al7
    
    0.30-18.1.al8
    
    libcap
    
    2.22-11.1.al7
    
    2.48-5.al8
    
    libcap-ng
    
    0.7.5-4.1.al7
    
    0.7.11-1.al8
    
    libcdio
    
    0.92-3.1.al7
    
    2.1.0-6.al8
    
    libcdio-paranoia
    
    10.2+0.90-11.1.al7
    
    10.2+2.0.1-6.0.4.al8
    
    libcdr
    
    0.1.4-1.1.al7
    
    0.1.7-3.al8
    
    libcgroup
    
    0.41-21.1.al7
    
    0.41-19.2.al8
    
    libcmis
    
    0.5.1-2.4.al7
    
    0.5.2-12.al8
    
    libconfig
    
    1.4.9-5.1.al7
    
    1.5-9.2.al8
    
    libcroco
    
    0.6.12-6.1.al7
    
    0.6.12-4.3.al8.1
    
    libdaemon
    
    0.14-7.1.al7
    
    0.14-15.2.al8
    
    libdb
    
    5.3.21-25.1.al7
    
    5.3.28-42.0.1.al8
    
    libdbusmenu
    
    16.04.0-4.1.al7
    
    16.04.0-12.2.al8
    
    libdmapsharing
    
    2.9.37-1.1.al7
    
    2.9.37-5.2.al8
    
    libdmx
    
    1.1.3-3.1.al7
    
    1.1.4-3.2.al8
    
    libdnet
    
    1.12-13.1.1.al7
    
    1.14-5.0.1.al8
    
    libdrm
    
    2.4.97-2.1.al7
    
    2.4.114-1.al8
    
    libdv
    
    1.0.0-17.1.al7
    
    1.0.0-27.2.al8
    
    libdvdnav
    
    5.0.3-1.4.al7
    
    6.1.0-4.0.1.al8
    
    libdvdread
    
    5.0.3-3.4.al7
    
    6.1.1-4.0.1.al8
    
    libdwarf
    
    20130207-4.1.al7
    
    20180129-4.2.al8
    
    libeasyfc
    
    0.13.0-3.1.al7
    
    0.14.0-1.2.al8
    
    libecap
    
    1.0.0-1.4.al7
    
    1.0.1-2.2.0.1.al8
    
    libedit
    
    3.0-12.20121213cvs.1.al7
    
    3.1-23.20170329cvs.2.al8
    
    libepoxy
    
    1.5.2-1.1.al7
    
    1.5.8-1.0.2.al8
    
    liberation-fonts
    
    1.07.2-16.1.al7
    
    2.1.3-4.al8
    
    libestr
    
    0.1.9-2.1.al7
    
    0.1.11-4.0.1.al8
    
    libetonyek
    
    0.1.7-1.1.al7
    
    0.1.10-2.al8
    
    libevdev
    
    1.5.6-1.1.al7
    
    1.11.0-3.al8
    
    libevent
    
    2.0.21-4.1.al7
    
    2.1.8-5.2.al8
    
    libexif
    
    0.6.22-2.1.al7
    
    0.6.22-6.al8
    
    libexttextcat
    
    3.4.1-3.1.al7
    
    3.4.5-2.2.al8
    
    libfabric
    
    1.7.2-1.1.al7
    
    1.17.0-3.al8.1
    
    libfastjson
    
    0.99.4-3.1.al7
    
    0.99.9-3.al8
    
    libffi
    
    3.0.13-19.1.al7
    
    3.1-24.0.1.al8
    
    libfontenc
    
    1.1.3-3.1.al7
    
    1.1.3-8.2.al8
    
    libfonts
    
    1.1.3-13.1.al7
    
    1.1.3-21.1.al8
    
    libformula
    
    1.1.3-10.1.al7
    
    1.1.3-18.1.al8
    
    libfprint
    
    0.8.2-2.1.al7
    
    1.94.5-1.0.2.al8
    
    libfreehand
    
    0.1.1-1.1.al7
    
    0.1.2-2.2.al8
    
    libgcrypt
    
    1.5.3-14.1.al7
    
    1.8.5-7.0.1.al8
    
    libgdata
    
    0.17.9-1.1.al7
    
    0.18.1-4.al8
    
    libgdither
    
    0.6-8.1.al7
    
    0.6-17.2.al8
    
    libgee
    
    0.20.1-1.1.al7
    
    0.20.4-3.0.1.al8
    
    libgexiv2
    
    0.10.8-1.1.al7
    
    0.12.3-1.0.1.al8
    
    libglvnd
    
    1.0.1-0.8.git5baa1e5.1.al7
    
    1.3.4-1.0.1.al8
    
    libgnomekbd
    
    3.26.0-3.1.al7
    
    3.26.0-4.2.al8
    
    libgovirt
    
    0.3.4-5.1.al7
    
    0.3.7-4.1.al8
    
    libgpg-error
    
    1.12-3.1.al7
    
    1.42-5.0.1.al8
    
    libgphoto2
    
    2.5.15-3.1.al7
    
    2.5.27-3.0.1.al8
    
    libgpod
    
    0.8.2-12.2.al7
    
    0.8.3-24.1.al8
    
    libgsf
    
    1.14.26-7.1.al7
    
    1.14.47-5.0.1.al8
    
    libgtop2
    
    2.38.0-3.1.al7
    
    2.40.0-9.0.1.al8
    
    libguestfs
    
    1.40.2-10.1.al7
    
    1.44.0-9.0.3.al8
    
    libguestfs-winsupport
    
    7.2-3.1.al7
    
    8.8-2.al8
    
    libgusb
    
    0.2.9-1.1.al7
    
    0.3.0-1.2.al8
    
    libgweather
    
    3.28.2-4.1.al7
    
    40.0-3.al8
    
    libgxps
    
    0.3.0-4.1.al7
    
    0.3.2-3.al8
    
    libhangul
    
    0.1.0-8.1.al7
    
    0.1.0-16.2.al8
    
    libhbaapi
    
    2.2.9-6.1.al7
    
    2.2.9-13.2.al8
    
    libhbalinux
    
    1.0.17-2.1.al7
    
    1.0.17-7.2.al8
    
    libhugetlbfs
    
    2.16-13.1.al7
    
    2.21-17.1.al8
    
    libical
    
    3.0.3-2.1.al7
    
    3.0.14-1.0.1.al8
    
    libICE
    
    1.0.9-9.1.al7
    
    1.0.10-8.al8
    
    libIDL
    
    0.8.14-8.1.al7
    
    0.8.14-15.1.al8
    
    libidn
    
    1.28-4.1.al7
    
    1.34-5.2.al8
    
    libiec61883
    
    1.2.0-10.1.al7
    
    1.2.0-18.2.al8
    
    libieee1284
    
    0.2.11-15.1.al7
    
    0.2.11-28.2.al8
    
    libimobiledevice
    
    1.2.0-1.1.al7
    
    1.3.0-5.0.2.al8
    
    libindicator
    
    12.10.1-6.1.al7
    
    12.10.1-14.2.al8
    
    libinput
    
    1.10.7-2.1.al7
    
    1.16.3-3.0.1.al8
    
    libiptcdata
    
    1.0.4-11.1.al7
    
    1.0.5-9.al8
    
    libiscsi
    
    1.9.0-7.4.al7
    
    1.18.0-8.2.al8
    
    libisofs
    
    1.2.8-4.1.al7
    
    1.5.4-4.al8
    
    libjpeg-turbo
    
    1.2.90-8.1.al7
    
    2.0.90-6.0.1.al8
    
    libkkc
    
    0.3.1-9.4.al7
    
    0.3.5-12.2.al8
    
    libksba
    
    1.3.0-7.1.al7
    
    1.3.5-9.0.1.al8
    
    liblangtag
    
    0.6.2-1.1.1.al7
    
    0.6.3-8.al8.1
    
    liblayout
    
    0.2.10-8.1.al7
    
    0.2.10-17.1.al8
    
    libldb
    
    1.5.4-2.1.al7
    
    2.6.1-1.0.1.al8
    
    libloader
    
    1.1.3-9.1.al7
    
    1.1.3-17.1.al8
    
    liblockfile
    
    1.08-17.1.al7
    
    1.14-2.0.1.al8
    
    liblognorm
    
    2.0.2-3.1.al7
    
    2.0.6-4.al8
    
    liblouis
    
    2.5.2-12.1.al7
    
    3.16.1-4.al8
    
    libmatchbox
    
    1.9-15.1.al7
    
    1.9-23.2.al8
    
    libmaxminddb
    
    1.2.0-6.1.al7
    
    1.5.2-3.al8
    
    libmbim
    
    1.14.2-1.1.al7
    
    1.28.2-1.0.1.al8
    
    libmediaart
    
    1.9.4-1.1.al7
    
    1.9.5-2.al8
    
    libmemcached
    
    1.0.16-5.1.al7
    
    1.0.18-17.0.1.al8
    
    libmicrohttpd
    
    0.9.33-2.1.al7
    
    0.9.59-2.2.al8
    
    libmng
    
    1.0.10-14.1.al7
    
    2.0.3-7.2.al8
    
    libmnl
    
    1.0.3-7.1.al7
    
    1.0.4-6.2.al8
    
    libmodman
    
    2.0.1-8.1.al7
    
    2.0.1-17.2.al8
    
    libmpc
    
    1.0.1-3.1.al7
    
    1.1.0-9.1.1.al8
    
    libmpcdec
    
    1.2.6-12.1.al7
    
    1.2.6-20.2.al8
    
    libmspack
    
    0.5-0.8.alpha.1.al7
    
    0.10.1-0.7.alpha.al8
    
    libmspub
    
    0.1.2-1.1.al7
    
    0.1.4-1.2.al8
    
    libmtp
    
    1.1.14-1.1.al7
    
    1.1.18-6.al8
    
    libmusicbrainz5
    
    5.0.1-9.1.al7
    
    5.1.0-10.2.al8
    
    libmwaw
    
    0.3.5-1.1.al7
    
    0.3.21-1.al8
    
    libndp
    
    1.2-9.1.al7
    
    1.7-6.0.1.al8
    
    libnet
    
    1.1.6-7.1.al7
    
    1.2-6.al8
    
    libnetfilter\_conntrack
    
    1.0.6-1.1.al7
    
    1.0.6-5.2.al8
    
    libnetfilter\_cthelper
    
    1.0.0-11.1.al7
    
    1.0.0-15.1.al8
    
    libnetfilter\_cttimeout
    
    1.0.0-7.1.al7
    
    1.0.0-11.2.al8
    
    libnetfilter\_queue
    
    1.0.2-2.1.al7
    
    1.0.5-1.al8
    
    libnfnetlink
    
    1.0.1-4.1.al7
    
    1.0.1-13.2.al8
    
    libnftnl
    
    1.0.8-3.al7.1
    
    1.1.5-5.0.1.al8
    
    libnice
    
    0.1.3-4.1.al7
    
    0.1.14-7.20180504git34d6044.2.al8
    
    libnl3
    
    3.2.28-4.1.al7
    
    3.7.0-1.al8
    
    libnotify
    
    0.7.7-1.1.al7
    
    0.7.9-8.al8
    
    liboauth
    
    0.9.7-4.1.al7
    
    1.0.3-9.2.al8
    
    libodfgen
    
    0.1.4-1.1.al7
    
    0.1.8-4.al8
    
    libogg
    
    1.3.0-7.1.al7
    
    1.3.4-6.al8
    
    libopenraw
    
    0.0.9-7.4.al7
    
    0.1.3-11.al8
    
    liborcus
    
    0.12.1-2.1.al7
    
    0.16.1-8.al8
    
    libosinfo
    
    1.1.0-5.1.al7
    
    1.9.0-3.al8
    
    libotf
    
    0.9.13-4.1.al7
    
    0.9.13-11.2.al8
    
    libpagemaker
    
    0.0.3-1.4.al7
    
    0.0.4-3.2.al8
    
    libpaper
    
    1.1.24-9.1.al7
    
    1.1.28-4.al8
    
    libpcap
    
    1.5.3-13.1.al7
    
    1.9.1-5.1.al8
    
    libpciaccess
    
    0.14-1.1.al7
    
    0.14-1.2.al8
    
    libpeas
    
    1.22.0-1.1.al7
    
    1.22.0-6.2.al8
    
    libpfm
    
    4.7.0-10.1.al7
    
    4.11.0-6.al8
    
    libpinyin
    
    0.9.93-4.1.al7
    
    2.6.0-4.al8
    
    libpipeline
    
    1.2.3-3.1.al7
    
    1.5.0-2.2.al8
    
    libplist
    
    1.12-3.1.al7
    
    2.2.0-5.0.1.al8
    
    libpmemobj-cpp
    
    1.5-1.1.al7
    
    1.13.0-1.al8
    
    libpng
    
    1.5.13-8.1.al7
    
    1.6.34-5.2.al8
    
    libpng12
    
    1.2.50-10.4.al7
    
    1.2.57-5.2.al8
    
    libproxy
    
    0.4.11-11.1.al7
    
    0.4.15-5.2.2.al8
    
    libpsm2
    
    11.2.78-1.1.al7
    
    11.2.230-1.al8
    
    libpst
    
    0.6.59-4.1.al7
    
    0.6.71-8.2.al8
    
    libpwquality
    
    1.2.3-5.1.al7
    
    1.4.4-6.0.1.al8
    
    libqb
    
    1.0.1-9.1.al7
    
    1.0.3-13.al8
    
    libqmi
    
    1.18.0-2.1.al7
    
    1.32.2-3.0.1.al8
    
    libquvi
    
    0.4.1-5.1.al7
    
    0.9.4-12.2.al8
    
    libquvi-scripts
    
    0.4.10-3.1.al7
    
    0.9.20131130-9.1.al8
    
    librabbitmq
    
    0.8.0-3.1.al7
    
    0.11.0-5.0.1.al8
    
    LibRaw
    
    0.19.4-1.1.al7
    
    0.20.2-5.0.1.al8
    
    libraw1394
    
    2.1.0-2.1.al7
    
    2.1.2-5.2.al8
    
    librdkafka
    
    0.11.4-1.1.al7
    
    1.6.1-102.0.1.al8
    
    librelp
    
    1.2.12-1.1.al7.1
    
    1.9.0-1.al8
    
    libreoffice
    
    5.3.6.1-25.1.al7
    
    7.1.8.1-8.0.1.al8
    
    libreoffice-voikko
    
    3.4-4.1.al7
    
    5.0-6.al8
    
    librepo
    
    1.8.1-8.1.al7
    
    1.14.2-4.0.1.al8
    
    libreport
    
    2.1.11-53.1.al7
    
    2.9.5-15.1.al8
    
    librepository
    
    1.1.3-9.1.al7
    
    1.1.3-17.1.al8
    
    libreswan
    
    3.25-9.1.1.al7
    
    4.9-3.al8
    
    librevenge
    
    0.0.2-2.1.al7
    
    0.0.4-12.1.al8
    
    librsvg2
    
    2.40.20-1.1.al7
    
    2.50.7-1.0.2.al8
    
    libsamplerate
    
    0.1.8-6.1.al7
    
    0.1.9-1.2.al8
    
    libseccomp
    
    2.3.1-4.1.al7
    
    2.5.2-1.0.6.al8
    
    libsecret
    
    0.18.6-1.1.al7
    
    0.20.4-4.0.1.al8
    
    libselinux
    
    2.5-15.1.al7
    
    2.9-8.2.al8
    
    libsemanage
    
    2.5-14.1.al7
    
    2.9-9.al8
    
    libsepol
    
    2.5-10.1.al7
    
    2.9-3.0.1.al8
    
    libserializer
    
    1.1.2-10.1.al7
    
    1.1.2-18.1.al8
    
    libshout
    
    2.2.2-11.1.al7
    
    2.4.3-7.0.1.al8
    
    libsigc++20
    
    2.10.0-1.1.al7
    
    2.10.0-6.1.al8
    
    libSM
    
    1.2.2-2.1.al7
    
    1.2.3-1.2.al8
    
    libsmbios
    
    2.3.3-8.1.al7
    
    2.4.1-2.2.al8
    
    libsmi
    
    0.4.8-13.1.al7
    
    0.4.8-23.1.al8
    
    libsndfile
    
    1.0.25-12.1.al7.1
    
    1.0.28-13.0.1.al8
    
    libsolv
    
    0.6.34-4.1.al7
    
    0.7.20-4.al8
    
    libsoup
    
    2.62.2-2.1.al7
    
    2.62.3-3.0.1.al8
    
    libspectre
    
    0.2.8-1.1.al7
    
    0.2.9-6.al8
    
    libspiro
    
    20071029-12.1.al7
    
    20200505-5.al8
    
    libsrtp
    
    1.4.4-11.20101004cvs.1.al7
    
    2.3.0-7.al8
    
    libstaroffice
    
    0.0.4-1.1.al7
    
    0.0.7-5.al8
    
    libstoragemgmt
    
    1.8.1-2.1.al7
    
    1.9.1-3.al8
    
    libtalloc
    
    2.1.16-1.1.al7
    
    2.3.4-1.al8
    
    libtar
    
    1.2.11-29.1.al7
    
    1.2.20-17.0.1.al8
    
    libtasn1
    
    4.10-1.1.al7
    
    4.13-4.0.1.al8
    
    libtdb
    
    1.3.18-1.1.al7
    
    1.4.7-1.0.1.al8
    
    libteam
    
    1.29-3.1.al7
    
    1.31-4.0.1.al8
    
    libtevent
    
    0.9.39-1.1.al7
    
    0.13.0-1.al8
    
    libthai
    
    0.1.14-9.1.al7
    
    0.1.28-8.al8
    
    libtheora
    
    1.1.1-8.1.al7
    
    1.1.1-21.2.al8
    
    libtiff
    
    4.0.3-35.1.al7
    
    4.4.0-8.0.1.al8
    
    libtimezonemap
    
    0.4.4-2.1.al7
    
    0.4.5.1-4.al8
    
    libtirpc
    
    0.2.4-0.16.1.al7
    
    1.3.2-1.0.1.al8
    
    libtool
    
    2.4.2-22.1.al7
    
    2.4.6-25.3.al8
    
    libuninameslist
    
    20091231-8.1.al7
    
    20170701-4.2.al8
    
    libunistring
    
    0.9.3-9.1.al7
    
    0.9.9-3.2.al8
    
    libusb
    
    0.1.4-3.1.al7
    
    0.1.7-5.al8
    
    libusbmuxd
    
    1.0.10-5.1.al7
    
    2.0.2-5.0.1.al8
    
    libusbx
    
    1.0.21-1.1.al7
    
    1.0.23-4.1.al8
    
    libuser
    
    0.60-9.1.al7
    
    0.62-25.0.1.al8
    
    libutempter
    
    1.1.6-4.1.al7
    
    1.1.6-14.2.al8
    
    libva
    
    1.8.3-1.1.al7
    
    2.13.0-2.0.1.al8
    
    libvdpau
    
    1.1.1-3.1.al7
    
    1.4-2.1.al8
    
    libverto
    
    0.2.5-4.1.al7
    
    0.3.2-2.al8
    
    libvirt
    
    4.5.0-36.1.al7.5
    
    8.0.0-21.al8
    
    libvirt-glib
    
    1.0.0-1.1.al7
    
    4.0.0-3.al8
    
    libvirt-python
    
    4.5.0-1.1.al7
    
    8.0.0-2.al8
    
    libvisio
    
    0.1.6-1.1.al7
    
    0.1.7-9.0.1.al8
    
    libvisual
    
    0.4.0-16.1.al7
    
    0.4.0-25.1.al8
    
    libvma
    
    8.7.5-1.1.al7
    
    9.6.4-1.0.1.al8
    
    libvncserver
    
    0.9.9-14.1.al7.1
    
    0.9.11-17.1.al8
    
    libvoikko
    
    3.6-5.1.al7
    
    4.1.1-3.0.1.al8
    
    libvorbis
    
    1.3.3-8.1.al7.1
    
    1.3.7-5.0.1.al8
    
    libvpx
    
    1.3.0-8.1.al7
    
    1.7.0-8.1.al8
    
    libwacom
    
    0.30-1.1.al7
    
    1.12.1-2.al8
    
    libwebp
    
    0.3.0-11.1.al7
    
    1.2.0-7.0.1.al8
    
    libwmf
    
    0.2.8.4-44.1.al7
    
    0.2.12-10.al8
    
    libwnck3
    
    3.24.1-2.1.al7
    
    40.0-2.al8
    
    libwpd
    
    0.10.0-2.1.al7
    
    0.10.3-10.al8
    
    libwpg
    
    0.3.0-1.1.al7
    
    0.3.3-8.al8
    
    libwps
    
    0.4.7-1.1.al7
    
    0.4.12-4.al8
    
    libX11
    
    1.6.7-4.1.al7
    
    1.7.0-7.al8
    
    libXau
    
    1.0.8-2.1.1.al7
    
    1.0.9-8.al8
    
    libXaw
    
    1.0.13-4.1.al7
    
    1.0.13-10.2.al8
    
    libxcb
    
    1.13-1.1.al7
    
    1.13.1-1.3.al8
    
    libXcomposite
    
    0.4.4-4.1.1.al7
    
    0.4.5-7.al8
    
    libXcursor
    
    1.1.15-1.1.al7
    
    1.2.0-7.al8
    
    libXdamage
    
    1.1.4-4.1.1.al7
    
    1.1.5-7.al8
    
    libXdmcp
    
    1.1.2-6.1.al7
    
    1.1.3-8.al8
    
    libXext
    
    1.3.3-3.1.al7
    
    1.3.4-8.al8
    
    libXfixes
    
    5.0.3-1.1.al7
    
    5.0.3-7.2.al8
    
    libXfont2
    
    2.0.3-1.1.al7
    
    2.0.3-2.2.al8
    
    libXft
    
    2.3.2-2.1.al7
    
    2.3.3-8.al8
    
    libXi
    
    1.7.9-1.1.al7
    
    1.7.10-1.1.al8
    
    libXinerama
    
    1.1.3-2.1.1.al7
    
    1.1.4-1.2.al8
    
    libxkbcommon
    
    0.7.1-3.1.al7
    
    1.0.3-4.al8
    
    libxkbfile
    
    1.0.9-3.1.al7
    
    1.1.0-1.1.al8
    
    libxklavier
    
    5.4-7.1.al7
    
    5.4-11.2.al8
    
    libxml2
    
    2.9.1-6.7.al7.6
    
    2.9.7-17.0.2.al8
    
    libXmu
    
    1.1.2-2.1.al7
    
    1.1.3-8.al8
    
    libXp
    
    1.0.2-2.1.1.al7
    
    1.0.3-3.2.al8
    
    libXpm
    
    3.5.12-2.1.al7
    
    3.5.13-8.al8
    
    libXrandr
    
    1.5.1-2.1.al7
    
    1.5.2-8.al8
    
    libXrender
    
    0.9.10-1.1.al7
    
    0.9.10-7.2.al8
    
    libXres
    
    1.2.0-1.1.al7
    
    1.2.0-4.2.al8
    
    libXScrnSaver
    
    1.2.2-6.1.1.al7
    
    1.2.3-1.2.al8
    
    libxshmfence
    
    1.2-1.1.al7
    
    1.3-2.2.al8
    
    libxslt
    
    1.1.28-6.1.al7
    
    1.1.32-6.1.al8
    
    libXt
    
    1.1.5-3.1.al7
    
    1.2.0-6.al8
    
    libXtst
    
    1.2.3-1.1.al7
    
    1.2.3-7.2.al8
    
    libXv
    
    1.0.11-1.1.al7
    
    1.0.11-7.2.al8
    
    libXvMC
    
    1.0.10-1.1.al7
    
    1.0.12-1.1.al8
    
    libXxf86dga
    
    1.1.4-2.1.1.al7
    
    1.1.5-8.al8
    
    libXxf86misc
    
    1.0.3-7.1.1.al7
    
    1.0.4-1.2.al8
    
    libXxf86vm
    
    1.1.4-1.1.al7
    
    1.1.4-9.2.al8
    
    libyami
    
    1.2.0-2.1.al7
    
    1.3.1-1.3.al8
    
    libyaml
    
    0.1.4-11.1.al7
    
    0.1.7-5.2.al8
    
    libzip
    
    0.10.1-8.1.al7
    
    1.6.1-1.1.al8
    
    libzmf
    
    0.0.2-1.1.al7
    
    0.0.2-3.2.al8
    
    linux-firmware
    
    20200421-80.git78c0348.1.al7
    
    20230404-117.git2e92a49f.al8
    
    linuxconsoletools
    
    1.4.5-3.1.al7
    
    1.6.0-4.2.al8
    
    linuxdoc-tools
    
    0.9.68-5.1.al7
    
    0.9.72-5.1.al8
    
    linuxptp
    
    2.0-2.1.al7.1
    
    3.1.1-3.al8.2
    
    lklug-fonts
    
    0.6-10.20090803cvs.1.al7
    
    0.6-17.20090803cvs.1.al8
    
    lksctp-tools
    
    1.0.17-2.4.al7
    
    1.0.18-3.2.al8
    
    lldpad
    
    1.0.1-7.git036e314.1.al7
    
    1.0.1-19.git036e314.0.1.al8
    
    lm\_sensors
    
    3.4.0-8.20160601gitf9185e5.1.al7
    
    3.6.0-10.al8
    
    lockdev
    
    1.0.4-0.13.20111007git.1.al7
    
    1.0.4-0.28.20111007git.2.al8
    
    logrotate
    
    3.8.6-19.1.al7
    
    3.14.0-6.0.1.al8
    
    logwatch
    
    7.4.0-35.20130522svn140.1.al7
    
    7.5.5-4.al8
    
    lohit-assamese-fonts
    
    2.5.3-2.1.al7
    
    2.91.5-3.1.al8
    
    lohit-bengali-fonts
    
    2.5.3-4.1.al7
    
    2.91.5-3.1.al8
    
    lohit-devanagari-fonts
    
    2.5.3-4.1.al7
    
    2.95.5-4.al8
    
    lohit-gujarati-fonts
    
    2.5.3-2.1.al7
    
    2.92.4-3.1.al8
    
    lohit-kannada-fonts
    
    2.5.3-3.1.al7
    
    2.5.4-3.1.al8
    
    lohit-malayalam-fonts
    
    2.5.3-2.1.al7
    
    2.92.2-3.1.al8
    
    lohit-marathi-fonts
    
    2.5.3-2.1.al7
    
    2.94.2-5.1.al8
    
    lohit-nepali-fonts
    
    2.5.3-2.1.al7
    
    2.94.2-3.1.al8
    
    lohit-tamil-fonts
    
    2.5.3-2.1.al7
    
    2.91.3-3.1.al8
    
    lohit-telugu-fonts
    
    2.5.3-3.1.al7
    
    2.5.5-3.1.al8
    
    lorax
    
    19.7.28-1.1.al7
    
    28.14.70-1.0.1.al8
    
    lpsolve
    
    5.5.2.0-8.1.al7
    
    5.5.2.0-21.0.1.al8
    
    lrzsz
    
    0.12.20-36.1.al7
    
    0.12.20-43.2.al8
    
    lshw
    
    B.02.18-17.1.al7
    
    B.02.19.2-6.0.2.al8
    
    lsof
    
    4.87-6.1.al7
    
    4.93.2-1.1.al8
    
    lsscsi
    
    0.27-6.1.al7
    
    0.32-3.0.1.al8
    
    ltrace
    
    0.7.91-16.1.al7
    
    0.7.91-28.1.al8
    
    lua
    
    5.1.4-15.4.al7
    
    5.3.4-12.0.2.al8
    
    luksmeta
    
    8-2.1.al7
    
    9-4.1.al8
    
    lvm2
    
    2.02.187-6.1.al7.5
    
    2.03.14-9.0.1.al8
    
    lynx
    
    2.8.8-0.3.dev15.1.al7
    
    2.8.9-4.0.1.al8
    
    lz4
    
    1.8.3-1.1.al7
    
    1.8.3-3.1.al8
    
    lzo
    
    2.06-8.1.al7
    
    2.08-14.2.al8
    
    lzop
    
    1.03-10.1.al7
    
    1.03-20.2.al8
    
    m17n-db
    
    1.6.4-4.1.al7
    
    1.8.0-3.1.al8
    
    m17n-lib
    
    1.6.4-14.1.al7
    
    1.8.0-2.2.al8
    
    m4
    
    1.4.16-10.1.al7
    
    1.4.18-7.2.al8
    
    madan-fonts
    
    2.000-11.1.al7
    
    2.000-20.1.al8
    
    mailcap
    
    2.1.41-2.1.al7
    
    2.1.48-3.1.al8
    
    mailman
    
    2.1.15-30.1.al7.2
    
    2.1.29-12.al8.2
    
    mailx
    
    12.5-19.1.al7
    
    12.5-29.2.al8
    
    make
    
    3.82-24.1.al7
    
    4.2.1-11.0.1.al8
    
    malaga
    
    7.12-16.1.al7
    
    7.12-23.2.al8
    
    malaga-suomi-voikko
    
    1.12-5.1.al7
    
    1.19-5.2.al8
    
    mallard-rng
    
    1.0.2-1.1.al7
    
    1.1.0-7.al8
    
    man-db
    
    2.6.3-11.1.al7
    
    2.7.6.1-18.0.1.al8
    
    man-pages
    
    3.53-5.1.al7
    
    4.15-7.0.1.al8
    
    man-pages-overrides
    
    7.9.0-1.1.al7
    
    8.6.0.0-1.al8
    
    mariadb
    
    5.5.68-1.1.al7
    
    10.5.16-2.0.1.al8
    
    marisa
    
    0.2.4-4.1.al7
    
    0.2.4-36.2.al8
    
    matchbox-window-manager
    
    1.2-16.1.20070628svn.4.al7
    
    1.2-23.20070628svn.2.al8
    
    maven
    
    3.0.5-17.4.al7
    
    3.6.2-7.al8
    
    maven-antrun-plugin
    
    1.7-8.1.al7
    
    1.8-6.1.al8
    
    maven-archiver
    
    2.5-9.1.al7
    
    3.4.0-3.1.al8
    
    maven-artifact-resolver
    
    1.0-10.1.al7
    
    1.0-20.1.al8
    
    maven-assembly-plugin
    
    2.4-8.1.al7
    
    3.1.1-3.1.al8
    
    maven-clean-plugin
    
    2.5-8.1.al7
    
    3.0.0-5.1.al8
    
    maven-common-artifact-filters
    
    1.4-11.1.al7
    
    3.0.1-4.1.al8
    
    maven-compiler-plugin
    
    3.1-4.1.al7
    
    3.8.1-2.2.al8
    
    maven-dependency-analyzer
    
    1.3-9.1.al7
    
    1.8-2.1.al8
    
    maven-dependency-plugin
    
    2.7-3.1.al7
    
    3.1.1-2.1.al8
    
    maven-dependency-tree
    
    2.0-7.1.al7
    
    3.0-5.1.al8
    
    maven-doxia
    
    1.4-5.1.al7
    
    1.7-8.1.al8
    
    maven-doxia-sitetools
    
    1.4-3.1.al7
    
    1.7.5-2.1.al8
    
    maven-enforcer
    
    1.2-8.1.al7
    
    3.0.0~M2-2.1.al8
    
    maven-file-management
    
    1.2.1-8.1.al7
    
    3.0.0-5.1.al8
    
    maven-filtering
    
    1.1-3.1.al7
    
    3.1.1-5.1.al8
    
    maven-install-plugin
    
    2.4-7.1.al7
    
    2.5.2-7.1.al8
    
    maven-invoker
    
    2.1.1-9.1.al7
    
    3.0.1-2.1.al8
    
    maven-invoker-plugin
    
    1.8-8.1.al7
    
    1.10-7.1.al8
    
    maven-jar-plugin
    
    2.4-8.1.al7
    
    3.1.2-3.1.al8
    
    maven-parent
    
    20-5.1.al7
    
    33-3.1.al8
    
    maven-plugin-build-helper
    
    1.5-13.1.al7
    
    1.9.1-8.1.al8
    
    maven-plugin-bundle
    
    2.3.7-12.1.al7
    
    3.5.0-2.1.al8
    
    maven-plugin-testing
    
    2.1-11.1.al7
    
    3.3.0-12.1.al8
    
    maven-plugin-tools
    
    3.1-17.1.al7
    
    3.6.0-3.1.al8
    
    maven-plugins-pom
    
    23-7.1.al7
    
    28-7.1.al8
    
    maven-remote-resources-plugin
    
    1.4-7.1.al7
    
    1.6.0-2.1.al8
    
    maven-reporting-api
    
    3.0-5.1.al7
    
    3.0-14.1.al8
    
    maven-reporting-impl
    
    2.2-8.1.al7
    
    3.0.0-4.1.al8
    
    maven-resources-plugin
    
    2.6-6.1.al7
    
    3.1.0-3.1.al8
    
    maven-script-interpreter
    
    1.0-7.1.al7
    
    1.1-11.1.al8
    
    maven-shade-plugin
    
    2.0-6.1.al7
    
    3.1.0-3.1.al8
    
    maven-shared
    
    19-4.1.al7
    
    22-6.1.al8
    
    maven-shared-incremental
    
    1.1-6.1.al7
    
    1.1-14.1.al8
    
    maven-shared-io
    
    1.1-7.1.al7
    
    3.0.0-5.1.al8
    
    maven-shared-utils
    
    0.4-3.1.al7
    
    3.2.1-0.5.al8
    
    maven-source-plugin
    
    2.2.1-7.1.al7
    
    3.0.1-4.1.al8
    
    maven-surefire
    
    2.15-3.1.al7
    
    3.0.0~M3-4.1.al8
    
    maven-verifier
    
    1.4-7.1.al7
    
    1.6-6.1.al8
    
    maven-wagon
    
    2.4-3.1.al7
    
    3.3.4-2.1.al8
    
    maven2
    
    2.2.1-47.1.al7
    
    2.2.1-64.1.al8
    
    mc
    
    4.8.7-11.4.al7
    
    4.8.26-5.al8
    
    mcelog
    
    175-1.1.al7
    
    189-0.al8
    
    mcstrans
    
    0.3.4-5.1.al7
    
    2.9-2.1.al8
    
    mdadm
    
    4.1-9.1.al7
    
    4.2-7.0.1.al8
    
    meanwhile
    
    1.1.0-12.1.al7
    
    1.1.0-23.2.al8
    
    media-player-info
    
    17-4.1.al7
    
    23-2.1.al8
    
    memcached
    
    1.4.15-10.1.al7.1
    
    1.5.22-2.1.al8
    
    memkind
    
    1.7.0-1.1.al7
    
    1.11.0-2.0.1.al8
    
    memtest86+
    
    5.01-2.4.al7
    
    5.01-20.1.al8
    
    mesa
    
    18.3.4-12.2.al7
    
    22.3.0-2.1.al8
    
    mesa-demos
    
    8.3.0-10.1.al7
    
    8.4.0-5.20181118git1830dcb.1.al8
    
    mesa-libGLU
    
    9.0.0-4.1.al7
    
    9.0.1-6.al8
    
    mesa-libGLw
    
    8.0.0-5.1.al7
    
    8.0.0-18.1.al8
    
    metacity
    
    2.34.13-7.1.al7
    
    3.28.0-1.2.al8
    
    microcode\_ctl
    
    2.1-73.16.1.al7
    
    20220809-2.20230808.2.0.1.al8
    
    minicom
    
    2.6.2-5.1.al7
    
    2.7.1-9.2.al8
    
    mksh
    
    46-8.1.al7
    
    56c-5.2.al8
    
    mlocate
    
    0.26-8.1.al7
    
    0.26-20.2.al8
    
    mobile-broadband-provider-info
    
    1.20170310-1.1.al7
    
    20210805-1.0.1.al8
    
    mod\_auth\_gssapi
    
    1.5.1-7.1.al7
    
    1.6.3-7.0.1.al8
    
    mod\_auth\_mellon
    
    0.14.0-9.1.al7
    
    0.14.0-12.1.0.1.al8.1
    
    mod\_auth\_openidc
    
    1.8.8-9.1.al7
    
    2.4.9.4-1.al8
    
    mod\_authnz\_pam
    
    1.1.0-1.1.al7
    
    1.2.2-3.0.1.al8
    
    mod\_fcgid
    
    2.3.9-6.1.al7
    
    2.3.9-17.1.al8
    
    mod\_intercept\_form\_submit
    
    1.1.0-1.1.al7
    
    1.1.0-5.2.al8
    
    mod\_lookup\_identity
    
    1.0.0-1.1.al7
    
    1.0.0-4.2.al8
    
    mod\_security
    
    2.9.2-1.1.al7
    
    2.9.6-1.al8
    
    mod\_security\_crs
    
    2.2.9-3.1.al7
    
    3.3.4-1.al8
    
    mod\_wsgi
    
    3.4-18.1.al7
    
    4.6.4-5.al8
    
    modello
    
    1.7-4.1.al7
    
    1.11-2.1.al8
    
    ModemManager
    
    1.6.10-4.1.al7
    
    1.20.2-1.al8
    
    mojo-parent
    
    32-4.1.al7
    
    40-6.1.al8
    
    motif
    
    2.3.4-14.1.al7
    
    2.3.4-19.al8
    
    mousetweaks
    
    3.12.0-1.1.al7
    
    3.12.0-11.2.al8
    
    mozilla-filesystem
    
    1.9-11.1.al7
    
    1.9-19.al8
    
    mozjs52
    
    52.9.0-1.1.al7
    
    52.9.0-2.0.2.al8
    
    mpfr
    
    3.1.1-4.1.al7
    
    3.1.6-1.2.al8
    
    mpg123
    
    1.25.6-1.1.al7
    
    1.26.2-5.al8
    
    mpich
    
    3.2-2.5.al7
    
    3.4.2-1.0.1.al8
    
    mpitests
    
    5.4.2-1.1.al7
    
    5.8-1.al8
    
    mrtg
    
    2.17.4-11.1.al7
    
    2.17.7-1.2.al8
    
    mstflint
    
    4.13.3-2.1.al7
    
    4.23.0-2.0.1.al8
    
    mt-st
    
    1.1-14.1.al7
    
    1.1-24.2.al8
    
    mtdev
    
    1.1.5-5.1.al7
    
    1.1.5-12.2.al8
    
    mtools
    
    4.0.18-5.1.al7
    
    4.0.18-14.2.al8
    
    mtr
    
    0.85-7.1.al7
    
    0.92-3.2.al8
    
    mtx
    
    1.3.12-14.4.al7
    
    1.3.12-17.2.al8
    
    munge-maven-plugin
    
    1.0-2.1.al7
    
    1.0-11.1.al8
    
    mutt
    
    1.5.21-29.1.al7
    
    2.2.6-1.0.1.al8
    
    mutter
    
    3.28.3-32.1.al7
    
    40.9-14.0.2.al8
    
    mvapich2
    
    2.2-4.1.al7
    
    2.3.6-1.0.2.al8
    
    mythes
    
    1.2.3-7.1.al7
    
    1.2.4-9.2.al8
    
    mythes-bg
    
    4.3-6.1.al7
    
    4.3-12.1.al8
    
    mythes-ca
    
    1.5.0-9.1.al7
    
    1.5.0-15.1.al8
    
    mythes-cs
    
    0.20070926-10.1.al7
    
    0.20070926-19.1.al8
    
    mythes-da
    
    0.20100629.15.16-6.1.al7
    
    0.20100629.15.16-14.1.al8
    
    mythes-de
    
    0.20130206-2.1.al7
    
    0.20180226-3.1.al8
    
    mythes-el
    
    0.20070412-11.1.al7
    
    0.20070412-19.1.al8
    
    mythes-en
    
    3.0-13.1.al7
    
    3.0-23.1.al8
    
    mythes-es
    
    0.20130102-2.1.al7
    
    2.3-1.1.al8
    
    mythes-fr
    
    2.3-4.1.al7
    
    2.3-10.1.al8
    
    mythes-ga
    
    0.20071001-11.1.al7
    
    0.20071001-19.1.al8
    
    mythes-hu
    
    0.20101019-7.1.al7
    
    0.20101019-15.1.al8
    
    mythes-it
    
    2.0.9l-10.1.al7
    
    2.0.9l-18.1.al8
    
    mythes-mi
    
    0.20080630-9.1.al7
    
    0.20080630-17.1.al8
    
    mythes-ne
    
    1.1-6.1.al7
    
    1.1-14.1.al8
    
    mythes-nl
    
    0.20130131-2.1.al7
    
    0.20130131-8.1.al8
    
    mythes-pl
    
    1.5-11.1.al7
    
    1.5-20.1.al8
    
    mythes-pt
    
    0.20060817-11.1.al7
    
    0.20060817-19.1.al8
    
    mythes-ro
    
    3.3-7.1.al7
    
    3.3-13.1.al8
    
    mythes-ru
    
    0.20070613-9.1.al7
    
    0.20070613-17.1.al8
    
    mythes-sk
    
    0.20130130-2.1.al7
    
    0.20130130-11.1.al8
    
    mythes-sl
    
    0.20130130-2.1.al7
    
    0.20130130-11.1.al8
    
    mythes-sv
    
    1.3-6.1.al7
    
    1.3-13.1.al8
    
    mythes-uk
    
    1.6.5-6.1.al7
    
    1.6.5-14.1.al8
    
    nafees-web-naskh-fonts
    
    1.2-11.1.al7
    
    1.2-18.1.al8
    
    nano
    
    2.3.1-10.1.al7
    
    2.9.8-1.2.al8
    
    nasm
    
    2.10.07-7.1.al7
    
    2.15.03-3.1.al8
    
    nautilus
    
    3.26.3.1-7.1.al7
    
    40.2-11.0.1.al8
    
    nautilus-sendto
    
    3.8.6-1.1.al7
    
    3.8.6-2.2.al8
    
    navilu-fonts
    
    1.2-3.1.al7
    
    1.2-11.1.al8
    
    nbdkit
    
    1.8.0-4.1.al7
    
    1.24.0-5.al8
    
    ncompress
    
    4.2.4.4-3.1.1.al7
    
    4.2.4.4-13.1.al8
    
    ncurses
    
    5.9-14.20130511.1.al7
    
    6.1-10.20180224.0.1.al8
    
    ndctl
    
    65-5.1.al7
    
    71.1-4.0.1.al8
    
    neon
    
    0.30.0-4.1.al7
    
    0.31.2-11.0.1.al8
    
    net-snmp
    
    5.7.2-49.1.al7.3
    
    5.8-27.0.1.al8
    
    net-tools
    
    2.0-0.25.20131004git.1.al7
    
    2.0-0.52.20160912git.1.al8
    
    netcf
    
    0.2.8-4.1.al7
    
    0.2.8-12.2.al8
    
    netlabel\_tools
    
    0.20-5.1.al7
    
    0.30.0-3.2.al8
    
    netpbm
    
    10.79.00-7.1.al7
    
    10.95.00-2.al8
    
    nettle
    
    2.7.1-9.1.al7
    
    3.4.1-7.0.1.al8
    
    network-manager-applet
    
    1.8.6-2.1.al7
    
    1.26.0-1.0.1.al8
    
    NetworkManager
    
    1.18.8-2.1.al7
    
    1.40.16-4.0.1.al8
    
    NetworkManager-libreswan
    
    1.2.4-2.1.al7
    
    1.2.10-4.2.al8
    
    newt
    
    0.52.15-4.1.al7
    
    0.52.20-11.1.al8
    
    nfs-utils
    
    1.3.0-0.68.1.al7.2
    
    2.3.3-59.0.2.al8
    
    nfs4-acl-tools
    
    0.3.3-21.1.al7
    
    0.3.5-3.2.al8
    
    nftables
    
    0.8-14.al7.1
    
    0.9.3-26.al8
    
    nmap
    
    6.40-19.1.al7
    
    7.91-12.0.1.al8
    
    nspr
    
    4.34.0-3.1.1.al7
    
    4.35.0-1.0.1.al8
    
    nss
    
    3.79.0-4.1.al7
    
    3.79.0-11.al8
    
    nss-pam-ldapd
    
    0.8.13-25.1.al7
    
    0.9.9-5.al8
    
    numactl
    
    2.0.12-5.1.al7
    
    2.0.14-9.al8
    
    numad
    
    0.5-18.20150602git.1.al7
    
    0.5-26.20150602git.2.al8
    
    numpy
    
    1.7.1-13.1.al7
    
    1.14.3-10.0.1.al8
    
    nvme-cli
    
    1.8.1-3.1.al7
    
    1.16-7.0.1.al8
    
    nvmetcli
    
    0.6-1.1.al7
    
    0.7-3.0.1.al8
    
    objectweb-asm
    
    3.3.1-9.1.al7
    
    7.3.1-3.1.al8
    
    ocaml
    
    4.05.0-6.1.al7
    
    4.07.0-3.1.al8
    
    ocaml-camlp4
    
    4.05.0-0.4.gitfc12d8c7.1.al7
    
    4.07.0-0.gitd32d9973.1.1.al8.3
    
    ocaml-extlib
    
    1.5.3-7.2.al7
    
    1.7.5-3.1.al8
    
    ocaml-findlib
    
    1.7.3-7.1.al7
    
    1.8.0-4.1.al8
    
    ocaml-ocamlbuild
    
    0.11.0-9.1.al7
    
    0.12.0-6.1.al8
    
    ocaml-srpm-macros
    
    5-2.1.al7
    
    5-4.1.al8
    
    oddjob
    
    0.31.5-4.1.al7
    
    0.34.7-3.0.1.al8
    
    omping
    
    0.0.4-6.1.al7
    
    0.0.4-18.1.al8
    
    opa-ff
    
    10.9.0.0.204-1.1.al7
    
    10.11.1.3.1-1.0.1.al8
    
    opa-fm
    
    10.9.0.0.204-1.1.al7
    
    10.11.2.0.3-1.0.1.al8
    
    open-sans-fonts
    
    1.10-1.1.al7
    
    1.10-6.1.al8
    
    open-vm-tools
    
    11.0.5-3.1.al7.7
    
    12.1.5-3.al8
    
    openchange
    
    2.3-3.1.al7
    
    2.3-31.0.2.al8
    
    opencryptoki
    
    3.12.1-3.1.al7
    
    3.19.0-2.0.1.al8
    
    opencv
    
    2.4.5-3.1.al7
    
    3.4.6-8.al8
    
    opendnssec
    
    1.4.7-4.1.al7
    
    2.1.7-1.1.al8
    
    OpenEXR
    
    1.7.1-8.1.al7
    
    2.2.0-12.1.al8
    
    openhpi
    
    3.8.0-1.1.al7
    
    3.8.0-10.0.2.al8
    
    OpenIPMI
    
    2.0.27-1.2.al7
    
    2.0.32-3.0.2.al8
    
    openjade
    
    1.3.2-45.1.al7
    
    1.3.2-57.2.al8
    
    openjpeg2
    
    2.3.1-3.1.al7
    
    2.4.0-5.al8
    
    openldap
    
    2.4.44-25.1.al7
    
    2.4.46-18.al8
    
    openmpi
    
    1.10.7-5.2.al7
    
    4.1.1-3.0.1.al8
    
    openoffice-lv
    
    0.9.4-5.1.al7
    
    1.4.0-2.al8
    
    openoffice.org-dict-cs\_CZ
    
    20060303-14.1.al7
    
    20080822-8.1.al8
    
    opensc
    
    0.19.0-4.1.al7
    
    0.20.0-4.1.al8
    
    openscap
    
    1.2.17-15.1.al7
    
    1.3.8-1.0.1.al8
    
    openslp
    
    2.0.0-8.1.al7
    
    2.0.0-20.0.1.al8
    
    opensm
    
    3.3.21-4.1.al7
    
    3.3.24-1.0.1.al8
    
    opensp
    
    1.5.2-19.1.al7
    
    1.5.2-28.2.al8
    
    openssh
    
    7.4p1-23.1.al7
    
    8.0p1-19.0.1.al8
    
    openssl
    
    1.0.2k-26.1.al7
    
    1.1.1k-9.0.1.al8
    
    openwsman
    
    2.6.3-7.git4391e5c.1.al7
    
    2.6.5-9.0.1.al8
    
    opus
    
    1.0.2-6.1.al7
    
    1.3-0.4.beta.2.al8
    
    orc
    
    0.4.26-1.1.al7
    
    0.4.28-3.1.al8
    
    orca
    
    3.6.3-4.1.al7
    
    40.3-1.al8
    
    os-prober
    
    1.58-9.4.al7
    
    1.74-9.0.1.al8
    
    osinfo-db
    
    20200529-1.1.al7
    
    20220727-2.0.1.al8
    
    osinfo-db-tools
    
    1.1.0-1.1.al7
    
    1.9.0-1.1.al8
    
    overpass-fonts
    
    2.1-1.4.al7
    
    3.0.4-8.al8
    
    p11-kit
    
    0.23.5-3.1.al7
    
    0.23.22-1.1.al8
    
    pacemaker
    
    1.1.23-1.1.al7.1
    
    2.1.5-9.3.0.1.al8
    
    PackageKit
    
    1.1.10-2.1.al7
    
    1.1.12-6.1.al8
    
    pakchois
    
    0.4-10.1.al7
    
    0.4-17.2.al8
    
    paktype-naqsh-fonts
    
    4.1-2.1.al7
    
    4.1-8.1.al8
    
    paktype-naskh-basic-fonts
    
    4.1-3.1.al7
    
    4.1-9.1.al8
    
    paktype-tehreer-fonts
    
    4.1-2.1.al7
    
    4.1-8.1.al8
    
    pam
    
    1.1.8-23.1.al7
    
    1.3.1-25.0.1.al8
    
    pango
    
    1.42.4-4.1.al7
    
    1.48.7-3.0.1.al8
    
    pangomm
    
    2.40.1-1.1.al7
    
    2.40.1-6.1.al8
    
    papi
    
    5.2.0-26.1.al7
    
    6.0.0-12.0.1.al8
    
    paps
    
    0.6.8-28.1.al7.1
    
    0.7.1-4.0.1.al8
    
    paratype-pt-sans-fonts
    
    20101909-3.1.al7
    
    20141121-6.1.al8
    
    parfait
    
    0.5.4-2.1.al7
    
    0.5.4-4.al8
    
    parted
    
    3.1-32.1.al7
    
    3.2-39.0.1.al8
    
    passwd
    
    0.79-6.1.al7
    
    0.80-4.0.1.al8
    
    patch
    
    2.7.1-12.1.al7
    
    2.7.6-11.1.al8
    
    patchutils
    
    0.3.3-5.1.al7
    
    0.4.2-7.0.1.al8
    
    pavucontrol
    
    3.0-5.4.al7
    
    3.0-11.2.al8
    
    pciutils
    
    3.5.1-3.1.al7
    
    3.7.0-3.0.1.al8
    
    pcp
    
    4.3.2-13.1.al7
    
    5.3.7-17.0.1.al8
    
    pcre
    
    8.32-17.1.al7
    
    8.42-6.0.1.al8
    
    pcre2
    
    10.23-2.1.al7
    
    10.32-3.0.1.al8
    
    pcsc-lite
    
    1.8.8-8.1.al7
    
    1.9.5-1.al8
    
    pcsc-lite-ccid
    
    1.4.10-15.1.al7
    
    1.4.29-5.1.0.1.al8
    
    pentaho-libxml
    
    1.1.3-10.1.al7
    
    1.1.3-17.1.al8
    
    pentaho-reporting-flow-engine
    
    0.9.4-8.1.al7
    
    0.9.4-15.1.al8
    
    perftest
    
    4.2-2.1.al7
    
    4.5.0.20-4.0.1.al8
    
    perl
    
    5.16.3-299.1.al7
    
    5.26.3-422.0.1.al8
    
    perl-Algorithm-Diff
    
    1.1902-17.1.al7
    
    1.1903-9.1.al8
    
    perl-App-cpanminus
    
    1.6922-2.1.al7
    
    1.7044-5.1.al8
    
    perl-Archive-Tar
    
    1.92-3.1.al7
    
    2.30-1.1.al8
    
    perl-Archive-Zip
    
    1.30-11.1.al7
    
    1.60-3.1.al8
    
    perl-Authen-SASL
    
    2.15-10.1.al7
    
    2.16-13.1.al8
    
    perl-autodie
    
    2.16-2.1.al7
    
    2.29-396.1.al8
    
    perl-B-Lint
    
    1.17-3.1.al7
    
    1.20-11.1.al8
    
    perl-Bit-Vector
    
    7.3-3.1.al7
    
    7.4-11.2.al8
    
    perl-Capture-Tiny
    
    0.24-1.1.al7
    
    0.46-4.1.al8
    
    perl-Carp
    
    1.26-244.1.al7
    
    1.42-396.1.al8
    
    perl-Carp-Clan
    
    6.04-10.1.al7
    
    6.06-6.1.al8
    
    perl-CGI
    
    3.63-4.1.al7
    
    4.38-2.1.al8
    
    perl-Class-Data-Inheritable
    
    0.08-14.1.al7
    
    0.08-27.1.al8
    
    perl-Class-Inspector
    
    1.28-2.1.al7
    
    1.32-2.1.al8
    
    perl-Class-ISA
    
    0.36-1010.1.al7
    
    0.36-1022.1.al8
    
    perl-Class-Singleton
    
    1.4-14.1.al7
    
    1.5-9.1.al8
    
    perl-Clone
    
    0.34-5.1.al7
    
    0.39-5.1.al8
    
    perl-Compress-Raw-Bzip2
    
    2.061-3.1.al7
    
    2.081-1.2.al8
    
    perl-Compress-Raw-Zlib
    
    2.061-4.1.al7
    
    2.081-1.2.al8
    
    perl-constant
    
    1.27-2.1.al7
    
    1.33-396.1.al8
    
    perl-Convert-ASN1
    
    0.26-4.1.al7
    
    0.27-17.1.al8
    
    perl-CPAN-Meta
    
    2.120921-5.1.al7
    
    2.150010-396.1.al8
    
    perl-CPAN-Meta-Requirements
    
    2.122-7.1.al7
    
    2.140-396.1.al8
    
    perl-CPAN-Meta-YAML
    
    0.008-14.1.al7
    
    0.018-397.1.al8
    
    perl-Crypt-OpenSSL-Bignum
    
    0.04-18.1.al7
    
    0.09-5.2.al8
    
    perl-Crypt-OpenSSL-Random
    
    0.04-21.1.al7
    
    0.15-3.2.al8
    
    perl-Crypt-OpenSSL-RSA
    
    0.28-7.1.al7
    
    0.31-1.2.al8
    
    perl-Data-Dumper
    
    2.145-3.1.al7
    
    2.167-399.2.al8
    
    perl-Data-OptList
    
    0.107-9.1.al7
    
    0.110-6.1.al8
    
    perl-Date-Calc
    
    6.3-14.1.al7
    
    6.4-9.1.al8
    
    perl-Date-Manip
    
    6.41-2.1.al7
    
    6.60-2.1.al8
    
    perl-DateTime
    
    1.04-6.1.al7
    
    1.50-1.2.al8
    
    perl-DateTime-Locale
    
    0.45-6.1.al7
    
    1.17-2.1.al8
    
    perl-DateTime-TimeZone
    
    1.70-2.1.al7
    
    2.19-1.1.al8
    
    perl-DB\_File
    
    1.830-6.1.al7
    
    1.842-1.3.al8
    
    perl-DBD-MySQL
    
    4.023-6.1.al7
    
    4.046-3.2.al8
    
    perl-DBD-Pg
    
    2.19.3-4.1.al7
    
    3.7.4-4.1.al8
    
    perl-DBD-SQLite
    
    1.39-3.1.al7
    
    1.58-2.3.al8
    
    perl-DBI
    
    1.627-4.1.al7
    
    1.641-4.al8
    
    perl-Devel-CheckLib
    
    0.99-2.1.al7
    
    1.11-5.1.al8
    
    perl-Devel-StackTrace
    
    1.30-2.1.al7
    
    2.03-2.1.al8
    
    perl-Devel-Symdump
    
    2.10-2.1.al7
    
    2.18-5.1.al8
    
    perl-Digest
    
    1.17-245.1.al7
    
    1.17-395.1.al8
    
    perl-Digest-HMAC
    
    1.03-5.1.al7
    
    1.03-17.1.al8
    
    perl-Digest-MD5
    
    2.52-3.1.al7
    
    2.55-396.2.al8
    
    perl-Digest-SHA
    
    5.85-4.1.al7
    
    6.02-1.2.al8
    
    perl-Digest-SHA1
    
    2.13-9.1.al7
    
    2.13-23.2.al8
    
    perl-Dist-CheckConflicts
    
    0.06-2.1.al7
    
    0.11-11.1.al8
    
    perl-Encode
    
    2.51-7.1.al7
    
    2.97-3.2.al8
    
    perl-Encode-Detect
    
    1.01-13.1.al7
    
    1.01-28.2.al8
    
    perl-Encode-Locale
    
    1.03-5.1.al7
    
    1.05-10.1.al8
    
    perl-Env
    
    1.04-2.1.al7
    
    1.04-395.1.al8
    
    perl-Error
    
    0.17020-2.1.al7
    
    0.17025-2.1.al8
    
    perl-Exception-Class
    
    1.37-3.1.al7
    
    1.44-2.1.al8
    
    perl-Exporter
    
    5.68-3.1.al7
    
    5.72-396.1.al8
    
    perl-ExtUtils-MakeMaker
    
    6.68-3.1.al7
    
    7.34-1.1.al8
    
    perl-ExtUtils-Manifest
    
    1.61-244.1.al7
    
    1.70-395.1.al8
    
    perl-ExtUtils-ParseXS
    
    3.18-3.1.al7
    
    3.35-2.1.al8
    
    perl-FCGI
    
    0.74-8.1.al7
    
    0.78-11.2.al8
    
    perl-File-CheckTree
    
    4.42-3.1.al7
    
    4.42-303.1.al8
    
    perl-File-Copy-Recursive
    
    0.38-14.1.al7
    
    0.40-3.1.al8
    
    perl-File-Fetch
    
    0.42-2.1.al7
    
    0.56-2.1.al8
    
    perl-File-Find-Rule
    
    0.33-5.1.al7
    
    0.34-8.1.al8
    
    perl-File-HomeDir
    
    1.00-4.1.al7
    
    1.002-4.1.al8
    
    perl-File-Listing
    
    6.04-7.1.al7
    
    6.04-17.1.al8
    
    perl-File-Path
    
    2.09-2.1.al7
    
    2.15-2.1.al8
    
    perl-File-pushd
    
    1.005-2.1.al7
    
    1.014-6.1.al8
    
    perl-File-Remove
    
    1.52-6.1.al7
    
    1.57-6.1.al8
    
    perl-File-ShareDir
    
    1.03-8.1.al7
    
    1.104-3.1.al8
    
    perl-File-Slurp
    
    9999.19-6.1.al7
    
    9999.19-19.1.al8
    
    perl-File-Temp
    
    0.23.01-3.1.al7
    
    0.230.600-1.1.al8
    
    perl-File-Which
    
    1.09-12.1.al7
    
    1.22-2.1.al8
    
    perl-Filter
    
    1.49-3.1.al7
    
    1.58-2.2.al8
    
    perl-Getopt-Long
    
    2.40-3.1.al7
    
    2.50-4.1.al8
    
    perl-gettext
    
    1.05-28.1.al7
    
    1.07-9.1.al8
    
    perl-GSSAPI
    
    0.28-9.1.al7
    
    0.28-25.0.1.al8
    
    perl-HTML-Parser
    
    3.71-4.1.al7
    
    3.72-15.1.al8
    
    perl-HTML-Tagset
    
    3.20-15.1.al7
    
    3.20-34.1.al8
    
    perl-HTML-Tree
    
    5.03-2.1.al7
    
    5.07-2.1.al8
    
    perl-HTTP-Cookies
    
    6.01-5.1.al7
    
    6.04-2.1.al8
    
    perl-HTTP-Daemon
    
    6.01-8.1.al7
    
    6.01-23.1.al8
    
    perl-HTTP-Date
    
    6.02-8.1.al7
    
    6.02-19.1.al8
    
    perl-HTTP-Message
    
    6.06-6.1.al7
    
    6.18-1.1.al8
    
    perl-HTTP-Negotiate
    
    6.01-5.1.al7
    
    6.01-19.1.al8
    
    perl-HTTP-Tiny
    
    0.033-3.1.al7
    
    0.074-1.1.al8
    
    perl-IO-Compress
    
    2.061-2.1.al7
    
    2.081-1.1.al8
    
    perl-IO-HTML
    
    1.00-2.1.al7
    
    1.001-11.1.al8
    
    perl-IO-Socket-INET6
    
    2.69-5.1.al7
    
    2.72-12.1.al8
    
    perl-IO-Socket-IP
    
    0.21-5.1.al7
    
    0.39-5.1.al8
    
    perl-IO-Socket-SSL
    
    1.94-7.1.al7
    
    2.066-4.1.al8
    
    perl-IO-String
    
    1.08-19.1.al7
    
    1.08-32.1.al8
    
    perl-IO-stringy
    
    2.110-22.1.al7
    
    2.111-9.1.al8
    
    perl-IO-Tty
    
    1.10-11.1.al7
    
    1.12-11.1.al8
    
    perl-IPC-Cmd
    
    0.80-4.1.al7
    
    1.02-1.1.al8
    
    perl-IPC-Run
    
    0.92-2.1.al7
    
    0.99-1.1.al8
    
    perl-IPC-Run3
    
    0.045-6.1.al7
    
    0.048-12.1.al8
    
    perl-JSON
    
    2.59-2.1.al7
    
    2.97.001-2.1.al8
    
    perl-JSON-PP
    
    2.27202-2.1.al7
    
    2.97.001-3.1.al8
    
    perl-LDAP
    
    0.56-6.1.al7
    
    0.66-7.1.al8
    
    perl-libwww-perl
    
    6.05-2.1.al7
    
    6.34-1.1.al8
    
    perl-libxml-perl
    
    0.08-19.1.al7
    
    0.08-33.1.al8
    
    perl-List-MoreUtils
    
    0.33-9.1.al7
    
    0.428-2.1.al8
    
    perl-local-lib
    
    1.008010-4.1.al7
    
    2.000024-2.1.al8
    
    perl-Locale-Codes
    
    3.26-2.1.al7
    
    3.57-1.1.al8
    
    perl-Locale-Maketext
    
    1.23-3.1.al7
    
    1.28-396.1.al8
    
    perl-LWP-MediaTypes
    
    6.02-2.1.al7
    
    6.02-15.1.al8
    
    perl-LWP-Protocol-https
    
    6.04-4.1.al7
    
    6.07-4.1.al8
    
    perl-Mail-DKIM
    
    0.39-8.1.al7
    
    1.20200907-1.0.2.al8
    
    perl-Mail-SPF
    
    2.8.0-4.1.al7
    
    2.9.0-15.1.al8
    
    perl-MailTools
    
    2.12-2.1.al7
    
    2.20-2.1.al8
    
    perl-Module-Build
    
    0.40.05-2.1.al7
    
    0.42.24-5.1.al8
    
    perl-Module-Implementation
    
    0.06-6.1.al7
    
    0.09-15.1.al8
    
    perl-Module-Install
    
    1.06-4.1.al7
    
    1.19-2.1.al8
    
    perl-Module-Load
    
    0.24-3.1.al7
    
    0.32-395.1.al8
    
    perl-Module-Load-Conditional
    
    0.54-3.1.al7
    
    0.68-395.1.al8
    
    perl-Module-Metadata
    
    1.000018-2.1.al7
    
    1.000033-395.1.al8
    
    perl-Module-Pluggable
    
    4.8-3.1.al7
    
    5.2-7.1.al8
    
    perl-Module-Runtime
    
    0.013-4.1.al7
    
    0.016-2.1.al8
    
    perl-Module-ScanDeps
    
    1.10-3.1.al7
    
    1.24-3.1.al8
    
    perl-Mozilla-CA
    
    20130114-5.1.al7
    
    20160104-7.1.al8
    
    perl-Mozilla-LDAP
    
    1.5.3-12.1.al7
    
    1.5.3-25.2.al8
    
    perl-Net-DNS
    
    0.72-6.4.al7
    
    1.15-1.1.al8
    
    perl-Net-HTTP
    
    6.06-2.1.al7
    
    6.17-2.1.al8
    
    perl-Net-SMTP-SSL
    
    1.01-13.1.al7
    
    1.04-5.1.al8
    
    perl-Net-SSLeay
    
    1.55-6.1.al7
    
    1.88-2.al8
    
    perl-NetAddr-IP
    
    4.069-3.1.al7
    
    4.079-7.2.al8
    
    perl-Number-Compare
    
    0.03-6.1.al7
    
    0.03-19.1.al8
    
    perl-Package-DeprecationManager
    
    0.13-7.1.al7
    
    0.17-5.1.al8
    
    perl-Package-Generator
    
    0.103-14.1.al7
    
    1.106-11.1.al8
    
    perl-Package-Stash
    
    0.34-2.1.al7
    
    0.37-9.1.al8
    
    perl-Package-Stash-XS
    
    0.26-3.1.al7
    
    0.28-17.2.al8
    
    perl-PadWalker
    
    1.96-3.1.al7
    
    2.3-2.2.al8
    
    perl-Params-Check
    
    0.38-2.1.al7
    
    0.38-395.1.al8
    
    perl-Params-Util
    
    1.07-6.1.al7
    
    1.07-22.2.al8
    
    perl-Params-Validate
    
    1.08-4.1.al7
    
    1.29-5.2.al8
    
    perl-parent
    
    0.225-244.1.al7
    
    0.237-1.1.al8
    
    perl-Parse-Yapp
    
    1.05-50.1.al7
    
    1.21-2.1.al8
    
    perl-PathTools
    
    3.40-5.1.al7
    
    3.74-1.2.al8
    
    perl-Perl-OSType
    
    1.003-3.1.al7
    
    1.010-396.1.al8
    
    perl-Pod-Checker
    
    1.60-2.1.al7
    
    1.73-395.1.al8
    
    perl-Pod-Coverage
    
    0.23-3.1.al7
    
    0.23-14.1.al8
    
    perl-Pod-LaTeX
    
    0.61-2.1.al7
    
    0.61-302.1.al8
    
    perl-Pod-Parser
    
    1.61-2.1.al7
    
    1.63-396.1.al8
    
    perl-Pod-Perldoc
    
    3.20-4.1.al7
    
    3.28-396.1.al8
    
    perl-Pod-Plainer
    
    1.03-4.1.al7
    
    1.04-7.1.al8
    
    perl-Pod-Simple
    
    3.28-4.1.al7
    
    3.35-395.1.al8
    
    perl-Pod-Usage
    
    1.63-3.1.al7
    
    1.69-395.1.al8
    
    perl-podlators
    
    2.5.1-3.1.al7
    
    4.11-1.1.al8
    
    perl-prefork
    
    1.04-11.1.al7
    
    1.04-26.1.al8
    
    perl-Readonly
    
    1.03-22.1.al7
    
    2.05-5.1.al8
    
    perl-Scalar-List-Utils
    
    1.27-248.1.al7
    
    1.49-2.2.al8
    
    perl-SGMLSpm
    
    1.03ii-31.1.al7
    
    1.03ii-42.1.al8
    
    perl-SNMP\_Session
    
    1.13-5.1.al7
    
    1.13-17.1.al8
    
    perl-Socket
    
    2.010-5.1.al7
    
    2.027-3.2.al8
    
    perl-Socket6
    
    0.23-15.1.al7
    
    0.28-6.2.al8
    
    perl-srpm-macros
    
    1-8.1.al7
    
    1-25.1.al8
    
    perl-Storable
    
    2.45-3.1.al7
    
    3.11-3.2.al8
    
    perl-String-CRC32
    
    1.4-19.1.al7
    
    1.6-4.2.al8
    
    perl-String-ShellQuote
    
    1.04-10.1.al7
    
    1.04-24.1.al8
    
    perl-Sub-Exporter
    
    0.986-2.1.al7
    
    0.987-15.1.al8
    
    perl-Sub-Install
    
    0.926-6.1.al7
    
    0.928-14.1.al8
    
    perl-Sub-Uplevel
    
    0.24-4.1.al7
    
    0.2800-4.1.al8
    
    perl-Switch
    
    2.16-7.1.al7
    
    2.17-10.1.al8
    
    perl-Sys-CPU
    
    0.54-4.1.al7
    
    0.61-14.2.al8
    
    perl-Sys-MemInfo
    
    0.91-7.1.al7
    
    0.99-6.2.al8
    
    perl-Sys-Syslog
    
    0.33-3.1.al7
    
    0.35-397.2.al8
    
    perl-Sys-Virt
    
    4.5.0-2.1.al7
    
    8.0.0-1.al8
    
    perl-Taint-Runtime
    
    0.03-19.1.al7
    
    0.03-32.1.al8
    
    perl-TermReadKey
    
    2.30-20.1.al7
    
    2.37-7.2.al8
    
    perl-Test-Deep
    
    0.110-2.1.al7
    
    1.127-4.1.al8
    
    perl-Test-Differences
    
    0.5000-10.1.al7
    
    0.6400-8.1.al8
    
    perl-Test-Exception
    
    0.32-2.1.al7
    
    0.43-7.1.al8
    
    perl-Test-Fatal
    
    0.010-5.1.al7
    
    0.014-9.1.al8
    
    perl-Test-Harness
    
    3.28-3.1.al7
    
    3.42-1.1.al8
    
    perl-Test-NoWarnings
    
    1.04-2.1.al7
    
    1.04-16.al8
    
    perl-Test-Pod
    
    1.48-3.1.al7
    
    1.51-8.1.al8
    
    perl-Test-Pod-Coverage
    
    1.08-21.1.al7
    
    1.10-10.1.al8
    
    perl-Test-Requires
    
    0.06-10.1.al7
    
    0.10-10.1.al8
    
    perl-Test-Simple
    
    0.98-243.1.al7
    
    1.302135-1.1.al8
    
    perl-Test-Taint
    
    1.06-5.1.al7
    
    1.06-19.1.al8
    
    perl-Test-Warn
    
    0.24-6.1.al7
    
    0.32-5.1.al8
    
    perl-Text-CharWidth
    
    0.04-18.1.al7
    
    0.04-32.1.al8
    
    perl-Text-Diff
    
    1.41-5.1.al7
    
    1.45-2.1.al8
    
    perl-Text-Glob
    
    0.09-7.1.al7
    
    0.11-4.1.al8
    
    perl-Text-ParseWords
    
    3.29-4.1.al7
    
    3.30-395.1.al8
    
    perl-Text-Soundex
    
    3.04-4.1.al7
    
    3.05-8.2.al8
    
    perl-Text-Unidecode
    
    0.04-20.1.al7
    
    1.30-5.1.al8
    
    perl-Text-WrapI18N
    
    0.06-17.1.al7
    
    0.06-30.1.al8
    
    perl-Thread-Queue
    
    3.02-2.1.al7
    
    3.13-1.1.al8
    
    perl-threads
    
    1.87-4.1.al7
    
    2.21-2.2.al8
    
    perl-threads-shared
    
    1.43-6.1.al7
    
    1.58-2.2.al8
    
    perl-Tie-IxHash
    
    1.22-11.1.al7
    
    1.23-13.1.al8
    
    perl-Time-HiRes
    
    1.9725-3.1.al7
    
    1.9758-2.1.al8
    
    perl-Time-Local
    
    1.2300-2.1.al7
    
    1.280-1.1.al8
    
    perl-TimeDate
    
    2.30-2.1.al7
    
    2.30-15.1.al8
    
    perl-Tk
    
    804.030-6.1.al7
    
    804.034-2.2.al8
    
    perl-Try-Tiny
    
    0.12-2.1.al7
    
    0.30-7.1.al8
    
    perl-URI
    
    1.60-9.1.al7
    
    1.73-3.1.al8
    
    perl-version
    
    0.99.07-6.1.al7
    
    0.99.24-1.2.al8
    
    perl-WWW-RobotRules
    
    6.02-5.1.al7
    
    6.02-18.1.al8
    
    perl-XML-Catalog
    
    1.0.1-1.1.al7
    
    1.03-11.1.al8
    
    perl-XML-DOM
    
    1.44-19.1.al7
    
    1.46-5.1.al8
    
    perl-XML-LibXML
    
    2.0018-5.1.al7
    
    2.0132-2.2.al8
    
    perl-XML-NamespaceSupport
    
    1.11-10.1.al7
    
    1.12-4.1.al8
    
    perl-XML-Parser
    
    2.41-10.1.al7
    
    2.44-11.2.al8
    
    perl-XML-RegExp
    
    0.04-2.1.al7
    
    0.04-14.1.al8
    
    perl-XML-SAX
    
    0.99-9.1.al7
    
    1.00-1.1.al8
    
    perl-XML-SAX-Base
    
    1.08-7.1.al7
    
    1.09-4.1.al8
    
    perl-XML-Simple
    
    2.20-5.1.al7
    
    2.25-1.1.al8
    
    perl-XML-TokeParser
    
    0.05-12.1.al7
    
    0.05-25.1.al8
    
    perl-XML-Twig
    
    3.44-2.1.al7
    
    3.52-7.1.al8
    
    perl-XML-XPath
    
    1.13-22.1.al7
    
    1.42-3.1.al8
    
    perl-YAML
    
    0.84-5.1.al7
    
    1.24-3.1.al8
    
    perl-YAML-Syck
    
    1.27-3.1.al7
    
    1.30-5.1.al8
    
    perl-YAML-Tiny
    
    1.51-6.1.al7
    
    1.73-2.1.al8
    
    perltidy
    
    20121207-3.1.al7
    
    20180220-1.1.al8
    
    pesign
    
    0.109-11.1.al7
    
    0.112-27.0.1.al8
    
    php
    
    5.4.16-48.1.al7
    
    7.4.33-1.0.1.al8
    
    php-pear
    
    1.9.4-23.1.al7
    
    1.10.13-1.0.1.al8
    
    pidgin
    
    2.10.11-9.1.al7
    
    2.13.0-5.2.al8
    
    pidgin-sipe
    
    1.20.1-2.4.al7
    
    1.23.2-1.2.al8
    
    pinentry
    
    0.8.1-17.4.al7
    
    1.1.1-8.al8
    
    pinfo
    
    0.6.10-9.1.al7
    
    0.6.10-18.2.al8
    
    pixman
    
    0.34.0-1.4.al7
    
    0.40.0-5.al8
    
    pki-core
    
    10.5.18-27.1.al7
    
    10.14.3-1.al8
    
    plexus-ant-factory
    
    1.0-0.12.a2.3.1.al7
    
    1.0-0.20.a2.2.1.al8
    
    plexus-archiver
    
    2.4.2-5.1.al7
    
    4.2.0-2.1.al8
    
    plexus-bsh-factory
    
    1.0-0.14.a7.1.al7
    
    1.0-0.19.a7.1.al8
    
    plexus-build-api
    
    0.0.7-11.1.al7
    
    0.0.7-20.1.al8
    
    plexus-cipher
    
    1.7-5.1.al7
    
    1.7-17.al8
    
    plexus-classworlds
    
    2.4.2-8.1.al7
    
    2.6.0-4.1.al8
    
    plexus-cli
    
    1.2-20.1.al7
    
    1.6-6.1.al8
    
    plexus-compiler
    
    2.2-7.1.al7
    
    2.8.2-2.2.al8
    
    plexus-component-api
    
    1.0-0.16.alpha15.1.al7
    
    1.0-0.24.alpha15.1.al8
    
    plexus-component-factories-pom
    
    1.0-0.7.alpha11.1.al7
    
    1.0-0.15.alpha11.1.al8
    
    plexus-components-pom
    
    1.2-7.1.al7
    
    4.0-2.1.al8
    
    plexus-containers
    
    1.5.5-14.1.al7
    
    2.1.0-2.al8
    
    plexus-i18n
    
    1.0-0.6.b10.4.1.al7
    
    1.0-0.11.b10.4.1.al8
    
    plexus-interactivity
    
    1.0-0.14.alpha6.1.al7
    
    1.0-0.27.alpha6.1.al8
    
    plexus-interpolation
    
    1.15-8.1.al7
    
    1.26-3.1.al8
    
    plexus-io
    
    2.0.5-9.1.al7
    
    3.2.0-2.1.al8
    
    plexus-pom
    
    3.3.1-5.1.al7
    
    5.0-2.1.al8
    
    plexus-resources
    
    1.0-0.15.a7.1.al7
    
    1.0-0.23.a7.1.al8
    
    plexus-sec-dispatcher
    
    1.4-13.1.al7
    
    1.4-29.al8
    
    plexus-utils
    
    3.0.9-9.1.al7
    
    3.3.0-3.al8
    
    plexus-velocity
    
    1.1.8-16.1.al7
    
    1.2-4.1.al8
    
    plymouth
    
    0.8.9-0.34.20140113.1.al7
    
    0.9.4-11.20200615git1e36e30.0.1.al8
    
    pmdk-convert
    
    1.5-1.1.al7
    
    1.7-1.1.al8
    
    pnm2ppa
    
    1.04-28.1.al7
    
    1.04-40.2.al8
    
    po4a
    
    0.44-10.1.al7
    
    0.63-1.al8
    
    policycoreutils
    
    2.5-34.1.al7
    
    2.9-24.al8
    
    polkit
    
    0.112-26.4.al7.1
    
    0.115-15.al8
    
    polkit-pkla-compat
    
    0.1-4.1.al7
    
    0.1-12.2.al8
    
    poppler
    
    0.26.5-43.1.al7
    
    20.11.0-6.0.1.al8
    
    poppler-data
    
    0.4.6-3.1.al7
    
    0.4.9-1.1.al8
    
    popt
    
    1.13-16.1.al7
    
    1.18-1.1.al8
    
    portreserve
    
    0.0.5-11.4.al7
    
    0.0.5-19.2.al8
    
    postfix
    
    2.10.1-9.1.al7
    
    3.5.8-4.al8
    
    postgresql
    
    9.2.24-8.1.al7
    
    13.11-1.0.1.al8
    
    postgresql-jdbc
    
    9.2.1002-8.1.al7
    
    42.2.14-2.al8
    
    postgresql-odbc
    
    09.03.0100-2.1.al7
    
    10.03.0000-3.0.1.al8
    
    powertop
    
    2.9-1.1.al7
    
    2.15-1.0.1.al8
    
    ppp
    
    2.4.5-34.1.al7
    
    2.4.7-26.1.al8
    
    pps-tools
    
    0-0.9.20120407git0deb9c.1.al7
    
    1.0.2-1.1.al8
    
    pptp
    
    1.7.2-22.1.al7
    
    1.10.0-4.1.al8
    
    procmail
    
    3.22-36.1.al7.1
    
    3.22-47.2.al8
    
    procps-ng
    
    3.3.10-28.1.al7
    
    3.3.15-13.0.1.al8
    
    protobuf
    
    2.5.0-8.1.al7
    
    3.5.0-15.al8
    
    protobuf-c
    
    1.0.2-3.4.al7
    
    1.3.0-6.1.al8
    
    ps\_mem
    
    3.1-7.4.al7
    
    3.6-9.al8
    
    psacct
    
    6.6.1-13.1.al7
    
    6.6.3-4.2.al8
    
    psmisc
    
    22.20-17.1.al7
    
    23.1-5.1.al8
    
    pulseaudio
    
    10.0-6.1.al7
    
    15.0-2.0.1.al8
    
    pyatspi
    
    2.26.0-3.1.al7
    
    2.26.0-6.1.al8
    
    pycairo
    
    1.8.10-8.1.al7
    
    1.16.3-6.2.al8
    
    pygobject2
    
    2.28.6-11.1.al7
    
    2.28.7-4.2.al8
    
    pygobject3
    
    3.22.0-1.1.al7.1
    
    3.40.1-6.0.1.al8
    
    pygtk2
    
    2.24.0-9.1.al7
    
    2.24.0-24.2.al8
    
    pykickstart
    
    1.99.66.22-1.1.al7
    
    3.16.15-1.al8
    
    pyOpenSSL
    
    0.13.1-4.1.al7
    
    19.0.0-1.1.al8
    
    pyparsing
    
    1.5.6-9.1.al7
    
    2.1.10-7.1.al8
    
    pyparted
    
    3.9-15.1.al7
    
    3.11.7-4.0.1.al8
    
    pyserial
    
    2.6-6.1.al7
    
    3.1.1-8.1.al8
    
    pytest
    
    2.7.0-2.1.al7
    
    3.4.2-11.1.al8
    
    python-augeas
    
    0.5.0-2.1.al7
    
    0.5.0-12.1.al8
    
    python-blivet
    
    0.61.15.76-1.1.al7
    
    3.6.0-4.0.1.al8
    
    python-cffi
    
    1.6.0-5.4.al7
    
    1.11.5-5.2.al8
    
    python-chardet
    
    2.2.1-3.1.al7
    
    3.0.4-7.1.al8
    
    python-configobj
    
    4.7.2-7.1.al7
    
    5.0.6-11.1.al8
    
    python-configshell
    
    1.1.26-1.1.al7
    
    1.1.28-1.1.al8
    
    python-coverage
    
    3.6-0.5.b3.1.al7
    
    4.5.1-9.al8
    
    python-cpio
    
    0.1-16.1.al7
    
    0.1-29.1.al8
    
    python-cryptography
    
    1.7.2-2.1.al7
    
    3.2.1-5.al8
    
    python-cups
    
    1.9.63-6.1.al7
    
    1.9.72-21.2.al8.0.1
    
    python-dateutil
    
    1.5-7.1.al7
    
    2.6.1-6.1.al8
    
    python-decorator
    
    3.4.0-3.1.al7
    
    4.2.1-2.1.al8
    
    python-dmidecode
    
    3.12.2-4.1.al7
    
    3.12.3-2.al8
    
    python-dns
    
    1.12.0-4.20150617git465785f.1.al7
    
    1.15.0-11.al8
    
    python-ethtool
    
    0.8-8.1.al7
    
    0.14-5.al8
    
    python-flask
    
    0.10.1-7.1.al7
    
    0.12.2-4.1.al8
    
    python-gssapi
    
    1.2.0-3.1.al7
    
    1.5.1-5.2.al8
    
    python-hwdata
    
    1.7.3-4.1.al7
    
    2.3.6-3.1.al8
    
    python-idna
    
    2.4-1.1.al7
    
    2.5-5.1.al8
    
    python-iniparse
    
    0.4-9.1.al7
    
    0.4-31.1.al8
    
    python-inotify
    
    0.9.4-4.1.al7
    
    0.9.6-13.1.al8
    
    python-jinja2
    
    2.7.2-4.1.al7
    
    2.10.1-3.0.1.al8
    
    python-jsonpatch
    
    1.2-4.1.al7
    
    1.21-2.1.al8
    
    python-jsonpointer
    
    1.9-2.1.al7
    
    1.10-11.1.al8
    
    python-jsonschema
    
    2.5.1-4.0.1.al7
    
    2.6.0-4.1.al8
    
    python-jwcrypto
    
    0.4.2-1.1.al7
    
    0.5.0-1.1.al8
    
    python-jwt
    
    1.5.3-1.1.al7
    
    1.6.1-2.1.al8
    
    python-kdcproxy
    
    0.3.2-3.1.al7
    
    0.4-5.3.al8
    
    python-kmod
    
    0.9-4.1.al7
    
    0.9-20.2.al8
    
    python-ldap
    
    2.4.15-2.1.al7
    
    3.3.1-2.al8
    
    python-linux-procfs
    
    0.4.11-4.1.al7
    
    0.7.1-1.al8
    
    python-lxml
    
    3.2.1-4.1.al7
    
    4.2.3-4.0.1.al8
    
    python-mako
    
    0.8.1-2.1.al7
    
    1.0.6-14.al8
    
    python-markupsafe
    
    0.11-10.1.al7
    
    0.23-19.2.al8
    
    python-meh
    
    0.25.3-1.1.al7
    
    0.47.2-1.1.al8
    
    python-netaddr
    
    0.7.5-9.1.al7
    
    0.7.19-8.1.al8
    
    python-netifaces
    
    0.10.4-3.4.al7
    
    0.10.6-4.2.al8
    
    python-nss
    
    0.16.0-3.1.al7
    
    1.0.1-10.1.al8
    
    python-ntplib
    
    0.3.2-1.1.al7
    
    0.3.3-10.1.al8
    
    python-oauthlib
    
    2.0.1-8.1.al7
    
    2.1.0-1.1.al8
    
    python-pillow
    
    2.0.0-23.gitd1c6db8.1.al7
    
    5.1.1-18.al8
    
    python-pip
    
    9.0.3-8.1.al7
    
    9.0.3-22.0.1.al8
    
    python-ply
    
    3.4-11.1.al7
    
    3.9-9.1.al8
    
    python-prettytable
    
    0.7.2-3.1.al7
    
    0.7.2-14.1.al8
    
    python-psycopg2
    
    2.5.1-4.1.al7
    
    2.7.5-7.2.al8
    
    python-py
    
    1.4.32-1.1.al7
    
    1.5.3-4.1.al8
    
    python-pyasn1
    
    0.1.9-7.4.al7
    
    0.3.7-6.1.al8
    
    python-pycparser
    
    2.14-1.1.al7
    
    2.14-14.1.al8
    
    python-pycurl
    
    7.19.0-19.4.al7
    
    7.43.0.2-4.1.al8
    
    python-pyudev
    
    0.15-9.1.al7
    
    0.21.0-7.1.al8
    
    python-qrcode
    
    5.0.1-1.1.al7
    
    5.1-12.1.al8
    
    python-reportlab
    
    2.5-10.1.al7
    
    3.4.0-8.1.al8
    
    python-requests
    
    2.6.0-10.1.al7
    
    2.20.0-3.0.1.al8
    
    python-requests-oauthlib
    
    0.8.0-5.1.al7
    
    1.0.0-1.1.al8
    
    python-rpm-generators
    
    6-2.1.al7
    
    5-8.al8
    
    python-rpm-macros
    
    3-34.1.al7
    
    3-45.al8
    
    python-rtslib
    
    2.1.74-1.1.al7
    
    2.1.75-4.al8
    
    python-schedutils
    
    0.4-6.4.al7
    
    0.6-6.2.al8
    
    python-setuptools
    
    0.9.8-7.1.al7
    
    39.2.0-7.al8
    
    python-six
    
    1.9.0-2.1.al7
    
    1.11.0-8.1.al8
    
    python-slip
    
    0.4.0-4.1.al7
    
    0.6.4-13.al8
    
    python-sphinx
    
    1.1.3-11.4.al7
    
    1.7.6-3.al8
    
    python-suds
    
    0.4.1-5.1.al7
    
    0.7-0.11.94664ddd46a6.al8
    
    python-urllib3
    
    1.10.2-7.1.al7
    
    1.24.2-5.1.al8
    
    python-urwid
    
    1.1.1-3.1.al7
    
    1.3.1-4.2.al8
    
    python-yubico
    
    1.2.3-1.1.al7
    
    1.3.2-9.1.al8
    
    python3
    
    3.6.8-19.1.al7
    
    3.6.8-51.0.1.al8.1
    
    pytz
    
    2016.10-2.1.al7
    
    2017.2-9.1.al8
    
    pyusb
    
    1.0.0-0.11.b1.1.al7
    
    1.0.0-9.1.al8
    
    pywbem
    
    0.7.0-25.20130827svn625.1.al7
    
    0.11.0-8.1.al8
    
    pyxattr
    
    0.5.1-5.1.al7
    
    0.5.3-18.1.al8
    
    PyYAML
    
    3.10-11.1.al7
    
    3.12-12.2.al8
    
    qdox
    
    1.12.1-10.4.al7
    
    2.0-3.M9.1.al8
    
    qemu-kvm
    
    1.5.3-175.1.al7.6
    
    6.2.0-33.0.2.al8
    
    qgnomeplatform
    
    0.3-5.2.al7
    
    0.7.1-3.0.2.al8
    
    qpdf
    
    5.0.1-4.1.al7
    
    7.1.1-10.3.al8
    
    qperf
    
    0.4.9-3.4.al7
    
    0.4.11-2.al8
    
    qrencode
    
    3.4.1-3.1.al7
    
    3.4.4-5.2.al8
    
    qt5-qt3d
    
    5.9.7-1.1.al7
    
    5.15.3-1.al8
    
    qt5-qtbase
    
    5.9.7-5.1.al7
    
    5.15.3-1.0.1.al8
    
    qt5-qtcanvas3d
    
    5.9.7-1.1.al7
    
    5.12.5-4.al8
    
    qt5-qtconnectivity
    
    5.9.7-1.1.al7
    
    5.15.3-1.al8
    
    qt5-qtdeclarative
    
    5.9.7-1.1.al7
    
    5.15.3-1.al8
    
    qt5-qtdoc
    
    5.9.7-1.1.al7
    
    5.15.3-1.al8
    
    qt5-qtgraphicaleffects
    
    5.9.7-1.1.al7
    
    5.15.3-1.al8
    
    qt5-qtimageformats
    
    5.9.7-2.1.al7
    
    5.15.3-1.al8
    
    qt5-qtlocation
    
    5.9.7-1.1.al7
    
    5.15.3-1.0.1.al8
    
    qt5-qtmultimedia
    
    5.9.7-1.1.al7
    
    5.15.3-1.al8
    
    qt5-qtquickcontrols
    
    5.9.7-1.1.al7
    
    5.15.3-1.al8
    
    qt5-qtquickcontrols2
    
    5.9.7-1.1.al7
    
    5.15.3-1.al8
    
    qt5-qtscript
    
    5.9.7-1.1.al7
    
    5.15.3-1.0.1.al8
    
    qt5-qtsensors
    
    5.9.7-1.1.al7
    
    5.15.3-1.al8
    
    qt5-qtserialbus
    
    5.9.7-1.1.al7
    
    5.15.3-1.al8
    
    qt5-qtserialport
    
    5.9.7-1.1.al7
    
    5.15.3-1.al8
    
    qt5-qtsvg
    
    5.9.7-1.1.al7
    
    5.15.3-1.al8
    
    qt5-qttools
    
    5.9.7-1.1.al7
    
    5.15.3-4.0.1.al8
    
    qt5-qttranslations
    
    5.9.7-1.1.al7
    
    5.15.3-1.al8
    
    qt5-qtwayland
    
    5.9.7-1.1.al7
    
    5.15.3-1.0.1.al8
    
    qt5-qtwebchannel
    
    5.9.7-1.1.al7
    
    5.15.3-1.al8
    
    qt5-qtwebsockets
    
    5.9.7-1.1.al7
    
    5.15.3-1.al8
    
    qt5-qtx11extras
    
    5.9.7-1.1.al7
    
    5.15.3-1.al8
    
    qt5-qtxmlpatterns
    
    5.9.7-1.1.al7
    
    5.15.3-1.al8
    
    quota
    
    4.01-19.1.al7
    
    4.06-6.al8
    
    radvd
    
    2.17-3.1.al7
    
    2.19-5.0.1.al8
    
    raptor2
    
    2.0.9-3.1.al7
    
    2.0.15-16.1.al8
    
    rarian
    
    0.8.1-11.1.al7
    
    0.8.1-19.2.al8
    
    rasdaemon
    
    0.4.1-37.1.al7
    
    0.6.7-9.al8
    
    rasqal
    
    0.9.30-4.1.al7
    
    0.9.33-6.2.al8
    
    rdma-core
    
    22.4-6.1.al7
    
    44.0-2.0.1.al8.1
    
    readline
    
    6.2-11.1.al7
    
    7.0-10.2.al8
    
    realmd
    
    0.16.1-12.1.al7.1
    
    0.17.1-1.0.1.al8
    
    rear
    
    2.4-17.1.al7
    
    2.6-9.0.1.al8
    
    recode
    
    3.6-38.1.al7
    
    3.6-47.2.al8
    
    redfish-finder
    
    0.3-4.1.al7
    
    0.4-9.al8
    
    redhat-menus
    
    12.0.2-8.4.al7
    
    12.0.2-12.1.al8
    
    redhat-rpm-config
    
    9.1.0-88.2.al7
    
    125-1.4.al8
    
    redhat-support-lib-python
    
    0.12.1-1.1.al7
    
    0.13.0-0.0.1.al8
    
    redhat-support-tool
    
    0.12.2-1.1.al7
    
    0.13.0-0.0.1.al8
    
    redland
    
    1.0.16-6.1.al7
    
    1.0.17-14.1.al8
    
    regexp
    
    1.5-13.1.al7
    
    1.5-28.1.al8
    
    relaxngDatatype
    
    1.0-11.1.al7
    
    2011.1-7.1.al8
    
    rest
    
    0.8.1-2.1.al7
    
    0.8.1-2.2.al8
    
    rhn-client-tools
    
    2.0.2-24.1.al7
    
    2.8.16-13.2.al8
    
    rhnlib
    
    2.5.65-8.1.al7
    
    2.8.6-8.1.al8
    
    rhnsd
    
    5.0.13-10.1.al7
    
    5.0.35-3.2.al8
    
    rhythmbox
    
    3.4.2-2.1.al7
    
    3.4.2-8.2.al8
    
    rng-tools
    
    6.3.1-5.1.al7
    
    6.15-3.0.1.al8
    
    rootfiles
    
    8.1-11.1.al7
    
    8.1-22.1.al8
    
    rpcbind
    
    0.2.0-49.1.al7
    
    1.2.5-10.0.1.al8
    
    rpm
    
    4.11.3-48.1.al7
    
    4.14.3-26.0.4.al8
    
    rpmdevtools
    
    8.3-8.1.al7
    
    8.10-8.1.al8
    
    rpmlint
    
    1.5-4.1.al7
    
    1.10-14.1.al8
    
    rrdtool
    
    1.4.8-9.1.al7
    
    1.7.2-21.al8
    
    rsync
    
    3.1.2-12.1.al7
    
    3.1.3-19.0.1.al8.1
    
    rsyslog
    
    8.24.0-57.1.al7.3
    
    8.2102.0-13.al8
    
    rtkit
    
    0.11-10.1.al7
    
    0.11-19.2.al8
    
    ruby
    
    2.0.0.648-39.1.al7
    
    2.7.8-139.0.1.al8
    
    rubygem-abrt
    
    0.3.0-1.1.al7
    
    0.4.0-1.1.al8
    
    saab-fonts
    
    0.91-10.1.al7
    
    0.91-18.0.1.al8
    
    sac
    
    1.3-17.1.al7
    
    1.3-30.al8
    
    samba
    
    4.10.16-25.1.al7
    
    4.17.5-3.0.1.al8
    
    samyak-fonts
    
    1.2.2-12.1.al7
    
    1.2.2-19.1.al8
    
    sane-backends
    
    1.0.24-12.2.al7
    
    1.0.32-7.al8
    
    sane-frontends
    
    1.0.14-19.1.al7
    
    1.0.14-30.2.al8
    
    sanlock
    
    3.7.3-1.1.al7
    
    3.8.4-4.0.1.al8
    
    sassist
    
    0.8.5-2.1.al7
    
    0.8.6-1.1.al8
    
    satyr
    
    0.13-15.1.al7
    
    0.26-2.2.al8
    
    sbc
    
    1.0-5.1.al7
    
    1.4-9.al8
    
    sbd
    
    1.4.0-15.1.al7
    
    1.5.1-2.0.1.al8
    
    sblim-cmpi-base
    
    1.6.2-8.4.al7
    
    1.6.4-14.1.al8
    
    sblim-cmpi-devel
    
    2.0.3-5.1.al7
    
    2.0.3-15.2.al8
    
    sblim-indication\_helper
    
    0.4.2-12.1.al7
    
    0.5.0-2.2.al8
    
    sblim-sfcb
    
    1.3.16-12.1.al7
    
    1.4.9-17.1.al8
    
    sblim-sfcc
    
    2.2.5-6.1.al7
    
    2.2.8-9.2.al8
    
    sblim-wbemcli
    
    1.6.2-11.1.al7
    
    1.6.3-16.0.1.al8
    
    scap-security-guide
    
    0.1.69-1.1.al7
    
    0.1.69-2.0.2.al8
    
    scl-utils
    
    20130529-19.1.al7
    
    2.0.3-4.al8
    
    scrub
    
    2.5.2-7.1.al7
    
    2.6.1-4.al8
    
    SDL
    
    1.2.15-17.1.al7
    
    1.2.15-39.1.al8
    
    seabios
    
    1.11.0-2.2.al7
    
    1.16.0-4.al8
    
    seahorse
    
    3.20.0-1.1.al7
    
    3.20.0-9.2.al8
    
    sed
    
    4.2.2-7.1.al7
    
    4.5-5.0.1.al8
    
    selinux-policy
    
    3.13.1-268.1.al7.2
    
    3.14.3-117.0.1.al8
    
    sendmail
    
    8.14.7-6.1.al7
    
    8.16.1-10.al8
    
    setools
    
    3.3.8-4.1.al7
    
    4.3.0-3.al8
    
    setroubleshoot
    
    3.2.30-8.1.al7
    
    3.3.26-5.0.1.al8
    
    setroubleshoot-plugins
    
    3.0.67-4.1.al7
    
    3.3.14-1.0.1.al8
    
    setserial
    
    2.17-33.1.al7
    
    2.17-45.2.al8
    
    setup
    
    2.8.71-11.1.al7
    
    2.12.2-9.0.1.al8
    
    sg3\_utils
    
    1.37-19.1.al7
    
    1.44-6.0.1.al8
    
    sgabios
    
    0.20110622svn-4.2.al7
    
    0.20170427git-3.3.al8
    
    sgml-common
    
    0.6.3-39.1.al7
    
    0.6.3-50.1.al8
    
    sgpio
    
    1.2.0.10-13.1.al7
    
    1.2.0.10-21.2.al8
    
    shadow-utils
    
    4.6-5.1.al7
    
    4.6-17.0.1.al8
    
    shared-mime-info
    
    1.8-5.1.al7
    
    2.1-5.0.1.al8
    
    sharutils
    
    4.13.3-8.1.al7
    
    4.15.2-11.1.al8
    
    shim
    
    15-8.1.al7
    
    15.6-1.0.1.al8
    
    si-units
    
    0.6.5-1.1.al7
    
    0.6.5-2.1.al8
    
    sil-abyssinica-fonts
    
    1.200-6.1.al7
    
    1.200-13.1.al8
    
    sil-nuosu-fonts
    
    2.1.1-5.1.al7
    
    2.200-2.0.1.al8
    
    sil-padauk-fonts
    
    2.8-5.1.al7
    
    3.003-1.1.al8
    
    sip
    
    4.14.6-4.1.al7
    
    4.19.25-1.al8
    
    sisu
    
    2.3.0-11.1.al7
    
    0.3.4-2.1.al8
    
    skkdic
    
    20130104-6.T1435.1.al7
    
    20170102-4.T1100.1.al8
    
    slang
    
    2.2.4-11.1.al7
    
    2.3.2-3.2.al8
    
    slapi-nis
    
    0.60.0-3.1.al7
    
    0.60.0-3.0.1.al8
    
    slf4j
    
    1.7.4-4.1.al7
    
    1.7.28-3.al8
    
    smartmontools
    
    7.0-2.1.al7
    
    7.1-1.1.al8
    
    smc-fonts
    
    6.0-7.1.al7
    
    6.1-10.1.al8
    
    snappy
    
    1.1.0-3.1.al7
    
    1.1.8-3.1.al8
    
    socat
    
    1.7.3.2-2.2.al7
    
    1.7.4.1-1.0.1.al8
    
    softhsm
    
    2.1.0-3.1.al7
    
    2.6.0-5.1.al8
    
    sonatype-oss-parent
    
    7-6.1.al7
    
    7-14.1.al8
    
    sonatype-plugins-parent
    
    8-6.1.al7
    
    8-12.1.al8
    
    sos
    
    3.9-5.1.al7.11
    
    4.6.0-2.1.al8
    
    sos-collector
    
    1.8-2.1.al7
    
    1.8-2.1.al8
    
    sound-theme-freedesktop
    
    0.8-3.1.al7
    
    0.8-9.1.al8
    
    soundtouch
    
    1.4.0-9.1.al7
    
    2.1.1-8.al8
    
    source-highlight
    
    3.1.6-6.1.al7
    
    3.1.9-11.al8
    
    spamassassin
    
    3.4.0-6.1.al7
    
    3.4.6-1.0.1.al8
    
    speech-dispatcher
    
    0.7.1-15.1.al7
    
    0.8.8-6.2.al8
    
    speex
    
    1.2-0.19.rc1.1.al7
    
    1.2.0-1.2.al8
    
    spice
    
    0.14.0-9.1.al7.1
    
    0.14.3-4.1.al8
    
    spice-gtk
    
    0.35-5.1.al7.1
    
    0.39-5.al8
    
    spice-parent
    
    15-11.1.al7
    
    26-8.1.al8
    
    spice-protocol
    
    0.12.14-1.1.al7
    
    0.14.3-4.0.1.al8
    
    spice-streaming-agent
    
    0.2-4.1.al7
    
    0.3-2.1.al8
    
    spice-vdagent
    
    0.14.0-18.1.al7
    
    0.21.0-5.al8
    
    sqlite
    
    3.7.17-8.1.al7.1
    
    3.26.0-18.al8
    
    squashfs-tools
    
    4.3-0.21.gitaae0aff4.1.al7
    
    4.3-20.1.al8
    
    squid
    
    3.5.20-17.1.al7.8
    
    4.15-6.al8
    
    sssd
    
    1.16.5-10.1.al7.15
    
    2.8.2-3.al8
    
    star
    
    1.5.2-13.1.al7
    
    1.5.3-13.2.al8
    
    startup-notification
    
    0.12-8.1.al7
    
    0.12-15.2.al8
    
    stax-ex
    
    1.7.1-6.1.al7
    
    1.7.7-8.1.al8
    
    stix-fonts
    
    1.1.0-5.1.al7
    
    1.1.0-12.1.al8
    
    strace
    
    4.12-9.1.al7
    
    5.18-2.0.1.al8
    
    stunnel
    
    4.56-6.1.al7
    
    5.56-5.1.al8
    
    subscription-manager
    
    1.24.52-2.1.al7
    
    1.28.13-2.2.al8
    
    subversion
    
    1.7.14-16.1.al7
    
    1.14.1-2.1.al8
    
    sudo
    
    1.8.23-10.1.al7.3
    
    1.8.29-10.al8
    
    suitesparse
    
    4.0.2-10.1.al7
    
    4.4.6-11.2.al8
    
    supermin
    
    5.1.19-1.2.al7
    
    5.2.1-2.0.2.al8
    
    sushi
    
    3.28.3-1.1.al7
    
    3.28.3-1.2.al8
    
    swig
    
    2.0.10-5.1.al7
    
    4.1.1-1.al8
    
    symlinks
    
    1.4-10.1.al7
    
    1.4-19.2.al8
    
    sysfsutils
    
    2.1.0-16.1.al7
    
    2.1.0-25.0.1.al8
    
    syslinux
    
    4.05-15.1.al7
    
    6.04-6.0.1.al8
    
    sysstat
    
    10.1.5-20.1.al7
    
    11.7.3-9.0.1.al8
    
    system-config-printer
    
    1.4.1-23.1.al7
    
    1.5.11-13.2.al8
    
    system-storage-manager
    
    0.4-9.1.al7
    
    1.4-1.1.al8
    
    systemd
    
    219-78.5.al7.3
    
    239-74.0.3.al8
    
    systemtap
    
    4.0-13.1.al7
    
    4.8-2.0.2.al8
    
    taglib
    
    1.8-8.20130218git.1.al7
    
    1.11.1-8.2.al8
    
    tagsoup
    
    1.2.1-8.1.al7
    
    1.2.1-15.1.al8
    
    tang
    
    6-2.1.al7
    
    7-6.1.al8
    
    tar
    
    1.26-35.1.al7
    
    1.30-9.0.1.al8
    
    targetcli
    
    2.1.53-1.1.al7
    
    2.1.53-2.1.al8
    
    tbb
    
    4.1-9.20130314.1.al7
    
    2018.2-9.2.al8
    
    tboot
    
    1.9.9-1.1.al7
    
    1.10.5-2.al8
    
    tcl
    
    8.5.13-8.1.al7
    
    8.6.8-2.2.al8
    
    tcpdump
    
    4.9.2-4.1.al7.1
    
    4.9.3-3.0.1.al8
    
    tcsh
    
    6.18.01-17.1.al7.1
    
    6.22.03-6.al8
    
    teckit
    
    2.5.1-11.1.al7
    
    2.5.8-1.2.al8
    
    telnet
    
    0.17-66.1.al7
    
    0.17-76.1.al8
    
    testng
    
    6.8.7-3.1.al7
    
    6.14.3-5.1.al8
    
    tex-fonts-hebrew
    
    0.1-21.1.al7
    
    0.1-28.1.al8
    
    texi2html
    
    1.82-10.1.al7
    
    5.0-8.1.al8
    
    texinfo
    
    5.1-5.1.al7
    
    6.5-7.0.1.al8
    
    texlive
    
    2012-45.20130427\_r30134.1.al7
    
    20200406-26.0.2.al8
    
    tftp
    
    5.2-22.1.al7
    
    5.2-26.0.1.al8
    
    thai-scalable-fonts
    
    0.5.0-7.1.al7
    
    0.7.2-5.al8
    
    thunderbird
    
    78.8.0-1.1.al7
    
    68.5.0-1.3.al8
    
    tibetan-machine-uni-fonts
    
    1.901-12.1.al7
    
    1.901-20.1.al8
    
    tigervnc
    
    1.8.0-25.1.al7
    
    1.12.0-15.al8
    
    time
    
    1.7-45.1.al7
    
    1.9-3.2.al8
    
    tix
    
    8.4.3-12.1.al7
    
    8.4.3-23.2.al8
    
    tk
    
    8.5.13-6.1.al7
    
    8.6.8-1.2.al8
    
    tmpwatch
    
    2.11-6.1.al7
    
    2.11-14.2.al8
    
    tmux
    
    1.8-4.1.al7
    
    2.7-1.2.al8
    
    tog-pegasus
    
    2.14.1-8.1.al7
    
    2.14.1-46.1.al8
    
    tokyocabinet
    
    1.4.48-3.1.al7
    
    1.4.48-10.2.al8
    
    tomcatjss
    
    7.2.5-1.1.al7
    
    7.7.1-1.al8
    
    totem
    
    3.26.2-1.1.al7
    
    3.38.2-1.0.2.al8
    
    totem-pl-parser
    
    3.26.1-1.1.al7
    
    3.26.6-2.0.1.al8
    
    tpm-quote-tools
    
    1.0.2-3.1.al7
    
    1.0.3-4.2.al8
    
    tpm-tools
    
    1.3.9-6.1.al7
    
    1.3.9.2-1.1.al8
    
    tpm2-abrmd
    
    1.1.0-11.1.al7
    
    2.3.3-3.0.1.al8
    
    tpm2-tools
    
    3.0.4-3.1.al7
    
    4.1.1-5.0.4.al8
    
    tpm2-tss
    
    1.4.0-3.1.al7
    
    2.3.2-4.0.2.al8
    
    trace-cmd
    
    2.7.0-3.1.al7
    
    2.7-10.0.1.al8
    
    traceroute
    
    2.0.22-2.1.al7
    
    2.1.0-6.2.al8
    
    tracker
    
    1.10.5-8.1.al7
    
    3.1.2-3.0.1.al8
    
    transfig
    
    3.2.5d-13.1.al7
    
    3.2.6a-4.1.al8
    
    tree
    
    1.6.0-10.1.al7
    
    1.7.0-15.2.al8
    
    trousers
    
    0.3.14-2.1.al7
    
    0.3.15-1.1.al8
    
    ttmkfdir
    
    3.0.9-42.1.al7
    
    3.0.9-54.2.al8
    
    tuna
    
    0.13-9.1.al7
    
    0.18-6.0.1.al8
    
    tuned
    
    2.11.0-8.1.al7
    
    2.20.0-1.0.2.al8
    
    tzdata
    
    2023c-1.1.al7
    
    2023c-1.0.1.al8
    
    ucs-miscfixed-fonts
    
    0.3-11.1.al7
    
    0.3-17.1.al8
    
    ucx
    
    1.5.2-1.1.al7
    
    1.13.1-2.0.1.al8
    
    udftools
    
    1.0.0b3-26.1.al7
    
    2.3-2.al8
    
    udisks2
    
    2.8.4-1.1.al7
    
    2.9.0-13.0.1.al8
    
    unbound
    
    1.6.6-5.1.al7
    
    1.16.2-5.al8
    
    unicode-ucd
    
    6.3.0-2.1.al7
    
    11.0.0-2.0.1.al8
    
    unit-api
    
    1.0-3.1.al7
    
    1.0-5.1.al8
    
    units
    
    2.01-5.1.al7
    
    2.17-5.2.al8
    
    unixODBC
    
    2.3.1-14.1.al7
    
    2.3.7-1.2.al8
    
    unzip
    
    6.0-22.1.al7
    
    6.0-46.0.1.al8
    
    uom-lib
    
    1.0.1-5.1.al7
    
    1.0.1-6.1.al8
    
    uom-parent
    
    1.0.3-2.1.al7
    
    1.0.3-3.1.al8
    
    update-motd
    
    1.1.2-2.1.al7
    
    1.1.2-2.5.al8
    
    upower
    
    0.99.7-1.1.al7
    
    0.99.14-1.0.2.al8
    
    urlview
    
    0.9-15.20121210git6cfcad.1.al7
    
    0.9-23.20131022git08767a.2.al8
    
    urw-base35-fonts
    
    20170801-10.1.al7
    
    20200910-6.al8
    
    usb\_modeswitch
    
    2.5.1-1.1.al7
    
    2.5.2-1.2.al8
    
    usb\_modeswitch-data
    
    20170806-1.1.al7
    
    20191128-1.1.al8
    
    usbguard
    
    0.7.4-3.4.al7
    
    1.0.0-13.0.1.al8
    
    usbmuxd
    
    1.1.0-1.1.al7
    
    1.1.1-8.al8
    
    usbredir
    
    0.7.1-3.1.al7
    
    0.13.0-2.al8
    
    usbutils
    
    007-5.1.al7
    
    010-3.2.al8
    
    usermode
    
    1.111-6.1.al7
    
    1.113-2.0.1.al8
    
    ustr
    
    1.0.4-16.1.al7
    
    1.0.4-26.1.al8
    
    util-linux
    
    2.23.2-65.1.al7.1
    
    2.32.1-42.0.1.al8
    
    uuid
    
    1.6.2-26.1.al7
    
    1.6.2-43.1.al8
    
    v4l-utils
    
    0.9.5-4.1.al7
    
    1.14.2-3.2.al8
    
    vala
    
    0.40.8-1.1.al7
    
    0.48.19-1.0.1.al8
    
    valgrind
    
    3.15.0-11.1.al7
    
    3.19.0-3.al8
    
    vdo
    
    6.1.3.23-5.1.al7
    
    6.2.7.17-14.0.1.al8
    
    velocity
    
    1.7-10.1.al7
    
    1.7-24.1.al8
    
    vim
    
    7.4.629-8.1.al7
    
    8.0.1763-19.0.1.al8.4
    
    vinagre
    
    3.22.0-14.1.al7
    
    3.22.0-23.1.al8
    
    vino
    
    3.22.0-7.1.al7
    
    3.22.0-11.0.1.al8
    
    virt-manager
    
    1.5.0-7.1.al7
    
    4.1.0-4.0.1.al8
    
    virt-top
    
    1.0.8-24.2.al7
    
    1.0.8-37.0.1.al8
    
    virt-viewer
    
    5.0-18.1.al7
    
    11.0-1.0.1.al8
    
    virt-what
    
    1.18-4.2.al7
    
    1.25-3.al8
    
    virt-who
    
    0.28.10-1.1.al7
    
    1.30.5-1.1.al8
    
    volume\_key
    
    0.3.9-9.1.al7
    
    0.3.11-5.2.al8
    
    vorbis-tools
    
    1.4.0-13.1.al7
    
    1.4.0-28.2.al8
    
    vsftpd
    
    3.0.2-29.1.al7
    
    3.0.3-35.0.1.al8
    
    vte291
    
    0.52.4-1.1.al7
    
    0.52.4-2.1.al8
    
    WALinuxAgent
    
    2.3.0.2-4.1.al7
    
    2.7.0.6-8.0.1.al8
    
    watchdog
    
    5.13-12.1.al7
    
    5.16-2.al8
    
    wavpack
    
    4.60.1-9.1.al7
    
    5.4.0-5.al8
    
    wayland
    
    1.15.0-1.1.al7
    
    1.21.0-1.al8
    
    wayland-protocols
    
    1.14-1.1.al7
    
    1.25-1.al8
    
    webrtc-audio-processing
    
    0.3-1.1.al7
    
    0.3.1-8.al8
    
    weld-parent
    
    17-9.1.al7
    
    34-5.1.al8
    
    wget
    
    1.14-18.1.al7.1
    
    1.19.5-11.0.1.al8
    
    which
    
    2.20-7.1.al7
    
    2.21-18.0.1.al8
    
    whois
    
    5.1.1-2.1.al7
    
    5.5.9-4.al8
    
    wireshark
    
    1.10.14-25.1.al7
    
    2.6.2-15.al8
    
    words
    
    3.0-22.1.al7
    
    3.0-28.1.al8
    
    wpa\_supplicant
    
    2.6-12.1.al7.2
    
    2.10-1.al8
    
    wqy-microhei-fonts
    
    0.2.0-0.12.beta.1.al7
    
    0.2.0-0.22.beta.1.al8
    
    wqy-unibit-fonts
    
    1.1.0-13.1.al7
    
    1.1.0-20.1.al8
    
    wsmancli
    
    2.6.0-2.1.al7
    
    2.6.0-11.0.1.al8
    
    x3270
    
    3.3.12ga12-4.1.al7
    
    3.6ga5-1.2.al8
    
    xalan-j2
    
    2.7.1-23.1.al7
    
    2.7.1-38.1.al8
    
    xbean
    
    3.13-6.1.al7
    
    4.8-1.1.al8
    
    xcb-proto
    
    1.13-1.1.al7
    
    1.13-4.1.al8
    
    xcb-util
    
    0.4.0-2.1.al7
    
    0.4.0-10.2.al8
    
    xcb-util-image
    
    0.4.0-2.1.al7
    
    0.4.0-9.2.al8
    
    xcb-util-keysyms
    
    0.4.0-1.1.al7
    
    0.4.0-7.2.al8
    
    xcb-util-renderutil
    
    0.3.9-3.1.al7
    
    0.3.9-10.2.al8
    
    xcb-util-wm
    
    0.4.1-5.1.al7
    
    0.4.1-12.2.al8
    
    xdelta
    
    3.0.7-4.1.al7
    
    3.1.0-4.2.al8
    
    xdg-desktop-portal
    
    1.0.2-1.1.al7
    
    1.8.1-1.al8
    
    xdg-desktop-portal-gtk
    
    1.0.2-1.1.al7
    
    1.12.0-3.al8
    
    xdg-user-dirs
    
    0.15-5.1.al7
    
    0.17-1.2.al8
    
    xdg-user-dirs-gtk
    
    0.10-4.1.al7
    
    0.10-13.2.al8
    
    xdg-utils
    
    1.1.0-0.17.20120809git.1.al7
    
    1.1.3-11.al8
    
    xerces-j2
    
    2.11.0-17.1.al7
    
    2.11.0-34.1.al8
    
    xfsdump
    
    3.1.7-3.1.al7
    
    3.1.8-4.0.1.al8
    
    xfsprogs
    
    4.5.0-22.1.al7
    
    5.0.0-11.0.1.al8
    
    xhtml1-dtds
    
    1.0-20020801.11.1.al7
    
    1.0-20020801.13.1.al8.4
    
    xinetd
    
    2.3.15-14.1.al7
    
    2.3.15-25.0.1.al8
    
    xkeyboard-config
    
    2.24-1.1.al7
    
    2.28-1.1.al8
    
    xml-commons-apis
    
    1.4.01-16.1.al7
    
    1.4.01-31.1.al8
    
    xml-commons-resolver
    
    1.2-15.1.al7
    
    1.2-26.1.al8
    
    xmlgraphics-commons
    
    1.5-3.1.al7
    
    2.3-4.2.al8
    
    xmlrpc-c
    
    1.32.5-1905.svn2451.1.al7
    
    1.51.0-8.0.1.al8
    
    xmlsec1
    
    1.2.20-7.1.al7
    
    1.2.25-4.2.al8
    
    xmlto
    
    0.0.25-7.1.al7
    
    0.0.28-7.2.al8
    
    xmltoman
    
    0.4-9.1.al7
    
    0.4-17.1.al8
    
    xmlunit
    
    1.4-6.1.al7
    
    2.6.3-2.1.al8
    
    xmvn
    
    1.3.0-6.1.al7
    
    4.0.0~20191028.da67577-3.3.al8
    
    xorg-sgml-doctools
    
    1.10-5.1.al7
    
    1.11-6.1.al8
    
    xorg-x11-apps
    
    7.7-7.1.al7
    
    7.7-21.1.al8
    
    xorg-x11-docs
    
    1.6-7.1.al7
    
    1.7.1-7.1.al8
    
    xorg-x11-drivers
    
    7.7-6.1.al7
    
    7.7-30.1.al8
    
    xorg-x11-drv-ati
    
    19.0.1-3.1.al7
    
    19.1.0-1.1.al8
    
    xorg-x11-drv-dummy
    
    0.3.7-1.2.al7
    
    0.3.7-6.2.al8.1
    
    xorg-x11-drv-evdev
    
    2.10.6-1.1.al7
    
    2.10.6-2.2.al8
    
    xorg-x11-drv-fbdev
    
    0.5.0-1.2.al7
    
    0.5.0-2.2.al8
    
    xorg-x11-drv-intel
    
    2.99.917-28.20180530.2.al7
    
    2.99.917-41.20210115.al8
    
    xorg-x11-drv-libinput
    
    0.27.1-2.1.al7
    
    1.0.1-3.al8
    
    xorg-x11-drv-nouveau
    
    1.0.15-1.2.al7
    
    1.0.15-4.2.al8.1
    
    xorg-x11-drv-qxl
    
    0.1.5-5.1.al7
    
    0.1.5-11.1.al8
    
    xorg-x11-drv-v4l
    
    0.2.0-49.2.al7
    
    0.3.0-2.2.al8
    
    xorg-x11-drv-vesa
    
    2.4.0-3.1.al7
    
    2.4.0-3.2.al8
    
    xorg-x11-drv-vmware
    
    13.2.1-1.2.al7
    
    13.2.1-8.2.al8
    
    xorg-x11-drv-wacom
    
    0.36.1-3.1.al7
    
    1.0.0-1.al8
    
    xorg-x11-font-utils
    
    7.5-21.1.al7
    
    7.5-41.0.2.al8
    
    xorg-x11-fonts
    
    7.5-9.1.al7
    
    7.5-19.1.al8
    
    xorg-x11-proto-devel
    
    2018.4-1.1.al7
    
    2021.4-2.al8
    
    xorg-x11-server
    
    1.20.4-23.1.al7
    
    1.20.11-15.0.1.al8
    
    xorg-x11-server-utils
    
    7.7-20.1.al7
    
    7.7-27.2.al8
    
    xorg-x11-util-macros
    
    1.19.0-3.1.al7
    
    1.19.2-1.1.al8
    
    xorg-x11-utils
    
    7.5-23.1.al7
    
    7.5-28.2.al8
    
    xorg-x11-xauth
    
    1.0.9-1.1.al7
    
    1.1-10.al8
    
    xorg-x11-xbitmaps
    
    1.1.1-6.1.al7
    
    1.1.1-13.1.al8
    
    xorg-x11-xinit
    
    1.3.4-2.1.al7
    
    1.4.0-11.al8
    
    xorg-x11-xkb-utils
    
    7.7-14.1.al7
    
    7.7-28.1.al8
    
    xorg-x11-xtrans-devel
    
    1.3.5-1.1.al7
    
    1.4.0-4.al8
    
    xrestop
    
    0.4-14.1.al7
    
    0.4-21.2.al8
    
    xsom
    
    0-10.20110809svn.1.al7
    
    0-19.20110809svn.1.al8
    
    xterm
    
    295-3.1.al7.1
    
    331-1.2.al8.2
    
    xz
    
    5.2.2-2.1.al7
    
    5.2.4-4.al8
    
    xz-java
    
    1.3-3.1.al7
    
    1.8-8.1.al8
    
    yajl
    
    2.0.4-4.1.al7
    
    2.1.0-11.0.1.al8
    
    yelp
    
    3.28.1-1.1.al7
    
    40.3-2.al8
    
    yelp-tools
    
    3.28.0-1.1.al7
    
    40.0-3.0.1.al8
    
    yelp-xsl
    
    3.28.0-1.1.al7
    
    40.2-1.0.1.al8
    
    yp-tools
    
    2.14-5.1.al7
    
    4.2.3-2.0.1.al8
    
    ypbind
    
    1.37.1-9.1.al7
    
    2.5-2.3.al8
    
    ypserv
    
    2.31-12.1.al7
    
    4.1-1.0.1.al8
    
    zaf
    
    0-0.9.20080714svn.1.al7
    
    0-0.25.20080714svn.al8
    
    zenity
    
    3.28.1-2.1.al7
    
    3.28.1-2.0.1.al8
    
    zip
    
    3.0-11.1.al7
    
    3.0-23.2.al8
    
    zlib
    
    1.2.7-21.1.al7
    
    1.2.11-20.9.al8.alnx
    
    zsh
    
    5.0.2-34.2.al7.2
    
    5.5.1-10.0.1.al8
    
    zziplib
    
    0.13.62-12.1.al7
    
    0.13.71-9.al8
    
    389-ds-base
    
    1.3.11.1-3.1.al7
    
    1.4.3.35-2.0.1.al8
    
    abattis-cantarell-fonts
    
    0.0.25-1.1.al7
    
    0.301-4.al8
    
    abrt
    
    2.1.11-60.1.al7
    
    2.10.9-24.0.1.al8
    
    abrt-java-connector
    
    1.0.6-12.1.al7
    
    1.1.0-16.3.al8
    
    accountsservice
    
    0.6.50-7.1.al7
    
    0.6.55-10.al8
    
    acl
    
    2.2.51-15.1.al7
    
    2.2.53-1.2.al8
    
    acpica-tools
    
    20160527-3.1.al7
    
    20190509-5.3.al8.alnx
    
    acpid
    
    2.0.19-9.1.al7
    
    2.0.32-6.0.1.al8
    
    adcli
    
    0.8.1-16.1.al7.1
    
    0.9.2-1.0.1.al8
    
    adwaita-icon-theme
    
    3.28.0-1.1.al7
    
    40.1.1-3.al8
    
    adwaita-qt
    
    1.0-1.1.al7
    
    1.4.1-3.al8
    
    aide
    
    0.15.1-13.1.al7.1
    
    0.16-100.al8
    
    alinux-logos
    
    70.0.6-3.8.al7
    
    82.0-1.1.al8
    
    alinux-release
    
    2.1903-11.al7
    
    3-1.7.al8
    
    alsa-firmware
    
    1.0.28-2.1.al7
    
    1.2.4-6.0.1.al8
    
    alsa-lib
    
    1.1.8-1.1.al7
    
    1.2.8-3.al8
    
    alsa-plugins
    
    1.1.6-1.1.al7
    
    1.2.7.1-1.al8
    
    alsa-tools
    
    1.1.0-1.4.al7
    
    1.2.2-6.al8
    
    alsa-utils
    
    1.1.8-2.1.al7
    
    1.2.8-1.0.1.al8
    
    amanda
    
    3.3.3-22.1.al7
    
    3.5.1-13.2.al8
    
    anaconda
    
    21.48.22.159-1.1.al7
    
    33.16.7.12-1.0.4.al8
    
    anaconda-user-help
    
    7.5.3-1.1.al7
    
    8.8.3-1.0.1.al8
    
    ant
    
    1.9.4-2.1.al7
    
    1.10.5-1.1.al8
    
    apache-commons-beanutils
    
    1.8.3-15.1.al7
    
    1.9.3-4.1.al8
    
    apache-commons-cli
    
    1.2-13.1.al7
    
    1.4-7.al8
    
    apache-commons-codec
    
    1.8-7.2.al7
    
    1.13-3.al8
    
    apache-commons-collections
    
    3.2.1-22.4.al7
    
    3.2.2-10.1.al8
    
    apache-commons-compress
    
    1.5-4.2.al7
    
    1.20-3.1.al8
    
    apache-commons-exec
    
    1.1-11.2.al7
    
    1.3-8.1.al8
    
    apache-commons-io
    
    2.4-12.1.al7
    
    2.6-6.al8
    
    apache-commons-lang3
    
    3.1-9.2.al7
    
    3.9-4.al8
    
    apache-commons-logging
    
    1.1.2-7.2.al7
    
    1.2-13.2.al8
    
    apache-commons-net
    
    3.2-8.1.al7
    
    3.6-5.1.al8
    
    apache-commons-parent
    
    26-8.2.al7
    
    43-2.1.al8
    
    apache-ivy
    
    2.3.0-4.2.al7
    
    2.4.0-14.1.al8
    
    apache-parent
    
    10-14.2.al7
    
    19-2.1.al8
    
    appstream-data
    
    7-20180614.1.al7
    
    9-20220302.al8.1
    
    apr
    
    1.4.8-7.1.al7
    
    1.7.0-11.0.1.al8
    
    apr-util
    
    1.5.2-6.2.al7.1
    
    1.6.1-6.2.al8.1
    
    aqute-bnd
    
    0.0.363-11.2.al7
    
    3.5.0-4.1.al8
    
    asciidoc
    
    8.6.8-5.2.al7
    
    9.1.0-3.al8
    
    aspell
    
    0.60.6.1-9.2.al7
    
    0.60.8-8.al8
    
    at
    
    3.1.13-24.1.al7
    
    3.1.20-12.0.1.al8
    
    at-spi2-atk
    
    2.26.2-1.1.al7
    
    2.38.0-4.al8
    
    at-spi2-core
    
    2.28.0-1.1.al7
    
    2.40.3-1.al8
    
    atk
    
    2.28.1-2.1.al7
    
    2.36.0-5.0.1.al8
    
    atlas
    
    3.10.1-12.1.al7
    
    3.10.3-8.1.al8
    
    attr
    
    2.4.46-13.1.al7
    
    2.4.48-3.2.al8
    
    audit
    
    2.8.5-4.1.al7
    
    3.0.7-4.0.1.al8
    
    augeas
    
    1.4.0-10.1.al7
    
    1.13.0-3.al8
    
    authd
    
    1.4.3-42.2.al7
    
    1.4.4-5.2.al8.1
    
    autoconf-archive
    
    2017.03.21-1.1.al7
    
    2019.01.06-9.al8
    
    autofs
    
    5.0.7-116.1.al7.1
    
    5.1.4-102.0.1.al8.2
    
    autogen
    
    5.18-5.1.al7
    
    5.18.12-8.1.al8
    
    automake
    
    1.13.4-3.2.al7
    
    1.16.2-6.0.2.al8
    
    avahi
    
    0.6.31-20.1.al7
    
    0.7-20.1.al8
    
    babel
    
    0.9.6-8.2.al7
    
    2.5.1-7.0.1.al8
    
    babl
    
    0.1.10-10.1.al7
    
    0.1.86-4.al8
    
    bacula
    
    5.2.13-23.1.2.al7
    
    11.0.1-5.al8
    
    basesystem
    
    10.0-7.2.al7
    
    11-5.1.al8
    
    bash
    
    4.2.46-35.1.al7
    
    4.4.20-4.al8
    
    bash-completion
    
    2.1-8.1.al7
    
    2.7-5.1.al8
    
    batik
    
    1.8-0.12.svn1230816.2.al7
    
    1.11-6.1.al8
    
    bc
    
    1.06.95-13.2.al7
    
    1.07.1-5.2.al8
    
    bcc
    
    0.8.0-1.1.al7
    
    0.19.0-5.0.2.al8
    
    bcel
    
    5.2-18.1.al7
    
    6.2-2.1.al8
    
    beust-jcommander
    
    1.30-5.1.al7
    
    1.71-5.1.al8
    
    bind
    
    9.11.4-26.P2.6.al7.13
    
    9.11.36-8.al8.1
    
    bind-dyndb-ldap
    
    11.1-7.1.al7
    
    11.6-4.0.1.al8
    
    binutils
    
    2.27-44.base.1.al7.1
    
    2.35-12.2.al8
    
    bison
    
    3.0.4-2.1.al7
    
    3.7.4-5.al8
    
    blktrace
    
    1.0.5-9.2.al7
    
    1.2.0-10.2.al8
    
    bluez
    
    5.44-7.1.al7
    
    5.63-1.0.1.al8
    
    bolt
    
    0.7-1.1.al7
    
    0.9.1-1.1.al8
    
    boost
    
    1.53.0-28.1.al7
    
    1.66.0-13.0.1.al8
    
    brltty
    
    4.5-16.2.al7
    
    6.3-4.1.al8
    
    bsh
    
    1.3.0-29.2.al7
    
    2.0-13.b6.1.al8
    
    byacc
    
    1.9.20130304-3.1.al7
    
    2.0.20210109-4.al8
    
    byteman
    
    2.1.4.1-3.1.al7
    
    4.0.4-2.1.al8
    
    c-ares
    
    1.10.0-3.2.al7.1
    
    1.13.0-6.al8.2
    
    ca-certificates
    
    2022.2.54-74.1.al7
    
    2023.2.60\_v7.0.306-80.0.al8
    
    cachefilesd
    
    0.10.9-1.4.al7
    
    0.10.10-4.2.al8
    
    cairo
    
    1.15.12-4.1.al7
    
    1.17.4-7.al8
    
    cal10n
    
    0.7.7-4.1.al7
    
    0.8.1-7.1.al8
    
    cdi-api
    
    1.0-11.SP4.2.al7
    
    2.0.1-3.al8
    
    certmonger
    
    0.78.4-17.1.al7
    
    0.79.17-2.0.1.al8
    
    cglib
    
    2.2-18.2.al7
    
    3.2.4-7.1.al8
    
    check
    
    0.9.9-5.2.al7
    
    0.15.2-6.al8
    
    checkpolicy
    
    2.5-8.1.al7
    
    2.9-1.2.al8
    
    cheese
    
    3.28.0-1.1.al7
    
    3.38.0-6.0.2.al8
    
    chkconfig
    
    1.7.6-1.1.al7
    
    1.19.1-1.al8
    
    chrony
    
    3.4-1.1.al7
    
    4.2-1.0.1.al8
    
    cifs-utils
    
    6.2-10.1.al7
    
    7.0-1.0.1.al8
    
    cim-schema
    
    2.33.0-6.1.al7
    
    2.43.0-8.1.al8
    
    clevis
    
    7-8.1.al7
    
    18-110.al8
    
    cloud-utils-growpart
    
    0.29-5.1.al7
    
    0.33-0.0.1.al8
    
    clutter
    
    1.26.2-2.1.al7
    
    1.26.4-7.al8
    
    clutter-gst3
    
    3.0.26-1.1.al7
    
    3.0.27-7.al8
    
    cmake
    
    2.8.12.2-2.4.al7
    
    3.20.2-5.al8
    
    cockpit
    
    195.1-1.2.al7
    
    286.1-1.0.1.al8
    
    cogl
    
    1.22.2-2.1.al7
    
    1.22.8-5.al8
    
    colord
    
    1.3.4-2.1.al7
    
    1.4.5-4.0.1.al8
    
    colord-gtk
    
    0.1.25-4.2.al7
    
    0.2.0-7.al8
    
    convmv
    
    1.15-2.2.al7
    
    2.05-11.al8
    
    copy-jdk-configs
    
    3.3-11.1.al7
    
    4.0-3.al8
    
    coreutils
    
    8.22-24.1.al7
    
    8.30-15.al8
    
    corosync
    
    2.4.5-7.1.al7.1
    
    3.1.7-1.al8
    
    cpio
    
    2.11-28.1.al7
    
    2.12-11.0.1.al8
    
    cppunit
    
    1.12.1-11.2.al7
    
    1.14.0-4.1.al8
    
    cracklib
    
    2.9.0-11.2.al7
    
    2.9.6-15.2.al8
    
    crash
    
    7.2.3-10.2.al7
    
    8.0.2-2.0.2.al8
    
    crash-gcore-command
    
    1.3.1-0.2.al7
    
    1.6.3-3.0.1.al8
    
    crash-ptdump-command
    
    1.0.3-3.1.al7
    
    1.0.7-2.0.1.al8
    
    crash-trace-command
    
    2.0-14.1.al7
    
    3.0-6.0.1.al8
    
    crda
    
    3.18\_2018.05.31-4.1.al7
    
    3.18\_2020.04.29-1.1.al8
    
    criu
    
    3.12-2.1.al7
    
    3.15-4.0.1.al8
    
    cronie
    
    1.4.11-25.1.al7
    
    1.5.2-8.al8
    
    cryptsetup
    
    2.0.3-6.1.al7
    
    2.3.7-5.0.1.al8
    
    cscope
    
    15.8-10.1.al7
    
    15.9-17.0.1.al8
    
    culmus-fonts
    
    0.130-3.1.al7
    
    0.133-1.al8
    
    cups
    
    1.6.3-52.1.al7
    
    2.2.6-52.0.1.al8
    
    cups-filters
    
    1.0.35-29.1.al7
    
    1.20.0-29.0.1.al8.2
    
    curl
    
    7.29.0-59.1.al7.1
    
    7.61.1-31.0.3.al8.2
    
    custodia
    
    0.3.1-4.1.al7
    
    0.6.0-3.1.al8
    
    cyrus-imapd
    
    2.4.17-15.1.al7
    
    3.0.7-24.1.al8
    
    cyrus-sasl
    
    2.1.26-24.1.al7
    
    2.1.27-6.0.1.al8
    
    Cython
    
    0.19-5.1.al7
    
    0.28.1-7.1.al8
    
    dblatex
    
    0.3.4-11.2.al7
    
    0.3.10-8.1.al8
    
    dbus
    
    1.10.24-15.1.al7
    
    1.12.8-25.0.1.al8
    
    dbus-glib
    
    0.100-7.1.al7
    
    0.110-2.2.al8
    
    dbus-python
    
    1.1.1-9.2.al7
    
    1.2.4-15.2.al8
    
    dbxtool
    
    7-1.1.al7
    
    8-5.3.al8.2
    
    dcraw
    
    9.19-6.2.al7
    
    9.28.0-13.al8
    
    dejagnu
    
    1.5.1-3.2.al7
    
    1.6.1-2.1.al8
    
    dejavu-fonts
    
    2.33-6.2.al7
    
    2.35-7.1.al8
    
    desktop-file-utils
    
    0.23-2.1.al7
    
    0.26-6.al8
    
    devhelp
    
    3.28.1-1.1.al7
    
    40.1-1.al8
    
    device-mapper-multipath
    
    0.4.9-136.1.al7
    
    0.8.4-37.0.1.al8
    
    device-mapper-persistent-data
    
    0.8.5-3.1.al7.2
    
    0.9.0-7.0.1.al8
    
    dhcp
    
    4.2.5-83.1.al7.1
    
    4.3.6-49.0.1.al8
    
    dialog
    
    1.2-5.20130523.1.al7
    
    1.3-13.20171209.2.al8
    
    diffstat
    
    1.57-4.2.al7
    
    1.64-6.al8
    
    diffutils
    
    3.3-6.1.al7
    
    3.6-6.1.al8
    
    dleyna-connector-dbus
    
    0.2.0-2.1.al7
    
    0.3.0-2.2.al8
    
    dleyna-core
    
    0.5.0-1.1.al7
    
    0.6.0-3.1.al8
    
    dleyna-server
    
    0.5.0-3.1.al7
    
    0.6.0-3.1.al8
    
    dlm
    
    4.0.7-1.1.al7
    
    4.1.0-1.1.al8
    
    dmidecode
    
    3.2-5.1.al7
    
    3.3-5.0.2.al8
    
    dnsmasq
    
    2.76-17.1.al7.3
    
    2.79-27.al8
    
    dnssec-trigger
    
    0.11-22.4.al7
    
    0.15-4.2.al8
    
    docbook-style-xsl
    
    1.78.1-3.1.al7
    
    1.79.2-9.1.al8
    
    docbook5-schemas
    
    5.0-10.2.al7
    
    5.1-5.al8
    
    dos2unix
    
    6.0.3-7.1.al7
    
    7.4.0-3.2.al8
    
    dosfstools
    
    3.0.20-10.1.al7
    
    4.1-6.2.al8
    
    dovecot
    
    2.2.36-8.1.al7
    
    2.3.16-3.al8
    
    doxygen
    
    1.8.5-4.1.al7
    
    1.8.14-12.1.al8
    
    dpdk
    
    18.11.8-2.1.al7
    
    21.11-3.al8
    
    dracut
    
    033-572.1.al7.alnx
    
    049-223.git20230119.al8
    
    dropwatch
    
    1.4-9.1.al7
    
    1.5-1.2.al8
    
    dwz
    
    0.11-3.2.al7
    
    0.14-3.al8
    
    dyninst
    
    9.3.1-3.1.al7
    
    12.1.0-1.al8
    
    e2fsprogs
    
    1.43.5-8.4.al7
    
    1.46.0-1.0.1.al8
    
    easymock
    
    1.2-22.1.al7
    
    3.5-4.1.al8
    
    ed
    
    1.9-4.2.al7
    
    1.14.2-4.2.al8
    
    efibootmgr
    
    17-2.1.al7
    
    16-1.2.al8
    
    efivar
    
    36-12.1.al7
    
    37-4.1.al8
    
    elfutils
    
    0.176-5.1.al7
    
    0.188-3.0.1.al8
    
    emacs
    
    24.3-23.2.al7
    
    27.2-8.0.3.al8.1
    
    environment-modules
    
    3.2.10-10.2.al7
    
    4.5.2-3.0.1.al8
    
    eog
    
    3.28.3-1.1.al7
    
    40.3-2.0.2.al8
    
    epel-aliyuncs-release
    
    7-14.1.al7
    
    8-15.1.al8
    
    esc
    
    1.1.0-44.1.al7
    
    1.1.2-24.al8
    
    ethtool
    
    4.8-10.1.al7
    
    5.13-2.al8
    
    evince
    
    3.28.2-10.1.al7
    
    40.5-2.al8
    
    evolution
    
    3.28.5-10.1.al7
    
    3.40.4-9.0.1.al8
    
    evolution-data-server
    
    3.28.5-5.1.al7.1
    
    3.40.4-6.0.2.al8
    
    evolution-ews
    
    3.28.5-8.1.al7
    
    3.40.4-1.al8
    
    evolution-mapi
    
    3.28.3-2.1.al7
    
    3.40.1-5.al8
    
    exec-maven-plugin
    
    1.2.1-13.2.al7
    
    1.6.0-3.1.al8
    
    exempi
    
    2.2.0-9.1.al7
    
    2.6.0-0.2.20211007gite23c213.al8
    
    exiv2
    
    0.27.0-4.1.al7
    
    0.27.5-2.al8
    
    expat
    
    2.1.0-15.1.al7
    
    2.2.5-11.al8
    
    expect
    
    5.45-14.2.al7
    
    5.45.4-5.2.al8
    
    fabtests
    
    1.7.2-1.1.al7
    
    1.17.0-2.0.1.al8
    
    farstream02
    
    0.2.3-3.2.al7
    
    0.2.8-2.2.al8
    
    fcoe-utils
    
    1.0.32-2.1.al7
    
    1.0.33-4.git848bcc6.0.1.al8
    
    felix-parent
    
    1.2.1-15.1.al7
    
    4-5.1.al8
    
    felix-utils
    
    1.2.0-5.2.al7
    
    1.10.4-2.1.al8
    
    fence-agents
    
    4.2.1-41.1.al7.6
    
    4.10.0-43.0.1.al8
    
    fence-virt
    
    0.3.2-16.2.al7
    
    1.0.0-2.0.1.al8
    
    fetchmail
    
    6.3.24-7.1.al7
    
    6.4.24-1.0.1.al8
    
    fftw
    
    3.3.3-8.2.al7
    
    3.3.8-12.al8
    
    file
    
    5.11-37.1.al7
    
    5.33-24.al8
    
    filesystem
    
    3.2-25.1.al7
    
    3.8-6.0.1.al8
    
    findutils
    
    4.5.11-6.1.al7
    
    4.6.0-20.2.al8
    
    fio
    
    3.7-1.2.al7
    
    3.34-1.al8
    
    fipscheck
    
    1.4.1-6.1.al7
    
    1.5.0-4.2.al8
    
    firewalld
    
    0.6.3-13.1.al7
    
    0.9.3-13.0.1.al8
    
    flac
    
    1.3.0-5.1.al7
    
    1.3.3-11.al8
    
    flatpak
    
    1.0.9-12.1.al7
    
    1.10.7-1.al8
    
    flex
    
    2.5.37-6.1.al7
    
    2.6.4-9.al8
    
    fontawesome-fonts
    
    4.1.0-2.1.al7
    
    4.7.0-4.1.al8
    
    fontconfig
    
    2.13.0-4.3.1.al7
    
    2.13.1-4.al8
    
    fontforge
    
    20120731b-13.1.al7
    
    20200314-5.2.0.2.al8
    
    fonts-tweak-tool
    
    0.3.2-5.1.al7
    
    0.4.5-3.2.al8
    
    foomatic
    
    4.0.9-10.1.al7
    
    4.0.12-23.2.al8
    
    forge-parent
    
    31-2.2.al7
    
    38-11.1.al8
    
    fprintd
    
    0.8.1-2.1.al7
    
    1.94.0-3.al8
    
    freeglut
    
    3.0.0-8.1.al7
    
    3.2.1-9.al8
    
    freeipmi
    
    1.5.7-3.1.al7
    
    1.6.9-1.0.1.al8
    
    freeradius
    
    3.0.13-15.1.al7
    
    3.0.20-14.al8
    
    freerdp
    
    2.1.1-5.1.al7
    
    2.2.0-10.0.1.al8
    
    freetype
    
    2.8-14.1.al7.1
    
    2.10.4-9.al8
    
    frei0r-plugins
    
    1.3-13.2.al7
    
    1.6.1-7.1.al8
    
    fribidi
    
    1.0.2-1.1.al7.1
    
    1.0.4-9.0.1.al8
    
    fuse
    
    2.9.2-11.1.al7
    
    2.9.7-16.al8
    
    fusesource-pom
    
    1.9-7.1.al7
    
    1.11-3.1.al8
    
    fwupd
    
    1.0.8-5.1.al7
    
    1.7.8-1.0.1.al8
    
    fwupdate
    
    12-6.1.al7
    
    11-3.3.al8
    
    fxload
    
    2002\_04\_11-16.2.al7
    
    2008\_10\_13-10.2.al8
    
    gawk
    
    4.0.2-4.1.al7.1
    
    4.2.1-4.0.1.al8
    
    gc
    
    7.2d-7.2.al7
    
    8.0.4-7.0.1.al8
    
    gcab
    
    0.7-4.1.al7
    
    1.4-6.0.1.al8
    
    gcc
    
    4.8.5-44.1.al7
    
    10.2.1-3.5.al8
    
    gcr
    
    3.28.0-1.1.al7
    
    3.40.0-3.0.1.al8
    
    gd
    
    2.0.35-27.1.al7
    
    2.2.5-7.1.al8
    
    gdb
    
    7.6.1-120.1.al7
    
    9.2-7.1.0.4.al8
    
    gdbm
    
    1.10-8.1.al7
    
    1.18-2.0.1.al8
    
    gdisk
    
    0.8.10-3.1.al7
    
    1.0.7-5.al8
    
    gdk-pixbuf2
    
    2.36.12-3.1.al7
    
    2.42.6-3.0.1.al8
    
    gdm
    
    3.28.2-26.1.al7
    
    40.0-27.0.1.al8
    
    gedit
    
    3.28.1-3.1.al7
    
    40.0-6.0.1.al8
    
    gedit-plugins
    
    3.28.1-1.1.al7
    
    40.1-2.0.1.al8
    
    geoclue2
    
    2.4.8-1.1.al7
    
    2.6.0-7.al8
    
    geocode-glib
    
    3.26.0-3.1.al7
    
    3.26.2-5.al8
    
    gfs2-utils
    
    3.1.10-11.1.al7.1
    
    3.2.0-11.0.1.al8
    
    ghostscript
    
    9.25-5.1.al7
    
    9.54.0-9.al8
    
    giflib
    
    4.1.6-9.1.al7
    
    5.2.1-9.al8
    
    git
    
    1.8.3.1-25.1.al7
    
    2.39.3-1.1.al8
    
    gjs
    
    1.52.5-1.2.al7
    
    1.68.6-3.0.1.al8
    
    glassfish-el
    
    2.2.5-6.1.al7
    
    3.0.1-0.14.b08.1.al8
    
    glassfish-fastinfoset
    
    1.2.12-9.1.al7
    
    1.2.13-9.1.al8
    
    glassfish-jaxb
    
    2.2.5-6.1.al7
    
    2.2.11-11.1.al8
    
    glassfish-jaxb-api
    
    2.2.7-4.1.al7
    
    2.2.12-8.1.al8
    
    glassfish-jsp
    
    2.2.6-11.1.al7
    
    2.3.4-6.1.al8
    
    glassfish-jsp-api
    
    2.2.1-9.1.al7
    
    2.3.3-3.1.al8
    
    glew
    
    1.10.0-5.1.al7
    
    2.0.0-6.2.al8
    
    glib2
    
    2.56.1-9.1.al7
    
    2.68.4-6.al8
    
    glibc
    
    2.17-325.2.al7
    
    2.32-1.12.al8
    
    glm
    
    0.9.6.3-1.1.al7
    
    0.9.9.2-1.1.al8
    
    gmp
    
    6.0.0-15.1.al7
    
    6.2.0-10.0.1.al8
    
    gnome-abrt
    
    0.3.4-9.1.al7
    
    1.2.6-6.1.al8
    
    gnome-backgrounds
    
    3.28.0-1.1.al7
    
    40.1-2.al8
    
    gnome-bluetooth
    
    3.28.2-1.1.al7
    
    3.34.3-1.1.al8
    
    gnome-boxes
    
    3.28.5-4.1.al7
    
    40.3-2.0.1.al8
    
    gnome-color-manager
    
    3.28.0-1.1.al7
    
    3.36.0-7.0.1.al8
    
    gnome-desktop3
    
    3.28.2-2.1.al7
    
    40.4-1.0.1.al8
    
    gnome-disk-utility
    
    3.28.3-1.1.al7
    
    40.2-2.1.al8
    
    gnome-font-viewer
    
    3.28.0-1.1.al7
    
    40.0-3.0.1.al8
    
    gnome-initial-setup
    
    3.28.0-2.1.al7
    
    40.4-3.0.1.al8
    
    gnome-keyring
    
    3.28.2-1.1.al7
    
    40.0-3.al8
    
    gnome-menus
    
    3.13.3-3.1.al7
    
    3.36.0-8.0.1.al8
    
    gnome-online-accounts
    
    3.28.2-1.1.al7
    
    3.40.0-2.0.1.al8
    
    gnome-screenshot
    
    3.26.0-1.1.al7
    
    40.0-4.al8
    
    gnome-session
    
    3.28.1-8.1.al7
    
    40.1.1-7.0.1.al8
    
    gnome-settings-daemon
    
    3.28.1-11.1.al7
    
    40.0.1-11.0.1.al8
    
    gnome-shell
    
    3.28.3-34.1.al7
    
    40.10-12.0.1.al8
    
    gnome-shell-extensions
    
    3.28.1-17.1.al7
    
    40.7-7.0.1.al8
    
    gnome-software
    
    3.28.2-3.1.al7
    
    3.36.1-11.0.1.al8
    
    gnome-terminal
    
    3.28.2-3.1.al7
    
    3.28.3-3.1.al8
    
    gnome-themes-standard
    
    3.28-2.1.al7
    
    3.22.3-4.2.al8
    
    gnome-user-docs
    
    3.28.2-1.1.al7
    
    40.0-3.al8
    
    gnome-video-effects
    
    0.4.3-1.1.al7
    
    0.5.0-7.al8
    
    gnu-efi
    
    3.0.8-2.1.al7
    
    3.0.11-8.0.2.al8
    
    gnupg2
    
    2.0.22-5.1.al7
    
    2.2.20-3.al8
    
    gnuplot
    
    4.6.2-3.1.al7
    
    5.2.4-3.al8
    
    gnutls
    
    3.3.29-9.1.al7
    
    3.6.16-6.0.1.al8
    
    gobject-introspection
    
    1.56.1-1.1.al7
    
    1.68.0-11.0.1.al8
    
    google-guice
    
    3.1.3-9.1.al7
    
    4.2.2-4.al8
    
    google-noto-emoji-fonts
    
    20180508-4.1.al7
    
    20211102-1.0.1.al8
    
    google-noto-fonts
    
    20141117-5.4.al7
    
    20181223-2.al8
    
    gperf
    
    3.0.4-8.1.al7
    
    3.1-5.1.al8
    
    gpgme
    
    1.3.2-5.1.al7
    
    1.13.1-11.0.1.al8
    
    graphite2
    
    1.3.10-1.1.al7
    
    1.3.14-9.0.1.al8
    
    graphviz
    
    2.30.1-22.1.al7
    
    2.40.1-44.0.1.al8
    
    grep
    
    2.20-3.1.al7
    
    3.1-6.2.al8
    
    grilo
    
    0.3.6-1.1.al7
    
    0.3.13-7.0.1.al8
    
    grilo-plugins
    
    0.3.7-1.1.al7
    
    0.3.13-6.al8
    
    groff
    
    1.22.2-8.1.al7
    
    1.22.3-18.2.al8
    
    grubby
    
    8.28-26.2.al7
    
    8.40-47.0.1.al8
    
    gsettings-desktop-schemas
    
    3.28.0-3.1.al7
    
    40.0-6.0.1.al8
    
    gsl
    
    1.15-13.1.al7
    
    2.6-7.0.1.al8
    
    gsm
    
    1.0.13-11.1.al7
    
    1.0.19-6.al8
    
    gspell
    
    1.6.1-1.1.al7
    
    1.9.1-3.al8
    
    gssdp
    
    1.0.2-1.1.al7
    
    1.0.5-1.1.al8
    
    gssproxy
    
    0.7.0-30.1.al7
    
    0.8.0-21.al8
    
    gstreamer1
    
    1.10.4-2.1.al7
    
    1.18.4-4.0.1.al8
    
    gstreamer1-plugins-bad-free
    
    1.10.4-3.1.al7
    
    1.18.4-6.0.1.al8
    
    gstreamer1-plugins-base
    
    1.10.4-2.1.al7
    
    1.18.4-5.1.al8
    
    gstreamer1-plugins-good
    
    1.10.4-2.1.al7
    
    1.16.1-3.al8
    
    gstreamer1-plugins-ugly-free
    
    1.10.4-3.1.al7
    
    1.16.1-1.1.al8
    
    gtk-doc
    
    1.28-2.1.al7
    
    1.33.2-5.0.1.al8
    
    gtk-vnc
    
    0.7.0-3.1.al7
    
    1.3.0-1.1.al8
    
    gtk2
    
    2.24.31-1.1.al7
    
    2.24.32-5.1.al8
    
    gtk3
    
    3.22.30-8.1.al7
    
    3.24.31-2.0.1.al8
    
    gtksourceview3
    
    3.24.8-2.1.al7
    
    3.24.9-1.2.al8
    
    gtkspell3
    
    3.0.3-4.1.al7
    
    3.0.9-5.2.al8
    
    guava
    
    13.0-6.1.al7
    
    28.1-3.al8
    
    gubbi-fonts
    
    1.1-3.1.al7
    
    1.3-10.0.1.al8
    
    guile
    
    2.0.9-5.1.al7
    
    2.0.14-7.2.al8
    
    gupnp
    
    1.0.2-6.1.al7
    
    1.0.6-2.1.al8
    
    gvfs
    
    1.36.2-7.1.al7
    
    1.48.1-4.0.3.al8
    
    gzip
    
    1.5-11.1.al7
    
    1.9-13.al8
    
    haproxy
    
    1.5.18-9.1.al7
    
    2.4.17-6.0.1.al8
    
    hardlink
    
    1.0-19.1.al7
    
    1.3-6.2.al8
    
    harfbuzz
    
    1.7.5-2.1.al7
    
    2.7.4-8.0.1.al8
    
    hawtjni
    
    1.6-10.1.al7
    
    1.16-2.1.al8
    
    hdparm
    
    9.43-5.1.al7
    
    9.54-4.0.1.al8
    
    help2man
    
    1.41.1-3.1.al7
    
    1.48.2-3.al8
    
    hexedit
    
    1.2.13-5.1.al7
    
    1.6-1.al8
    
    hicolor-icon-theme
    
    0.12-7.1.al7
    
    0.17-2.1.al8
    
    highlight
    
    3.13-3.1.al7
    
    3.60-5.al8
    
    hivex
    
    1.3.10-6.12.1.al7
    
    1.3.18-23.0.1.al8
    
    hostname
    
    3.13-3.1.al7.1
    
    3.20-6.2.al8
    
    hplip
    
    3.15.9-5.1.al7
    
    3.18.4-9.2.al8
    
    hspell
    
    1.2-6.1.al7
    
    1.4-6.2.al8
    
    http-parser
    
    2.7.1-9.1.al7
    
    2.9.4-6.al8
    
    httpcomponents-client
    
    4.2.5-5.1.al7
    
    4.5.10-4.al8
    
    httpcomponents-core
    
    4.2.4-6.1.al7
    
    4.4.12-3.al8
    
    httpcomponents-project
    
    6-4.1.al7
    
    9-2.1.al8
    
    httpd
    
    2.4.6-99.1.al7.1
    
    2.4.37-56.0.1.al8.6
    
    hunspell
    
    1.3.2-16.1.al7
    
    1.7.0-11.al8
    
    hunspell-ak
    
    0.6-7.1.al7
    
    0.9.1-1.1.al8
    
    hunspell-ar
    
    0.20080110-10.1.al7
    
    3.5-7.1.al8
    
    hunspell-ast
    
    0.02-6.1.al7
    
    2.0-7.al8
    
    hunspell-bn
    
    0.06-4.1.al7
    
    1.0.0-9.1.al8
    
    hunspell-br
    
    0.8-5.1.al7
    
    0.15-1.1.al8
    
    hunspell-cv
    
    1.02-6.1.al7
    
    1.06-1.1.al8
    
    hunspell-de
    
    0.20120607-4.1.al7
    
    0.20161207-1.1.al8
    
    hunspell-dsb
    
    1.4.6-4.1.al7
    
    1.4.8-1.1.al8
    
    hunspell-el
    
    0.8-7.1.al7
    
    0.9-1.1.al8
    
    hunspell-en
    
    0.20121024-6.1.al7
    
    0.20140811.1-12.1.al8
    
    hunspell-es
    
    0.6-4.1.al7
    
    2.3-10.al8
    
    hunspell-eu
    
    0.20080507-8.1.al7
    
    5.1-4.al8
    
    hunspell-fo
    
    0.4.1-4.1.al7
    
    0.4.2-8.1.al8
    
    hunspell-fr
    
    4.6-4.1.al7
    
    6.2-1.1.al8
    
    hunspell-fy
    
    2.0.1-6.1.al7
    
    3.0.0-1.1.al8
    
    hunspell-ga
    
    4.6-7.1.al7
    
    5.0-1.1.al8
    
    hunspell-gu
    
    20061015-11.1.al7
    
    1.0.0-9.1.al8
    
    hunspell-haw
    
    0.02-4.1.al7
    
    0.03-1.1.al8
    
    hunspell-hi
    
    20050726-12.1.al7
    
    1.0.0-9.1.al8
    
    hunspell-km
    
    1.1-7.1.al7
    
    1.82-1.1.al8
    
    hunspell-ko
    
    0.5.5-5.1.al7
    
    0.7.0-5.1.al8
    
    hunspell-la
    
    0.20110807-6.1.al7
    
    0.20130331-11.1.al8
    
    hunspell-mr
    
    20060920-15.1.al7
    
    1.0.0-9.1.al8
    
    hunspell-mt
    
    0.20020708-9.1.al7
    
    0.20110414-1.1.al8
    
    hunspell-nl
    
    2.10-5.1.al7
    
    2.20.19-5.al8
    
    hunspell-oc
    
    0.5-8.1.al7
    
    0.6.2-1.1.al8
    
    hunspell-or
    
    0.03-4.1.al7
    
    1.0.0-9.1.al8
    
    hunspell-pa
    
    20050726-10.1.al7
    
    1.0.0-9.1.al8
    
    hunspell-pl
    
    0.20130130-2.1.al7
    
    0.20180707-1.1.al8
    
    hunspell-sr
    
    0.20100920-7.1.al7
    
    0.20130330-10.1.al8
    
    hunspell-sv
    
    2.10-3.1.al7
    
    2.28-8.1.al8
    
    hunspell-ta
    
    20100226-8.1.al7
    
    1.0.0-9.1.al8
    
    hunspell-te
    
    0.20050929-11.1.al7
    
    1.0.0-9.1.al8
    
    hunspell-tn
    
    0.20091101-6.1.al7
    
    0.20150904-1.1.al8
    
    hunspell-tpi
    
    0.05-5.1.al7
    
    0.07-10.1.al8
    
    hunspell-ts
    
    0.20091101-6.1.al7
    
    0.20110323.1-1.1.al8
    
    hunspell-uk
    
    1.6.5-5.1.al7
    
    1.8.0-1.1.al8
    
    hunspell-vi
    
    0.20080604-8.1.al7
    
    0.20120418-1.1.al8
    
    hunspell-wa
    
    0.4.15-9.1.al7
    
    0.4.17-9.1.al8
    
    hwdata
    
    0.252-9.7.1.al7
    
    0.314-8.16.al8
    
    hwloc
    
    1.11.8-4.1.al7
    
    2.2.0-3.al8
    
    hyphen
    
    2.8.6-5.1.al7
    
    2.8.8-9.2.al8
    
    hyphen-es
    
    0.20110222svn-4.1.al7
    
    2.3-2.1.al8
    
    hyphen-eu
    
    0.20110620-5.1.al7
    
    0.20190406-2.al8
    
    hyphen-fa
    
    0.20081119-7.1.al7
    
    0.20130404-9.1.al8
    
    hyphen-fr
    
    2.0-8.1.al7
    
    3.0-10.al8
    
    hyphen-pt
    
    0.20021021-9.1.al7
    
    0.20140727-3.al8
    
    i2c-tools
    
    3.1.0-13.1.al7
    
    4.0-12.2.al8
    
    ibus
    
    1.5.17-14.1.al7
    
    1.5.19-14.0.1.al8
    
    ibus-hangul
    
    1.4.2-11.1.al7
    
    1.5.1-6.1.al8
    
    ibus-kkc
    
    1.5.18-7.4.al7
    
    1.5.22-9.2.al8
    
    ibus-libpinyin
    
    1.6.91-4.1.al7
    
    1.10.0-2.1.al8
    
    ibus-table
    
    1.5.0-5.1.al7
    
    1.9.18-6.1.al8
    
    ibus-table-chinese
    
    1.4.6-3.1.al7
    
    1.8.2-9.1.al8
    
    ibus-typing-booster
    
    1.2.3-5.1.al7
    
    2.1.0-5.1.al8
    
    icedtea-web
    
    1.7.1-4.1.al7
    
    1.8.4-4.1.al8
    
    icoutils
    
    0.31.3-1.1.al7
    
    0.32.3-2.2.al8
    
    icu
    
    50.2-4.1.al7
    
    60.3-2.1.al8
    
    ilmbase
    
    1.0.3-7.1.al7
    
    2.2.0-13.1.al8
    
    ima-evm-utils
    
    1.1-3.1.al7
    
    1.3.2-12.1.al8
    
    imake
    
    1.0.5-10.1.al7
    
    1.0.7-11.1.al8
    
    infiniband-diags
    
    2.1.0-1.1.al7
    
    2.2.0-3.2.al8
    
    initial-setup
    
    0.3.9.45-1.1.al7
    
    0.3.81.7-1.1.al8
    
    initscripts
    
    9.49.53-1.1.al7.1
    
    10.00.18-1.al8
    
    inkscape
    
    0.92.2-3.2.al7
    
    0.92.3-13.1.al8
    
    intel-cmt-cat
    
    3.0.1-1.1.al7
    
    4.0.0-0.1.al8
    
    intltool
    
    0.50.2-7.1.al7
    
    0.51.0-11.1.al8
    
    ipa
    
    4.6.8-5.1.al7.15
    
    4.9.11-7.0.1.al8
    
    iperf3
    
    3.1.7-3.1.al7
    
    3.9-10.al8
    
    iproute
    
    4.11.0-30.al7.1
    
    5.18.0-1.1.0.1.al8
    
    iprutils
    
    2.4.17.1-3.1.al7
    
    2.4.19-1.1.al8
    
    iptables
    
    1.4.21-35.1.al7
    
    1.8.4-24.0.1.al8
    
    iptraf-ng
    
    1.1.4-7.1.al7
    
    1.2.1-2.1.al8
    
    iptstate
    
    2.2.5-4.1.al7
    
    2.2.6-6.2.al8
    
    iputils
    
    20160308-10.2.al7
    
    20180629-10.0.2.al8
    
    ipvsadm
    
    1.27-8.1.al7
    
    1.31-1.1.al8
    
    ipxe
    
    20180825-3.git133f4c.1.al7
    
    20200823-9.git4bd064de.al8
    
    irqbalance
    
    1.0.7-12.1.al7
    
    1.9.0-4.0.1.al8
    
    irssi
    
    0.8.15-16.1.al7
    
    1.1.1-3.1.al8
    
    iscsi-initiator-utils
    
    6.2.0.874-22.1.al7
    
    6.2.1.4-8.git095f59c.0.1.al8
    
    isns-utils
    
    0.93-7.1.al7
    
    0.99-1.2.al8
    
    iso-codes
    
    3.46-2.1.al7
    
    4.6.0-3.0.1.al8
    
    isomd5sum
    
    1.0.10-5.1.al7
    
    1.2.3-3.2.al8
    
    istack-commons
    
    2.17-4.1.al7
    
    2.21-9.1.al8
    
    itstool
    
    2.0.2-1.1.al7
    
    2.0.6-7.al8
    
    iw
    
    4.3-2.1.al7
    
    4.14-5.2.al8
    
    jansi
    
    1.9-7.1.al7
    
    1.18-4.al8
    
    jansi-native
    
    1.4-11.1.al7
    
    1.7-7.2.al8
    
    jansson
    
    2.10-1.1.al7
    
    2.14-1.0.1.al8
    
    jasper
    
    1.900.1-33.1.al7
    
    2.0.14-5.0.1.al8
    
    java-atk-wrapper
    
    0.30.4-5.1.al7
    
    0.33.2-6.2.al8
    
    java\_cup
    
    0.11a-16.1.al7
    
    0.11b-8.1.al8
    
    javacc
    
    5.0-10.1.al7
    
    7.0.2-6.1.al8
    
    javamail
    
    1.4.6-8.1.al7
    
    1.6.2-2.1.al8
    
    javapackages-tools
    
    3.4.1-11.1.al7
    
    5.3.1-7.3.al8
    
    javassist
    
    3.16.1-10.1.al7
    
    3.18.1-8.1.al8
    
    jaxen
    
    1.1.3-11.1.al7
    
    1.1.6-18.1.al8
    
    jbigkit
    
    2.0-11.1.al7
    
    2.1-14.2.al8
    
    jboss-parent
    
    6-12.1.al7
    
    20-4.1.al8
    
    jdependency
    
    0.7-10.1.al7
    
    1.2-2.1.al8
    
    jetty
    
    9.0.3-8.1.al7
    
    9.4.30-2.v20200611.1.al8
    
    jflex
    
    1.4.3-20.1.al7
    
    1.6.1-12.1.al8
    
    jline
    
    1.0-8.1.al7
    
    2.14.6-2.1.al8
    
    jna
    
    3.5.2-8.1.al7
    
    5.6.0-8.0.1.al8
    
    jsch
    
    0.1.50-5.1.al7
    
    0.1.55-3.1.al8
    
    json-c
    
    0.11-4.1.al7
    
    0.13.1-3.0.1.al8
    
    json-glib
    
    1.4.2-2.1.al7
    
    1.4.4-1.2.al8
    
    jsoup
    
    1.6.1-10.1.al7
    
    1.12.1-3.al8
    
    jss
    
    4.4.9-3.1.al7
    
    4.9.4-1.al8
    
    junit
    
    4.11-8.1.al7
    
    4.12-14.1.al8
    
    jzlib
    
    1.1.1-6.1.al7
    
    1.1.3-14.al8
    
    kbd
    
    1.15.5-16.1.al7
    
    2.0.4-10.1.al8
    
    keepalived
    
    1.3.5-19.1.al7
    
    2.2.4-6.al8
    
    kernel
    
    3.10.0-1160.al7.1
    
    4.19.91-0.41.git.67a612f5f.al8
    
    kexec-tools
    
    2.0.15-51.1.al7.3.alnx
    
    2.0.25-5.0.2.al8
    
    keybinder3
    
    0.3.0-1.1.al7
    
    0.3.2-4.2.al8
    
    keycloak-httpd-client-install
    
    0.8-1.1.al7
    
    1.1-10.al8
    
    keyutils
    
    1.5.8-3.1.al7
    
    1.5.10-9.al8
    
    kmod
    
    20-28.1.al7
    
    25-19.0.2.al8
    
    kmod-kvdo
    
    6.1.1.125-5.1.al7
    
    6.2.8.7-88.0.1.al8
    
    kpatch
    
    0.6.1-6.1.al7
    
    0.9.7-2.0.1.al8
    
    krb5
    
    1.15.1-55.1.al7
    
    1.18.2-25.0.1.al8
    
    langtable
    
    0.0.31-4.1.al7
    
    0.0.51-4.1.al8
    
    lapack
    
    3.4.2-8.1.al7
    
    3.8.0-8.2.al8
    
    lasso
    
    2.5.1-8.1.al7
    
    2.6.0-13.0.1.al8
    
    latex2html
    
    2012-3.1.al7
    
    2018.2-2.1.al8
    
    lcms2
    
    2.6-3.4.al7
    
    2.9-2.2.al8
    
    ldapjdk
    
    4.19-5.1.al7
    
    4.23.0-1.al8
    
    ldns
    
    1.6.16-10.4.al7
    
    1.7.0-21.2.al8
    
    ledmon
    
    0.92-1.1.al7
    
    0.96-3.0.1.al8
    
    less
    
    458-9.1.al7
    
    530-1.2.al8
    
    lftp
    
    4.4.8-14.1.al7
    
    4.9.2-4.al8
    
    libabw
    
    0.1.1-2.1.al7
    
    0.1.3-7.al8
    
    libaio
    
    0.3.109-13.1.al7
    
    0.3.112-1.2.al8
    
    libao
    
    1.1.0-8.1.al7
    
    1.2.0-10.2.al8
    
    libappstream-glib
    
    0.7.8-2.1.al7
    
    0.7.18-4.0.1.al8
    
    libarchive
    
    3.1.2-14.1.al7
    
    3.5.3-4.al8
    
    libassuan
    
    2.1.0-3.1.al7
    
    2.5.1-3.2.al8
    
    libavc1394
    
    0.5.3-14.1.al7
    
    0.5.4-7.2.al8
    
    libblockdev
    
    2.18-5.1.al7
    
    2.28-2.al8
    
    libbluray
    
    0.2.3-6.1.al7
    
    1.0.2-3.2.al8
    
    libburn
    
    1.2.8-4.1.al7
    
    1.5.4-4.al8
    
    libbytesize
    
    1.2-1.1.al7
    
    2.5-3.0.1.al8
    
    libcacard
    
    2.7.0-1.1.al7
    
    2.8.0-6.0.2.al8
    
    libcap
    
    2.22-11.1.al7
    
    2.48-5.al8
    
    libcap-ng
    
    0.7.5-4.1.al7
    
    0.7.11-1.al8
    
    libcdio
    
    0.92-3.1.al7
    
    2.1.0-6.al8
    
    libcdio-paranoia
    
    10.2+0.90-11.1.al7
    
    10.2+2.0.1-6.0.4.al8
    
    libcdr
    
    0.1.4-1.1.al7
    
    0.1.7-3.al8
    
    libcmis
    
    0.5.1-2.4.al7
    
    0.5.2-12.al8
    
    libconfig
    
    1.4.9-5.1.al7
    
    1.5-9.2.al8
    
    libdb
    
    5.3.21-25.1.al7
    
    5.3.28-42.0.1.al8
    
    libdmx
    
    1.1.3-3.1.al7
    
    1.1.4-3.2.al8
    
    libdnet
    
    1.12-13.1.1.al7
    
    1.14-5.0.1.al8
    
    libdrm
    
    2.4.97-2.1.al7
    
    2.4.114-1.al8
    
    libdvdnav
    
    5.0.3-1.4.al7
    
    6.1.0-4.0.1.al8
    
    libdvdread
    
    5.0.3-3.4.al7
    
    6.1.1-4.0.1.al8
    
    libdwarf
    
    20130207-4.1.al7
    
    20180129-4.2.al8
    
    libeasyfc
    
    0.13.0-3.1.al7
    
    0.14.0-1.2.al8
    
    libecap
    
    1.0.0-1.4.al7
    
    1.0.1-2.2.0.1.al8
    
    libedit
    
    3.0-12.20121213cvs.1.al7
    
    3.1-23.20170329cvs.2.al8
    
    libepoxy
    
    1.5.2-1.1.al7
    
    1.5.8-1.0.2.al8
    
    liberation-fonts
    
    1.07.2-16.1.al7
    
    2.1.3-4.al8
    
    libestr
    
    0.1.9-2.1.al7
    
    0.1.11-4.0.1.al8
    
    libetonyek
    
    0.1.7-1.1.al7
    
    0.1.10-2.al8
    
    libevdev
    
    1.5.6-1.1.al7
    
    1.11.0-3.al8
    
    libevent
    
    2.0.21-4.1.al7
    
    2.1.8-5.2.al8
    
    libexttextcat
    
    3.4.1-3.1.al7
    
    3.4.5-2.2.al8
    
    libfabric
    
    1.7.2-1.1.al7
    
    1.17.0-3.al8.1
    
    libfastjson
    
    0.99.4-3.1.al7
    
    0.99.9-3.al8
    
    libffi
    
    3.0.13-19.1.al7
    
    3.1-24.0.1.al8
    
    libfprint
    
    0.8.2-2.1.al7
    
    1.94.5-1.0.2.al8
    
    libfreehand
    
    0.1.1-1.1.al7
    
    0.1.2-2.2.al8
    
    libgcrypt
    
    1.5.3-14.1.al7
    
    1.8.5-7.0.1.al8
    
    libgdata
    
    0.17.9-1.1.al7
    
    0.18.1-4.al8
    
    libgee
    
    0.20.1-1.1.al7
    
    0.20.4-3.0.1.al8
    
    libgexiv2
    
    0.10.8-1.1.al7
    
    0.12.3-1.0.1.al8
    
    libglvnd
    
    1.0.1-0.8.git5baa1e5.1.al7
    
    1.3.4-1.0.1.al8
    
    libgovirt
    
    0.3.4-5.1.al7
    
    0.3.7-4.1.al8
    
    libgpg-error
    
    1.12-3.1.al7
    
    1.42-5.0.1.al8
    
    libgphoto2
    
    2.5.15-3.1.al7
    
    2.5.27-3.0.1.al8
    
    libgpod
    
    0.8.2-12.2.al7
    
    0.8.3-24.1.al8
    
    libgsf
    
    1.14.26-7.1.al7
    
    1.14.47-5.0.1.al8
    
    libgtop2
    
    2.38.0-3.1.al7
    
    2.40.0-9.0.1.al8
    
    libguestfs
    
    1.40.2-10.1.al7
    
    1.44.0-9.0.3.al8
    
    libguestfs-winsupport
    
    7.2-3.1.al7
    
    8.8-2.al8
    
    libgusb
    
    0.2.9-1.1.al7
    
    0.3.0-1.2.al8
    
    libgweather
    
    3.28.2-4.1.al7
    
    40.0-3.al8
    
    libgxps
    
    0.3.0-4.1.al7
    
    0.3.2-3.al8
    
    libhugetlbfs
    
    2.16-13.1.al7
    
    2.21-17.1.al8
    
    libical
    
    3.0.3-2.1.al7
    
    3.0.14-1.0.1.al8
    
    libICE
    
    1.0.9-9.1.al7
    
    1.0.10-8.al8
    
    libidn
    
    1.28-4.1.al7
    
    1.34-5.2.al8
    
    libimobiledevice
    
    1.2.0-1.1.al7
    
    1.3.0-5.0.2.al8
    
    libinput
    
    1.10.7-2.1.al7
    
    1.16.3-3.0.1.al8
    
    libiptcdata
    
    1.0.4-11.1.al7
    
    1.0.5-9.al8
    
    libiscsi
    
    1.9.0-7.4.al7
    
    1.18.0-8.2.al8
    
    libisofs
    
    1.2.8-4.1.al7
    
    1.5.4-4.al8
    
    libjpeg-turbo
    
    1.2.90-8.1.al7
    
    2.0.90-6.0.1.al8
    
    libkkc
    
    0.3.1-9.4.al7
    
    0.3.5-12.2.al8
    
    libksba
    
    1.3.0-7.1.al7
    
    1.3.5-9.0.1.al8
    
    liblangtag
    
    0.6.2-1.1.1.al7
    
    0.6.3-8.al8.1
    
    libldb
    
    1.5.4-2.1.al7
    
    2.6.1-1.0.1.al8
    
    liblockfile
    
    1.08-17.1.al7
    
    1.14-2.0.1.al8
    
    liblognorm
    
    2.0.2-3.1.al7
    
    2.0.6-4.al8
    
    liblouis
    
    2.5.2-12.1.al7
    
    3.16.1-4.al8
    
    libmaxminddb
    
    1.2.0-6.1.al7
    
    1.5.2-3.al8
    
    libmbim
    
    1.14.2-1.1.al7
    
    1.28.2-1.0.1.al8
    
    libmediaart
    
    1.9.4-1.1.al7
    
    1.9.5-2.al8
    
    libmemcached
    
    1.0.16-5.1.al7
    
    1.0.18-17.0.1.al8
    
    libmicrohttpd
    
    0.9.33-2.1.al7
    
    0.9.59-2.2.al8
    
    libmng
    
    1.0.10-14.1.al7
    
    2.0.3-7.2.al8
    
    libmnl
    
    1.0.3-7.1.al7
    
    1.0.4-6.2.al8
    
    libmpc
    
    1.0.1-3.1.al7
    
    1.1.0-9.1.1.al8
    
    libmspack
    
    0.5-0.8.alpha.1.al7
    
    0.10.1-0.7.alpha.al8
    
    libmspub
    
    0.1.2-1.1.al7
    
    0.1.4-1.2.al8
    
    libmtp
    
    1.1.14-1.1.al7
    
    1.1.18-6.al8
    
    libmusicbrainz5
    
    5.0.1-9.1.al7
    
    5.1.0-10.2.al8
    
    libmwaw
    
    0.3.5-1.1.al7
    
    0.3.21-1.al8
    
    libndp
    
    1.2-9.1.al7
    
    1.7-6.0.1.al8
    
    libnet
    
    1.1.6-7.1.al7
    
    1.2-6.al8
    
    libnetfilter\_queue
    
    1.0.2-2.1.al7
    
    1.0.5-1.al8
    
    libnftnl
    
    1.0.8-3.al7.1
    
    1.1.5-5.0.1.al8
    
    libnice
    
    0.1.3-4.1.al7
    
    0.1.14-7.20180504git34d6044.2.al8
    
    libnl3
    
    3.2.28-4.1.al7
    
    3.7.0-1.al8
    
    libnotify
    
    0.7.7-1.1.al7
    
    0.7.9-8.al8
    
    liboauth
    
    0.9.7-4.1.al7
    
    1.0.3-9.2.al8
    
    libodfgen
    
    0.1.4-1.1.al7
    
    0.1.8-4.al8
    
    libogg
    
    1.3.0-7.1.al7
    
    1.3.4-6.al8
    
    libopenraw
    
    0.0.9-7.4.al7
    
    0.1.3-11.al8
    
    liborcus
    
    0.12.1-2.1.al7
    
    0.16.1-8.al8
    
    libosinfo
    
    1.1.0-5.1.al7
    
    1.9.0-3.al8
    
    libpagemaker
    
    0.0.3-1.4.al7
    
    0.0.4-3.2.al8
    
    libpaper
    
    1.1.24-9.1.al7
    
    1.1.28-4.al8
    
    libpcap
    
    1.5.3-13.1.al7
    
    1.9.1-5.1.al8
    
    libpfm
    
    4.7.0-10.1.al7
    
    4.11.0-6.al8
    
    libpinyin
    
    0.9.93-4.1.al7
    
    2.6.0-4.al8
    
    libpipeline
    
    1.2.3-3.1.al7
    
    1.5.0-2.2.al8
    
    libplist
    
    1.12-3.1.al7
    
    2.2.0-5.0.1.al8
    
    libpmemobj-cpp
    
    1.5-1.1.al7
    
    1.13.0-1.al8
    
    libpng
    
    1.5.13-8.1.al7
    
    1.6.34-5.2.al8
    
    libpng12
    
    1.2.50-10.4.al7
    
    1.2.57-5.2.al8
    
    libproxy
    
    0.4.11-11.1.al7
    
    0.4.15-5.2.2.al8
    
    libpsm2
    
    11.2.78-1.1.al7
    
    11.2.230-1.al8
    
    libpst
    
    0.6.59-4.1.al7
    
    0.6.71-8.2.al8
    
    libpwquality
    
    1.2.3-5.1.al7
    
    1.4.4-6.0.1.al8
    
    libqb
    
    1.0.1-9.1.al7
    
    1.0.3-13.al8
    
    libqmi
    
    1.18.0-2.1.al7
    
    1.32.2-3.0.1.al8
    
    libquvi
    
    0.4.1-5.1.al7
    
    0.9.4-12.2.al8
    
    libquvi-scripts
    
    0.4.10-3.1.al7
    
    0.9.20131130-9.1.al8
    
    librabbitmq
    
    0.8.0-3.1.al7
    
    0.11.0-5.0.1.al8
    
    LibRaw
    
    0.19.4-1.1.al7
    
    0.20.2-5.0.1.al8
    
    libraw1394
    
    2.1.0-2.1.al7
    
    2.1.2-5.2.al8
    
    librdkafka
    
    0.11.4-1.1.al7
    
    1.6.1-102.0.1.al8
    
    librelp
    
    1.2.12-1.1.al7.1
    
    1.9.0-1.al8
    
    libreoffice
    
    5.3.6.1-25.1.al7
    
    7.1.8.1-8.0.1.al8
    
    libreoffice-voikko
    
    3.4-4.1.al7
    
    5.0-6.al8
    
    librepo
    
    1.8.1-8.1.al7
    
    1.14.2-4.0.1.al8
    
    libreport
    
    2.1.11-53.1.al7
    
    2.9.5-15.1.al8
    
    libreswan
    
    3.25-9.1.1.al7
    
    4.9-3.al8
    
    librevenge
    
    0.0.2-2.1.al7
    
    0.0.4-12.1.al8
    
    librsvg2
    
    2.40.20-1.1.al7
    
    2.50.7-1.0.2.al8
    
    libsamplerate
    
    0.1.8-6.1.al7
    
    0.1.9-1.2.al8
    
    libseccomp
    
    2.3.1-4.1.al7
    
    2.5.2-1.0.6.al8
    
    libsecret
    
    0.18.6-1.1.al7
    
    0.20.4-4.0.1.al8
    
    libselinux
    
    2.5-15.1.al7
    
    2.9-8.2.al8
    
    libsemanage
    
    2.5-14.1.al7
    
    2.9-9.al8
    
    libsepol
    
    2.5-10.1.al7
    
    2.9-3.0.1.al8
    
    libshout
    
    2.2.2-11.1.al7
    
    2.4.3-7.0.1.al8
    
    libSM
    
    1.2.2-2.1.al7
    
    1.2.3-1.2.al8
    
    libsmbios
    
    2.3.3-8.1.al7
    
    2.4.1-2.2.al8
    
    libsndfile
    
    1.0.25-12.1.al7.1
    
    1.0.28-13.0.1.al8
    
    libsolv
    
    0.6.34-4.1.al7
    
    0.7.20-4.al8
    
    libsoup
    
    2.62.2-2.1.al7
    
    2.62.3-3.0.1.al8
    
    libspectre
    
    0.2.8-1.1.al7
    
    0.2.9-6.al8
    
    libspiro
    
    20071029-12.1.al7
    
    20200505-5.al8
    
    libsrtp
    
    1.4.4-11.20101004cvs.1.al7
    
    2.3.0-7.al8
    
    libstaroffice
    
    0.0.4-1.1.al7
    
    0.0.7-5.al8
    
    libstoragemgmt
    
    1.8.1-2.1.al7
    
    1.9.1-3.al8
    
    libtalloc
    
    2.1.16-1.1.al7
    
    2.3.4-1.al8
    
    libtar
    
    1.2.11-29.1.al7
    
    1.2.20-17.0.1.al8
    
    libtasn1
    
    4.10-1.1.al7
    
    4.13-4.0.1.al8
    
    libtdb
    
    1.3.18-1.1.al7
    
    1.4.7-1.0.1.al8
    
    libteam
    
    1.29-3.1.al7
    
    1.31-4.0.1.al8
    
    libtevent
    
    0.9.39-1.1.al7
    
    0.13.0-1.al8
    
    libthai
    
    0.1.14-9.1.al7
    
    0.1.28-8.al8
    
    libtiff
    
    4.0.3-35.1.al7
    
    4.4.0-8.0.1.al8
    
    libtimezonemap
    
    0.4.4-2.1.al7
    
    0.4.5.1-4.al8
    
    libtirpc
    
    0.2.4-0.16.1.al7
    
    1.3.2-1.0.1.al8
    
    libtool
    
    2.4.2-22.1.al7
    
    2.4.6-25.3.al8
    
    libuninameslist
    
    20091231-8.1.al7
    
    20170701-4.2.al8
    
    libunistring
    
    0.9.3-9.1.al7
    
    0.9.9-3.2.al8
    
    libusb
    
    0.1.4-3.1.al7
    
    0.1.7-5.al8
    
    libusbmuxd
    
    1.0.10-5.1.al7
    
    2.0.2-5.0.1.al8
    
    libusbx
    
    1.0.21-1.1.al7
    
    1.0.23-4.1.al8
    
    libuser
    
    0.60-9.1.al7
    
    0.62-25.0.1.al8
    
    libva
    
    1.8.3-1.1.al7
    
    2.13.0-2.0.1.al8
    
    libvdpau
    
    1.1.1-3.1.al7
    
    1.4-2.1.al8
    
    libverto
    
    0.2.5-4.1.al7
    
    0.3.2-2.al8
    
    libvirt
    
    4.5.0-36.1.al7.5
    
    8.0.0-21.al8
    
    libvirt-glib
    
    1.0.0-1.1.al7
    
    4.0.0-3.al8
    
    libvirt-python
    
    4.5.0-1.1.al7
    
    8.0.0-2.al8
    
    libvisio
    
    0.1.6-1.1.al7
    
    0.1.7-9.0.1.al8
    
    libvma
    
    8.7.5-1.1.al7
    
    9.6.4-1.0.1.al8
    
    libvncserver
    
    0.9.9-14.1.al7.1
    
    0.9.11-17.1.al8
    
    libvoikko
    
    3.6-5.1.al7
    
    4.1.1-3.0.1.al8
    
    libvorbis
    
    1.3.3-8.1.al7.1
    
    1.3.7-5.0.1.al8
    
    libvpx
    
    1.3.0-8.1.al7
    
    1.7.0-8.1.al8
    
    libwacom
    
    0.30-1.1.al7
    
    1.12.1-2.al8
    
    libwebp
    
    0.3.0-11.1.al7
    
    1.2.0-7.0.1.al8
    
    libwmf
    
    0.2.8.4-44.1.al7
    
    0.2.12-10.al8
    
    libwnck3
    
    3.24.1-2.1.al7
    
    40.0-2.al8
    
    libwpd
    
    0.10.0-2.1.al7
    
    0.10.3-10.al8
    
    libwpg
    
    0.3.0-1.1.al7
    
    0.3.3-8.al8
    
    libwps
    
    0.4.7-1.1.al7
    
    0.4.12-4.al8
    
    libX11
    
    1.6.7-4.1.al7
    
    1.7.0-7.al8
    
    libXau
    
    1.0.8-2.1.1.al7
    
    1.0.9-8.al8
    
    libxcb
    
    1.13-1.1.al7
    
    1.13.1-1.3.al8
    
    libXcomposite
    
    0.4.4-4.1.1.al7
    
    0.4.5-7.al8
    
    libXcursor
    
    1.1.15-1.1.al7
    
    1.2.0-7.al8
    
    libXdamage
    
    1.1.4-4.1.1.al7
    
    1.1.5-7.al8
    
    libXdmcp
    
    1.1.2-6.1.al7
    
    1.1.3-8.al8
    
    libXext
    
    1.3.3-3.1.al7
    
    1.3.4-8.al8
    
    libXft
    
    2.3.2-2.1.al7
    
    2.3.3-8.al8
    
    libXi
    
    1.7.9-1.1.al7
    
    1.7.10-1.1.al8
    
    libXinerama
    
    1.1.3-2.1.1.al7
    
    1.1.4-1.2.al8
    
    libxkbcommon
    
    0.7.1-3.1.al7
    
    1.0.3-4.al8
    
    libxkbfile
    
    1.0.9-3.1.al7
    
    1.1.0-1.1.al8
    
    libxml2
    
    2.9.1-6.7.al7.6
    
    2.9.7-17.0.2.al8
    
    libXmu
    
    1.1.2-2.1.al7
    
    1.1.3-8.al8
    
    libXp
    
    1.0.2-2.1.1.al7
    
    1.0.3-3.2.al8
    
    libXpm
    
    3.5.12-2.1.al7
    
    3.5.13-8.al8
    
    libXrandr
    
    1.5.1-2.1.al7
    
    1.5.2-8.al8
    
    libXScrnSaver
    
    1.2.2-6.1.1.al7
    
    1.2.3-1.2.al8
    
    libxshmfence
    
    1.2-1.1.al7
    
    1.3-2.2.al8
    
    libxslt
    
    1.1.28-6.1.al7
    
    1.1.32-6.1.al8
    
    libXt
    
    1.1.5-3.1.al7
    
    1.2.0-6.al8
    
    libXvMC
    
    1.0.10-1.1.al7
    
    1.0.12-1.1.al8
    
    libXxf86dga
    
    1.1.4-2.1.1.al7
    
    1.1.5-8.al8
    
    libXxf86misc
    
    1.0.3-7.1.1.al7
    
    1.0.4-1.2.al8
    
    libyami
    
    1.2.0-2.1.al7
    
    1.3.1-1.3.al8
    
    libyaml
    
    0.1.4-11.1.al7
    
    0.1.7-5.2.al8
    
    libzip
    
    0.10.1-8.1.al7
    
    1.6.1-1.1.al8
    
    linux-firmware
    
    20200421-80.git78c0348.1.al7
    
    20230404-117.git2e92a49f.al8
    
    linuxconsoletools
    
    1.4.5-3.1.al7
    
    1.6.0-4.2.al8
    
    linuxdoc-tools
    
    0.9.68-5.1.al7
    
    0.9.72-5.1.al8
    
    linuxptp
    
    2.0-2.1.al7.1
    
    3.1.1-3.al8.2
    
    lksctp-tools
    
    1.0.17-2.4.al7
    
    1.0.18-3.2.al8
    
    lm\_sensors
    
    3.4.0-8.20160601gitf9185e5.1.al7
    
    3.6.0-10.al8
    
    logrotate
    
    3.8.6-19.1.al7
    
    3.14.0-6.0.1.al8
    
    logwatch
    
    7.4.0-35.20130522svn140.1.al7
    
    7.5.5-4.al8
    
    lohit-assamese-fonts
    
    2.5.3-2.1.al7
    
    2.91.5-3.1.al8
    
    lohit-bengali-fonts
    
    2.5.3-4.1.al7
    
    2.91.5-3.1.al8
    
    lohit-devanagari-fonts
    
    2.5.3-4.1.al7
    
    2.95.5-4.al8
    
    lohit-gujarati-fonts
    
    2.5.3-2.1.al7
    
    2.92.4-3.1.al8
    
    lohit-kannada-fonts
    
    2.5.3-3.1.al7
    
    2.5.4-3.1.al8
    
    lohit-malayalam-fonts
    
    2.5.3-2.1.al7
    
    2.92.2-3.1.al8
    
    lohit-marathi-fonts
    
    2.5.3-2.1.al7
    
    2.94.2-5.1.al8
    
    lohit-nepali-fonts
    
    2.5.3-2.1.al7
    
    2.94.2-3.1.al8
    
    lohit-tamil-fonts
    
    2.5.3-2.1.al7
    
    2.91.3-3.1.al8
    
    lohit-telugu-fonts
    
    2.5.3-3.1.al7
    
    2.5.5-3.1.al8
    
    lorax
    
    19.7.28-1.1.al7
    
    28.14.70-1.0.1.al8
    
    lshw
    
    B.02.18-17.1.al7
    
    B.02.19.2-6.0.2.al8
    
    lsof
    
    4.87-6.1.al7
    
    4.93.2-1.1.al8
    
    lsscsi
    
    0.27-6.1.al7
    
    0.32-3.0.1.al8
    
    lua
    
    5.1.4-15.4.al7
    
    5.3.4-12.0.2.al8
    
    luksmeta
    
    8-2.1.al7
    
    9-4.1.al8
    
    lvm2
    
    2.02.187-6.1.al7.5
    
    2.03.14-9.0.1.al8
    
    lynx
    
    2.8.8-0.3.dev15.1.al7
    
    2.8.9-4.0.1.al8
    
    lzo
    
    2.06-8.1.al7
    
    2.08-14.2.al8
    
    m17n-db
    
    1.6.4-4.1.al7
    
    1.8.0-3.1.al8
    
    m17n-lib
    
    1.6.4-14.1.al7
    
    1.8.0-2.2.al8
    
    m4
    
    1.4.16-10.1.al7
    
    1.4.18-7.2.al8
    
    mailcap
    
    2.1.41-2.1.al7
    
    2.1.48-3.1.al8
    
    mailman
    
    2.1.15-30.1.al7.2
    
    2.1.29-12.al8.2
    
    make
    
    3.82-24.1.al7
    
    4.2.1-11.0.1.al8
    
    malaga-suomi-voikko
    
    1.12-5.1.al7
    
    1.19-5.2.al8
    
    mallard-rng
    
    1.0.2-1.1.al7
    
    1.1.0-7.al8
    
    man-db
    
    2.6.3-11.1.al7
    
    2.7.6.1-18.0.1.al8
    
    man-pages
    
    3.53-5.1.al7
    
    4.15-7.0.1.al8
    
    man-pages-overrides
    
    7.9.0-1.1.al7
    
    8.6.0.0-1.al8
    
    mariadb
    
    5.5.68-1.1.al7
    
    10.5.16-2.0.1.al8
    
    maven
    
    3.0.5-17.4.al7
    
    3.6.2-7.al8
    
    maven-antrun-plugin
    
    1.7-8.1.al7
    
    1.8-6.1.al8
    
    maven-archiver
    
    2.5-9.1.al7
    
    3.4.0-3.1.al8
    
    maven-assembly-plugin
    
    2.4-8.1.al7
    
    3.1.1-3.1.al8
    
    maven-clean-plugin
    
    2.5-8.1.al7
    
    3.0.0-5.1.al8
    
    maven-common-artifact-filters
    
    1.4-11.1.al7
    
    3.0.1-4.1.al8
    
    maven-compiler-plugin
    
    3.1-4.1.al7
    
    3.8.1-2.2.al8
    
    maven-dependency-analyzer
    
    1.3-9.1.al7
    
    1.8-2.1.al8
    
    maven-dependency-plugin
    
    2.7-3.1.al7
    
    3.1.1-2.1.al8
    
    maven-dependency-tree
    
    2.0-7.1.al7
    
    3.0-5.1.al8
    
    maven-doxia
    
    1.4-5.1.al7
    
    1.7-8.1.al8
    
    maven-doxia-sitetools
    
    1.4-3.1.al7
    
    1.7.5-2.1.al8
    
    maven-enforcer
    
    1.2-8.1.al7
    
    3.0.0~M2-2.1.al8
    
    maven-file-management
    
    1.2.1-8.1.al7
    
    3.0.0-5.1.al8
    
    maven-filtering
    
    1.1-3.1.al7
    
    3.1.1-5.1.al8
    
    maven-install-plugin
    
    2.4-7.1.al7
    
    2.5.2-7.1.al8
    
    maven-invoker
    
    2.1.1-9.1.al7
    
    3.0.1-2.1.al8
    
    maven-invoker-plugin
    
    1.8-8.1.al7
    
    1.10-7.1.al8
    
    maven-jar-plugin
    
    2.4-8.1.al7
    
    3.1.2-3.1.al8
    
    maven-parent
    
    20-5.1.al7
    
    33-3.1.al8
    
    maven-plugin-build-helper
    
    1.5-13.1.al7
    
    1.9.1-8.1.al8
    
    maven-plugin-bundle
    
    2.3.7-12.1.al7
    
    3.5.0-2.1.al8
    
    maven-plugin-testing
    
    2.1-11.1.al7
    
    3.3.0-12.1.al8
    
    maven-plugin-tools
    
    3.1-17.1.al7
    
    3.6.0-3.1.al8
    
    maven-plugins-pom
    
    23-7.1.al7
    
    28-7.1.al8
    
    maven-remote-resources-plugin
    
    1.4-7.1.al7
    
    1.6.0-2.1.al8
    
    maven-reporting-impl
    
    2.2-8.1.al7
    
    3.0.0-4.1.al8
    
    maven-resources-plugin
    
    2.6-6.1.al7
    
    3.1.0-3.1.al8
    
    maven-script-interpreter
    
    1.0-7.1.al7
    
    1.1-11.1.al8
    
    maven-shade-plugin
    
    2.0-6.1.al7
    
    3.1.0-3.1.al8
    
    maven-shared
    
    19-4.1.al7
    
    22-6.1.al8
    
    maven-shared-io
    
    1.1-7.1.al7
    
    3.0.0-5.1.al8
    
    maven-shared-utils
    
    0.4-3.1.al7
    
    3.2.1-0.5.al8
    
    maven-source-plugin
    
    2.2.1-7.1.al7
    
    3.0.1-4.1.al8
    
    maven-surefire
    
    2.15-3.1.al7
    
    3.0.0~M3-4.1.al8
    
    maven-verifier
    
    1.4-7.1.al7
    
    1.6-6.1.al8
    
    maven-wagon
    
    2.4-3.1.al7
    
    3.3.4-2.1.al8
    
    mc
    
    4.8.7-11.4.al7
    
    4.8.26-5.al8
    
    mcelog
    
    175-1.1.al7
    
    189-0.al8
    
    mcstrans
    
    0.3.4-5.1.al7
    
    2.9-2.1.al8
    
    mdadm
    
    4.1-9.1.al7
    
    4.2-7.0.1.al8
    
    media-player-info
    
    17-4.1.al7
    
    23-2.1.al8
    
    memcached
    
    1.4.15-10.1.al7.1
    
    1.5.22-2.1.al8
    
    memkind
    
    1.7.0-1.1.al7
    
    1.11.0-2.0.1.al8
    
    mesa
    
    18.3.4-12.2.al7
    
    22.3.0-2.1.al8
    
    mesa-demos
    
    8.3.0-10.1.al7
    
    8.4.0-5.20181118git1830dcb.1.al8
    
    mesa-libGLU
    
    9.0.0-4.1.al7
    
    9.0.1-6.al8
    
    metacity
    
    2.34.13-7.1.al7
    
    3.28.0-1.2.al8
    
    microcode\_ctl
    
    2.1-73.16.1.al7
    
    20220809-2.20230808.2.0.1.al8
    
    minicom
    
    2.6.2-5.1.al7
    
    2.7.1-9.2.al8
    
    mksh
    
    46-8.1.al7
    
    56c-5.2.al8
    
    mobile-broadband-provider-info
    
    1.20170310-1.1.al7
    
    20210805-1.0.1.al8
    
    mod\_auth\_gssapi
    
    1.5.1-7.1.al7
    
    1.6.3-7.0.1.al8
    
    mod\_auth\_openidc
    
    1.8.8-9.1.al7
    
    2.4.9.4-1.al8
    
    mod\_authnz\_pam
    
    1.1.0-1.1.al7
    
    1.2.2-3.0.1.al8
    
    mod\_security
    
    2.9.2-1.1.al7
    
    2.9.6-1.al8
    
    mod\_security\_crs
    
    2.2.9-3.1.al7
    
    3.3.4-1.al8
    
    mod\_wsgi
    
    3.4-18.1.al7
    
    4.6.4-5.al8
    
    modello
    
    1.7-4.1.al7
    
    1.11-2.1.al8
    
    ModemManager
    
    1.6.10-4.1.al7
    
    1.20.2-1.al8
    
    mojo-parent
    
    32-4.1.al7
    
    40-6.1.al8
    
    mpfr
    
    3.1.1-4.1.al7
    
    3.1.6-1.2.al8
    
    mpg123
    
    1.25.6-1.1.al7
    
    1.26.2-5.al8
    
    mpich
    
    3.2-2.5.al7
    
    3.4.2-1.0.1.al8
    
    mpitests
    
    5.4.2-1.1.al7
    
    5.8-1.al8
    
    mrtg
    
    2.17.4-11.1.al7
    
    2.17.7-1.2.al8
    
    mstflint
    
    4.13.3-2.1.al7
    
    4.23.0-2.0.1.al8
    
    mtr
    
    0.85-7.1.al7
    
    0.92-3.2.al8
    
    mutt
    
    1.5.21-29.1.al7
    
    2.2.6-1.0.1.al8
    
    mutter
    
    3.28.3-32.1.al7
    
    40.9-14.0.2.al8
    
    mvapich2
    
    2.2-4.1.al7
    
    2.3.6-1.0.2.al8
    
    mythes
    
    1.2.3-7.1.al7
    
    1.2.4-9.2.al8
    
    mythes-de
    
    0.20130206-2.1.al7
    
    0.20180226-3.1.al8
    
    mythes-es
    
    0.20130102-2.1.al7
    
    2.3-1.1.al8
    
    nano
    
    2.3.1-10.1.al7
    
    2.9.8-1.2.al8
    
    nasm
    
    2.10.07-7.1.al7
    
    2.15.03-3.1.al8
    
    nautilus
    
    3.26.3.1-7.1.al7
    
    40.2-11.0.1.al8
    
    nbdkit
    
    1.8.0-4.1.al7
    
    1.24.0-5.al8
    
    ncurses
    
    5.9-14.20130511.1.al7
    
    6.1-10.20180224.0.1.al8
    
    ndctl
    
    65-5.1.al7
    
    71.1-4.0.1.al8
    
    neon
    
    0.30.0-4.1.al7
    
    0.31.2-11.0.1.al8
    
    net-snmp
    
    5.7.2-49.1.al7.3
    
    5.8-27.0.1.al8
    
    netlabel\_tools
    
    0.20-5.1.al7
    
    0.30.0-3.2.al8
    
    netpbm
    
    10.79.00-7.1.al7
    
    10.95.00-2.al8
    
    nettle
    
    2.7.1-9.1.al7
    
    3.4.1-7.0.1.al8
    
    network-manager-applet
    
    1.8.6-2.1.al7
    
    1.26.0-1.0.1.al8
    
    NetworkManager
    
    1.18.8-2.1.al7
    
    1.40.16-4.0.1.al8
    
    NetworkManager-libreswan
    
    1.2.4-2.1.al7
    
    1.2.10-4.2.al8
    
    newt
    
    0.52.15-4.1.al7
    
    0.52.20-11.1.al8
    
    nfs-utils
    
    1.3.0-0.68.1.al7.2
    
    2.3.3-59.0.2.al8
    
    nfs4-acl-tools
    
    0.3.3-21.1.al7
    
    0.3.5-3.2.al8
    
    nftables
    
    0.8-14.al7.1
    
    0.9.3-26.al8
    
    nmap
    
    6.40-19.1.al7
    
    7.91-12.0.1.al8
    
    nspr
    
    4.34.0-3.1.1.al7
    
    4.35.0-1.0.1.al8
    
    nss-pam-ldapd
    
    0.8.13-25.1.al7
    
    0.9.9-5.al8
    
    numactl
    
    2.0.12-5.1.al7
    
    2.0.14-9.al8
    
    numpy
    
    1.7.1-13.1.al7
    
    1.14.3-10.0.1.al8
    
    nvme-cli
    
    1.8.1-3.1.al7
    
    1.16-7.0.1.al8
    
    nvmetcli
    
    0.6-1.1.al7
    
    0.7-3.0.1.al8
    
    objectweb-asm
    
    3.3.1-9.1.al7
    
    7.3.1-3.1.al8
    
    ocaml
    
    4.05.0-6.1.al7
    
    4.07.0-3.1.al8
    
    ocaml-camlp4
    
    4.05.0-0.4.gitfc12d8c7.1.al7
    
    4.07.0-0.gitd32d9973.1.1.al8.3
    
    ocaml-extlib
    
    1.5.3-7.2.al7
    
    1.7.5-3.1.al8
    
    ocaml-findlib
    
    1.7.3-7.1.al7
    
    1.8.0-4.1.al8
    
    ocaml-ocamlbuild
    
    0.11.0-9.1.al7
    
    0.12.0-6.1.al8
    
    oddjob
    
    0.31.5-4.1.al7
    
    0.34.7-3.0.1.al8
    
    opa-ff
    
    10.9.0.0.204-1.1.al7
    
    10.11.1.3.1-1.0.1.al8
    
    opa-fm
    
    10.9.0.0.204-1.1.al7
    
    10.11.2.0.3-1.0.1.al8
    
    open-vm-tools
    
    11.0.5-3.1.al7.7
    
    12.1.5-3.al8
    
    opencryptoki
    
    3.12.1-3.1.al7
    
    3.19.0-2.0.1.al8
    
    opencv
    
    2.4.5-3.1.al7
    
    3.4.6-8.al8
    
    opendnssec
    
    1.4.7-4.1.al7
    
    2.1.7-1.1.al8
    
    OpenEXR
    
    1.7.1-8.1.al7
    
    2.2.0-12.1.al8
    
    OpenIPMI
    
    2.0.27-1.2.al7
    
    2.0.32-3.0.2.al8
    
    openjpeg2
    
    2.3.1-3.1.al7
    
    2.4.0-5.al8
    
    openldap
    
    2.4.44-25.1.al7
    
    2.4.46-18.al8
    
    openmpi
    
    1.10.7-5.2.al7
    
    4.1.1-3.0.1.al8
    
    openoffice-lv
    
    0.9.4-5.1.al7
    
    1.4.0-2.al8
    
    openoffice.org-dict-cs\_CZ
    
    20060303-14.1.al7
    
    20080822-8.1.al8
    
    opensc
    
    0.19.0-4.1.al7
    
    0.20.0-4.1.al8
    
    openscap
    
    1.2.17-15.1.al7
    
    1.3.8-1.0.1.al8
    
    opensm
    
    3.3.21-4.1.al7
    
    3.3.24-1.0.1.al8
    
    openssh
    
    7.4p1-23.1.al7
    
    8.0p1-19.0.1.al8
    
    openssl
    
    1.0.2k-26.1.al7
    
    1.1.1k-9.0.1.al8
    
    openwsman
    
    2.6.3-7.git4391e5c.1.al7
    
    2.6.5-9.0.1.al8
    
    opus
    
    1.0.2-6.1.al7
    
    1.3-0.4.beta.2.al8
    
    orc
    
    0.4.26-1.1.al7
    
    0.4.28-3.1.al8
    
    orca
    
    3.6.3-4.1.al7
    
    40.3-1.al8
    
    os-prober
    
    1.58-9.4.al7
    
    1.74-9.0.1.al8
    
    osinfo-db
    
    20200529-1.1.al7
    
    20220727-2.0.1.al8
    
    osinfo-db-tools
    
    1.1.0-1.1.al7
    
    1.9.0-1.1.al8
    
    overpass-fonts
    
    2.1-1.4.al7
    
    3.0.4-8.al8
    
    p11-kit
    
    0.23.5-3.1.al7
    
    0.23.22-1.1.al8
    
    pacemaker
    
    1.1.23-1.1.al7.1
    
    2.1.5-9.3.0.1.al8
    
    PackageKit
    
    1.1.10-2.1.al7
    
    1.1.12-6.1.al8
    
    pam
    
    1.1.8-23.1.al7
    
    1.3.1-25.0.1.al8
    
    pango
    
    1.42.4-4.1.al7
    
    1.48.7-3.0.1.al8
    
    papi
    
    5.2.0-26.1.al7
    
    6.0.0-12.0.1.al8
    
    paps
    
    0.6.8-28.1.al7.1
    
    0.7.1-4.0.1.al8
    
    paratype-pt-sans-fonts
    
    20101909-3.1.al7
    
    20141121-6.1.al8
    
    parted
    
    3.1-32.1.al7
    
    3.2-39.0.1.al8
    
    passwd
    
    0.79-6.1.al7
    
    0.80-4.0.1.al8
    
    patch
    
    2.7.1-12.1.al7
    
    2.7.6-11.1.al8
    
    patchutils
    
    0.3.3-5.1.al7
    
    0.4.2-7.0.1.al8
    
    pciutils
    
    3.5.1-3.1.al7
    
    3.7.0-3.0.1.al8
    
    pcp
    
    4.3.2-13.1.al7
    
    5.3.7-17.0.1.al8
    
    pcre
    
    8.32-17.1.al7
    
    8.42-6.0.1.al8
    
    pcre2
    
    10.23-2.1.al7
    
    10.32-3.0.1.al8
    
    pcsc-lite
    
    1.8.8-8.1.al7
    
    1.9.5-1.al8
    
    pcsc-lite-ccid
    
    1.4.10-15.1.al7
    
    1.4.29-5.1.0.1.al8
    
    perftest
    
    4.2-2.1.al7
    
    4.5.0.20-4.0.1.al8
    
    perl
    
    5.16.3-299.1.al7
    
    5.26.3-422.0.1.al8
    
    perl-Algorithm-Diff
    
    1.1902-17.1.al7
    
    1.1903-9.1.al8
    
    perl-App-cpanminus
    
    1.6922-2.1.al7
    
    1.7044-5.1.al8
    
    perl-Archive-Tar
    
    1.92-3.1.al7
    
    2.30-1.1.al8
    
    perl-Archive-Zip
    
    1.30-11.1.al7
    
    1.60-3.1.al8
    
    perl-Authen-SASL
    
    2.15-10.1.al7
    
    2.16-13.1.al8
    
    perl-autodie
    
    2.16-2.1.al7
    
    2.29-396.1.al8
    
    perl-B-Lint
    
    1.17-3.1.al7
    
    1.20-11.1.al8
    
    perl-Bit-Vector
    
    7.3-3.1.al7
    
    7.4-11.2.al8
    
    perl-Capture-Tiny
    
    0.24-1.1.al7
    
    0.46-4.1.al8
    
    perl-Carp
    
    1.26-244.1.al7
    
    1.42-396.1.al8
    
    perl-Carp-Clan
    
    6.04-10.1.al7
    
    6.06-6.1.al8
    
    perl-CGI
    
    3.63-4.1.al7
    
    4.38-2.1.al8
    
    perl-Class-Inspector
    
    1.28-2.1.al7
    
    1.32-2.1.al8
    
    perl-Class-Singleton
    
    1.4-14.1.al7
    
    1.5-9.1.al8
    
    perl-Clone
    
    0.34-5.1.al7
    
    0.39-5.1.al8
    
    perl-Compress-Raw-Bzip2
    
    2.061-3.1.al7
    
    2.081-1.2.al8
    
    perl-Compress-Raw-Zlib
    
    2.061-4.1.al7
    
    2.081-1.2.al8
    
    perl-constant
    
    1.27-2.1.al7
    
    1.33-396.1.al8
    
    perl-Convert-ASN1
    
    0.26-4.1.al7
    
    0.27-17.1.al8
    
    perl-CPAN-Meta
    
    2.120921-5.1.al7
    
    2.150010-396.1.al8
    
    perl-CPAN-Meta-Requirements
    
    2.122-7.1.al7
    
    2.140-396.1.al8
    
    perl-CPAN-Meta-YAML
    
    0.008-14.1.al7
    
    0.018-397.1.al8
    
    perl-Crypt-OpenSSL-Bignum
    
    0.04-18.1.al7
    
    0.09-5.2.al8
    
    perl-Crypt-OpenSSL-Random
    
    0.04-21.1.al7
    
    0.15-3.2.al8
    
    perl-Crypt-OpenSSL-RSA
    
    0.28-7.1.al7
    
    0.31-1.2.al8
    
    perl-Data-Dumper
    
    2.145-3.1.al7
    
    2.167-399.2.al8
    
    perl-Data-OptList
    
    0.107-9.1.al7
    
    0.110-6.1.al8
    
    perl-Date-Calc
    
    6.3-14.1.al7
    
    6.4-9.1.al8
    
    perl-Date-Manip
    
    6.41-2.1.al7
    
    6.60-2.1.al8
    
    perl-DateTime
    
    1.04-6.1.al7
    
    1.50-1.2.al8
    
    perl-DateTime-Locale
    
    0.45-6.1.al7
    
    1.17-2.1.al8
    
    perl-DateTime-TimeZone
    
    1.70-2.1.al7
    
    2.19-1.1.al8
    
    perl-DB\_File
    
    1.830-6.1.al7
    
    1.842-1.3.al8
    
    perl-DBD-MySQL
    
    4.023-6.1.al7
    
    4.046-3.2.al8
    
    perl-DBD-Pg
    
    2.19.3-4.1.al7
    
    3.7.4-4.1.al8
    
    perl-DBD-SQLite
    
    1.39-3.1.al7
    
    1.58-2.3.al8
    
    perl-DBI
    
    1.627-4.1.al7
    
    1.641-4.al8
    
    perl-Devel-CheckLib
    
    0.99-2.1.al7
    
    1.11-5.1.al8
    
    perl-Devel-StackTrace
    
    1.30-2.1.al7
    
    2.03-2.1.al8
    
    perl-Devel-Symdump
    
    2.10-2.1.al7
    
    2.18-5.1.al8
    
    perl-Digest-MD5
    
    2.52-3.1.al7
    
    2.55-396.2.al8
    
    perl-Digest-SHA
    
    5.85-4.1.al7
    
    6.02-1.2.al8
    
    perl-Dist-CheckConflicts
    
    0.06-2.1.al7
    
    0.11-11.1.al8
    
    perl-Encode
    
    2.51-7.1.al7
    
    2.97-3.2.al8
    
    perl-Encode-Locale
    
    1.03-5.1.al7
    
    1.05-10.1.al8
    
    perl-Error
    
    0.17020-2.1.al7
    
    0.17025-2.1.al8
    
    perl-Exception-Class
    
    1.37-3.1.al7
    
    1.44-2.1.al8
    
    perl-Exporter
    
    5.68-3.1.al7
    
    5.72-396.1.al8
    
    perl-ExtUtils-MakeMaker
    
    6.68-3.1.al7
    
    7.34-1.1.al8
    
    perl-ExtUtils-Manifest
    
    1.61-244.1.al7
    
    1.70-395.1.al8
    
    perl-ExtUtils-ParseXS
    
    3.18-3.1.al7
    
    3.35-2.1.al8
    
    perl-FCGI
    
    0.74-8.1.al7
    
    0.78-11.2.al8
    
    perl-File-Copy-Recursive
    
    0.38-14.1.al7
    
    0.40-3.1.al8
    
    perl-File-Fetch
    
    0.42-2.1.al7
    
    0.56-2.1.al8
    
    perl-File-Find-Rule
    
    0.33-5.1.al7
    
    0.34-8.1.al8
    
    perl-File-HomeDir
    
    1.00-4.1.al7
    
    1.002-4.1.al8
    
    perl-File-Path
    
    2.09-2.1.al7
    
    2.15-2.1.al8
    
    perl-File-pushd
    
    1.005-2.1.al7
    
    1.014-6.1.al8
    
    perl-File-Remove
    
    1.52-6.1.al7
    
    1.57-6.1.al8
    
    perl-File-ShareDir
    
    1.03-8.1.al7
    
    1.104-3.1.al8
    
    perl-File-Temp
    
    0.23.01-3.1.al7
    
    0.230.600-1.1.al8
    
    perl-File-Which
    
    1.09-12.1.al7
    
    1.22-2.1.al8
    
    perl-Filter
    
    1.49-3.1.al7
    
    1.58-2.2.al8
    
    perl-Getopt-Long
    
    2.40-3.1.al7
    
    2.50-4.1.al8
    
    perl-gettext
    
    1.05-28.1.al7
    
    1.07-9.1.al8
    
    perl-HTML-Parser
    
    3.71-4.1.al7
    
    3.72-15.1.al8
    
    perl-HTML-Tree
    
    5.03-2.1.al7
    
    5.07-2.1.al8
    
    perl-HTTP-Cookies
    
    6.01-5.1.al7
    
    6.04-2.1.al8
    
    perl-HTTP-Message
    
    6.06-6.1.al7
    
    6.18-1.1.al8
    
    perl-HTTP-Tiny
    
    0.033-3.1.al7
    
    0.074-1.1.al8
    
    perl-IO-Compress
    
    2.061-2.1.al7
    
    2.081-1.1.al8
    
    perl-IO-HTML
    
    1.00-2.1.al7
    
    1.001-11.1.al8
    
    perl-IO-Socket-INET6
    
    2.69-5.1.al7
    
    2.72-12.1.al8
    
    perl-IO-Socket-IP
    
    0.21-5.1.al7
    
    0.39-5.1.al8
    
    perl-IO-Socket-SSL
    
    1.94-7.1.al7
    
    2.066-4.1.al8
    
    perl-IO-stringy
    
    2.110-22.1.al7
    
    2.111-9.1.al8
    
    perl-IO-Tty
    
    1.10-11.1.al7
    
    1.12-11.1.al8
    
    perl-IPC-Cmd
    
    0.80-4.1.al7
    
    1.02-1.1.al8
    
    perl-IPC-Run
    
    0.92-2.1.al7
    
    0.99-1.1.al8
    
    perl-IPC-Run3
    
    0.045-6.1.al7
    
    0.048-12.1.al8
    
    perl-JSON
    
    2.59-2.1.al7
    
    2.97.001-2.1.al8
    
    perl-JSON-PP
    
    2.27202-2.1.al7
    
    2.97.001-3.1.al8
    
    perl-LDAP
    
    0.56-6.1.al7
    
    0.66-7.1.al8
    
    perl-libwww-perl
    
    6.05-2.1.al7
    
    6.34-1.1.al8
    
    perl-List-MoreUtils
    
    0.33-9.1.al7
    
    0.428-2.1.al8
    
    perl-local-lib
    
    1.008010-4.1.al7
    
    2.000024-2.1.al8
    
    perl-Locale-Codes
    
    3.26-2.1.al7
    
    3.57-1.1.al8
    
    perl-Locale-Maketext
    
    1.23-3.1.al7
    
    1.28-396.1.al8
    
    perl-LWP-Protocol-https
    
    6.04-4.1.al7
    
    6.07-4.1.al8
    
    perl-Mail-DKIM
    
    0.39-8.1.al7
    
    1.20200907-1.0.2.al8
    
    perl-Mail-SPF
    
    2.8.0-4.1.al7
    
    2.9.0-15.1.al8
    
    perl-MailTools
    
    2.12-2.1.al7
    
    2.20-2.1.al8
    
    perl-Module-Build
    
    0.40.05-2.1.al7
    
    0.42.24-5.1.al8
    
    perl-Module-Implementation
    
    0.06-6.1.al7
    
    0.09-15.1.al8
    
    perl-Module-Install
    
    1.06-4.1.al7
    
    1.19-2.1.al8
    
    perl-Module-Load
    
    0.24-3.1.al7
    
    0.32-395.1.al8
    
    perl-Module-Load-Conditional
    
    0.54-3.1.al7
    
    0.68-395.1.al8
    
    perl-Module-Metadata
    
    1.000018-2.1.al7
    
    1.000033-395.1.al8
    
    perl-Module-Pluggable
    
    4.8-3.1.al7
    
    5.2-7.1.al8
    
    perl-Module-Runtime
    
    0.013-4.1.al7
    
    0.016-2.1.al8
    
    perl-Module-ScanDeps
    
    1.10-3.1.al7
    
    1.24-3.1.al8
    
    perl-Mozilla-CA
    
    20130114-5.1.al7
    
    20160104-7.1.al8
    
    perl-Net-DNS
    
    0.72-6.4.al7
    
    1.15-1.1.al8
    
    perl-Net-HTTP
    
    6.06-2.1.al7
    
    6.17-2.1.al8
    
    perl-Net-SMTP-SSL
    
    1.01-13.1.al7
    
    1.04-5.1.al8
    
    perl-Net-SSLeay
    
    1.55-6.1.al7
    
    1.88-2.al8
    
    perl-NetAddr-IP
    
    4.069-3.1.al7
    
    4.079-7.2.al8
    
    perl-Package-DeprecationManager
    
    0.13-7.1.al7
    
    0.17-5.1.al8
    
    perl-Package-Generator
    
    0.103-14.1.al7
    
    1.106-11.1.al8
    
    perl-Package-Stash
    
    0.34-2.1.al7
    
    0.37-9.1.al8
    
    perl-Package-Stash-XS
    
    0.26-3.1.al7
    
    0.28-17.2.al8
    
    perl-PadWalker
    
    1.96-3.1.al7
    
    2.3-2.2.al8
    
    perl-Params-Validate
    
    1.08-4.1.al7
    
    1.29-5.2.al8
    
    perl-parent
    
    0.225-244.1.al7
    
    0.237-1.1.al8
    
    perl-Parse-Yapp
    
    1.05-50.1.al7
    
    1.21-2.1.al8
    
    perl-PathTools
    
    3.40-5.1.al7
    
    3.74-1.2.al8
    
    perl-Perl-OSType
    
    1.003-3.1.al7
    
    1.010-396.1.al8
    
    perl-Pod-Checker
    
    1.60-2.1.al7
    
    1.73-395.1.al8
    
    perl-Pod-Parser
    
    1.61-2.1.al7
    
    1.63-396.1.al8
    
    perl-Pod-Perldoc
    
    3.20-4.1.al7
    
    3.28-396.1.al8
    
    perl-Pod-Plainer
    
    1.03-4.1.al7
    
    1.04-7.1.al8
    
    perl-Pod-Simple
    
    3.28-4.1.al7
    
    3.35-395.1.al8
    
    perl-Pod-Usage
    
    1.63-3.1.al7
    
    1.69-395.1.al8
    
    perl-podlators
    
    2.5.1-3.1.al7
    
    4.11-1.1.al8
    
    perl-Readonly
    
    1.03-22.1.al7
    
    2.05-5.1.al8
    
    perl-Scalar-List-Utils
    
    1.27-248.1.al7
    
    1.49-2.2.al8
    
    perl-Socket
    
    2.010-5.1.al7
    
    2.027-3.2.al8
    
    perl-Socket6
    
    0.23-15.1.al7
    
    0.28-6.2.al8
    
    perl-Storable
    
    2.45-3.1.al7
    
    3.11-3.2.al8
    
    perl-String-CRC32
    
    1.4-19.1.al7
    
    1.6-4.2.al8
    
    perl-Sub-Exporter
    
    0.986-2.1.al7
    
    0.987-15.1.al8
    
    perl-Sub-Install
    
    0.926-6.1.al7
    
    0.928-14.1.al8
    
    perl-Sub-Uplevel
    
    0.24-4.1.al7
    
    0.2800-4.1.al8
    
    perl-Switch
    
    2.16-7.1.al7
    
    2.17-10.1.al8
    
    perl-Sys-CPU
    
    0.54-4.1.al7
    
    0.61-14.2.al8
    
    perl-Sys-MemInfo
    
    0.91-7.1.al7
    
    0.99-6.2.al8
    
    perl-Sys-Syslog
    
    0.33-3.1.al7
    
    0.35-397.2.al8
    
    perl-Sys-Virt
    
    4.5.0-2.1.al7
    
    8.0.0-1.al8
    
    perl-TermReadKey
    
    2.30-20.1.al7
    
    2.37-7.2.al8
    
    perl-Test-Deep
    
    0.110-2.1.al7
    
    1.127-4.1.al8
    
    perl-Test-Differences
    
    0.5000-10.1.al7
    
    0.6400-8.1.al8
    
    perl-Test-Exception
    
    0.32-2.1.al7
    
    0.43-7.1.al8
    
    perl-Test-Fatal
    
    0.010-5.1.al7
    
    0.014-9.1.al8
    
    perl-Test-Harness
    
    3.28-3.1.al7
    
    3.42-1.1.al8
    
    perl-Test-Pod
    
    1.48-3.1.al7
    
    1.51-8.1.al8
    
    perl-Test-Pod-Coverage
    
    1.08-21.1.al7
    
    1.10-10.1.al8
    
    perl-Test-Requires
    
    0.06-10.1.al7
    
    0.10-10.1.al8
    
    perl-Test-Simple
    
    0.98-243.1.al7
    
    1.302135-1.1.al8
    
    perl-Test-Warn
    
    0.24-6.1.al7
    
    0.32-5.1.al8
    
    perl-Text-Diff
    
    1.41-5.1.al7
    
    1.45-2.1.al8
    
    perl-Text-Glob
    
    0.09-7.1.al7
    
    0.11-4.1.al8
    
    perl-Text-ParseWords
    
    3.29-4.1.al7
    
    3.30-395.1.al8
    
    perl-Text-Soundex
    
    3.04-4.1.al7
    
    3.05-8.2.al8
    
    perl-Text-Unidecode
    
    0.04-20.1.al7
    
    1.30-5.1.al8
    
    perl-Thread-Queue
    
    3.02-2.1.al7
    
    3.13-1.1.al8
    
    perl-threads
    
    1.87-4.1.al7
    
    2.21-2.2.al8
    
    perl-threads-shared
    
    1.43-6.1.al7
    
    1.58-2.2.al8
    
    perl-Tie-IxHash
    
    1.22-11.1.al7
    
    1.23-13.1.al8
    
    perl-Time-HiRes
    
    1.9725-3.1.al7
    
    1.9758-2.1.al8
    
    perl-Time-Local
    
    1.2300-2.1.al7
    
    1.280-1.1.al8
    
    perl-Tk
    
    804.030-6.1.al7
    
    804.034-2.2.al8
    
    perl-Try-Tiny
    
    0.12-2.1.al7
    
    0.30-7.1.al8
    
    perl-URI
    
    1.60-9.1.al7
    
    1.73-3.1.al8
    
    perl-version
    
    0.99.07-6.1.al7
    
    0.99.24-1.2.al8
    
    perl-XML-Catalog
    
    1.0.1-1.1.al7
    
    1.03-11.1.al8
    
    perl-XML-DOM
    
    1.44-19.1.al7
    
    1.46-5.1.al8
    
    perl-XML-LibXML
    
    2.0018-5.1.al7
    
    2.0132-2.2.al8
    
    perl-XML-NamespaceSupport
    
    1.11-10.1.al7
    
    1.12-4.1.al8
    
    perl-XML-Parser
    
    2.41-10.1.al7
    
    2.44-11.2.al8
    
    perl-XML-SAX
    
    0.99-9.1.al7
    
    1.00-1.1.al8
    
    perl-XML-SAX-Base
    
    1.08-7.1.al7
    
    1.09-4.1.al8
    
    perl-XML-Simple
    
    2.20-5.1.al7
    
    2.25-1.1.al8
    
    perl-XML-Twig
    
    3.44-2.1.al7
    
    3.52-7.1.al8
    
    perl-XML-XPath
    
    1.13-22.1.al7
    
    1.42-3.1.al8
    
    perl-YAML
    
    0.84-5.1.al7
    
    1.24-3.1.al8
    
    perl-YAML-Syck
    
    1.27-3.1.al7
    
    1.30-5.1.al8
    
    perl-YAML-Tiny
    
    1.51-6.1.al7
    
    1.73-2.1.al8
    
    perltidy
    
    20121207-3.1.al7
    
    20180220-1.1.al8
    
    pesign
    
    0.109-11.1.al7
    
    0.112-27.0.1.al8
    
    php
    
    5.4.16-48.1.al7
    
    7.4.33-1.0.1.al8
    
    php-pear
    
    1.9.4-23.1.al7
    
    1.10.13-1.0.1.al8
    
    pidgin
    
    2.10.11-9.1.al7
    
    2.13.0-5.2.al8
    
    pidgin-sipe
    
    1.20.1-2.4.al7
    
    1.23.2-1.2.al8
    
    pinentry
    
    0.8.1-17.4.al7
    
    1.1.1-8.al8
    
    pixman
    
    0.34.0-1.4.al7
    
    0.40.0-5.al8
    
    pki-core
    
    10.5.18-27.1.al7
    
    10.14.3-1.al8
    
    plexus-archiver
    
    2.4.2-5.1.al7
    
    4.2.0-2.1.al8
    
    plexus-classworlds
    
    2.4.2-8.1.al7
    
    2.6.0-4.1.al8
    
    plexus-cli
    
    1.2-20.1.al7
    
    1.6-6.1.al8
    
    plexus-compiler
    
    2.2-7.1.al7
    
    2.8.2-2.2.al8
    
    plexus-components-pom
    
    1.2-7.1.al7
    
    4.0-2.1.al8
    
    plexus-containers
    
    1.5.5-14.1.al7
    
    2.1.0-2.al8
    
    plexus-interpolation
    
    1.15-8.1.al7
    
    1.26-3.1.al8
    
    plexus-io
    
    2.0.5-9.1.al7
    
    3.2.0-2.1.al8
    
    plexus-pom
    
    3.3.1-5.1.al7
    
    5.0-2.1.al8
    
    plexus-utils
    
    3.0.9-9.1.al7
    
    3.3.0-3.al8
    
    plexus-velocity
    
    1.1.8-16.1.al7
    
    1.2-4.1.al8
    
    plymouth
    
    0.8.9-0.34.20140113.1.al7
    
    0.9.4-11.20200615git1e36e30.0.1.al8
    
    pmdk-convert
    
    1.5-1.1.al7
    
    1.7-1.1.al8
    
    po4a
    
    0.44-10.1.al7
    
    0.63-1.al8
    
    policycoreutils
    
    2.5-34.1.al7
    
    2.9-24.al8
    
    polkit
    
    0.112-26.4.al7.1
    
    0.115-15.al8
    
    poppler
    
    0.26.5-43.1.al7
    
    20.11.0-6.0.1.al8
    
    poppler-data
    
    0.4.6-3.1.al7
    
    0.4.9-1.1.al8
    
    popt
    
    1.13-16.1.al7
    
    1.18-1.1.al8
    
    postfix
    
    2.10.1-9.1.al7
    
    3.5.8-4.al8
    
    postgresql
    
    9.2.24-8.1.al7
    
    13.11-1.0.1.al8
    
    postgresql-jdbc
    
    9.2.1002-8.1.al7
    
    42.2.14-2.al8
    
    postgresql-odbc
    
    09.03.0100-2.1.al7
    
    10.03.0000-3.0.1.al8
    
    powertop
    
    2.9-1.1.al7
    
    2.15-1.0.1.al8
    
    ppp
    
    2.4.5-34.1.al7
    
    2.4.7-26.1.al8
    
    pps-tools
    
    0-0.9.20120407git0deb9c.1.al7
    
    1.0.2-1.1.al8
    
    pptp
    
    1.7.2-22.1.al7
    
    1.10.0-4.1.al8
    
    procps-ng
    
    3.3.10-28.1.al7
    
    3.3.15-13.0.1.al8
    
    protobuf
    
    2.5.0-8.1.al7
    
    3.5.0-15.al8
    
    protobuf-c
    
    1.0.2-3.4.al7
    
    1.3.0-6.1.al8
    
    ps\_mem
    
    3.1-7.4.al7
    
    3.6-9.al8
    
    psacct
    
    6.6.1-13.1.al7
    
    6.6.3-4.2.al8
    
    psmisc
    
    22.20-17.1.al7
    
    23.1-5.1.al8
    
    pulseaudio
    
    10.0-6.1.al7
    
    15.0-2.0.1.al8
    
    pycairo
    
    1.8.10-8.1.al7
    
    1.16.3-6.2.al8
    
    pygobject2
    
    2.28.6-11.1.al7
    
    2.28.7-4.2.al8
    
    pygobject3
    
    3.22.0-1.1.al7.1
    
    3.40.1-6.0.1.al8
    
    pykickstart
    
    1.99.66.22-1.1.al7
    
    3.16.15-1.al8
    
    pyOpenSSL
    
    0.13.1-4.1.al7
    
    19.0.0-1.1.al8
    
    pyparsing
    
    1.5.6-9.1.al7
    
    2.1.10-7.1.al8
    
    pyparted
    
    3.9-15.1.al7
    
    3.11.7-4.0.1.al8
    
    pyserial
    
    2.6-6.1.al7
    
    3.1.1-8.1.al8
    
    pytest
    
    2.7.0-2.1.al7
    
    3.4.2-11.1.al8
    
    python-blivet
    
    0.61.15.76-1.1.al7
    
    3.6.0-4.0.1.al8
    
    python-cffi
    
    1.6.0-5.4.al7
    
    1.11.5-5.2.al8
    
    python-chardet
    
    2.2.1-3.1.al7
    
    3.0.4-7.1.al8
    
    python-configobj
    
    4.7.2-7.1.al7
    
    5.0.6-11.1.al8
    
    python-configshell
    
    1.1.26-1.1.al7
    
    1.1.28-1.1.al8
    
    python-coverage
    
    3.6-0.5.b3.1.al7
    
    4.5.1-9.al8
    
    python-cryptography
    
    1.7.2-2.1.al7
    
    3.2.1-5.al8
    
    python-cups
    
    1.9.63-6.1.al7
    
    1.9.72-21.2.al8.0.1
    
    python-dateutil
    
    1.5-7.1.al7
    
    2.6.1-6.1.al8
    
    python-decorator
    
    3.4.0-3.1.al7
    
    4.2.1-2.1.al8
    
    python-dmidecode
    
    3.12.2-4.1.al7
    
    3.12.3-2.al8
    
    python-dns
    
    1.12.0-4.20150617git465785f.1.al7
    
    1.15.0-11.al8
    
    python-ethtool
    
    0.8-8.1.al7
    
    0.14-5.al8
    
    python-flask
    
    0.10.1-7.1.al7
    
    0.12.2-4.1.al8
    
    python-gssapi
    
    1.2.0-3.1.al7
    
    1.5.1-5.2.al8
    
    python-hwdata
    
    1.7.3-4.1.al7
    
    2.3.6-3.1.al8
    
    python-idna
    
    2.4-1.1.al7
    
    2.5-5.1.al8
    
    python-inotify
    
    0.9.4-4.1.al7
    
    0.9.6-13.1.al8
    
    python-jinja2
    
    2.7.2-4.1.al7
    
    2.10.1-3.0.1.al8
    
    python-jsonpatch
    
    1.2-4.1.al7
    
    1.21-2.1.al8
    
    python-jsonpointer
    
    1.9-2.1.al7
    
    1.10-11.1.al8
    
    python-jsonschema
    
    2.5.1-4.0.1.al7
    
    2.6.0-4.1.al8
    
    python-jwcrypto
    
    0.4.2-1.1.al7
    
    0.5.0-1.1.al8
    
    python-jwt
    
    1.5.3-1.1.al7
    
    1.6.1-2.1.al8
    
    python-kdcproxy
    
    0.3.2-3.1.al7
    
    0.4-5.3.al8
    
    python-ldap
    
    2.4.15-2.1.al7
    
    3.3.1-2.al8
    
    python-linux-procfs
    
    0.4.11-4.1.al7
    
    0.7.1-1.al8
    
    python-lxml
    
    3.2.1-4.1.al7
    
    4.2.3-4.0.1.al8
    
    python-mako
    
    0.8.1-2.1.al7
    
    1.0.6-14.al8
    
    python-markupsafe
    
    0.11-10.1.al7
    
    0.23-19.2.al8
    
    python-meh
    
    0.25.3-1.1.al7
    
    0.47.2-1.1.al8
    
    python-netaddr
    
    0.7.5-9.1.al7
    
    0.7.19-8.1.al8
    
    python-netifaces
    
    0.10.4-3.4.al7
    
    0.10.6-4.2.al8
    
    python-nss
    
    0.16.0-3.1.al7
    
    1.0.1-10.1.al8
    
    python-ntplib
    
    0.3.2-1.1.al7
    
    0.3.3-10.1.al8
    
    python-oauthlib
    
    2.0.1-8.1.al7
    
    2.1.0-1.1.al8
    
    python-pillow
    
    2.0.0-23.gitd1c6db8.1.al7
    
    5.1.1-18.al8
    
    python-ply
    
    3.4-11.1.al7
    
    3.9-9.1.al8
    
    python-psycopg2
    
    2.5.1-4.1.al7
    
    2.7.5-7.2.al8
    
    python-py
    
    1.4.32-1.1.al7
    
    1.5.3-4.1.al8
    
    python-pyasn1
    
    0.1.9-7.4.al7
    
    0.3.7-6.1.al8
    
    python-pycurl
    
    7.19.0-19.4.al7
    
    7.43.0.2-4.1.al8
    
    python-pyudev
    
    0.15-9.1.al7
    
    0.21.0-7.1.al8
    
    python-qrcode
    
    5.0.1-1.1.al7
    
    5.1-12.1.al8
    
    python-reportlab
    
    2.5-10.1.al7
    
    3.4.0-8.1.al8
    
    python-requests
    
    2.6.0-10.1.al7
    
    2.20.0-3.0.1.al8
    
    python-requests-oauthlib
    
    0.8.0-5.1.al7
    
    1.0.0-1.1.al8
    
    python-rpm-generators
    
    6-2.1.al7
    
    5-8.al8
    
    python-rtslib
    
    2.1.74-1.1.al7
    
    2.1.75-4.al8
    
    python-schedutils
    
    0.4-6.4.al7
    
    0.6-6.2.al8
    
    python-setuptools
    
    0.9.8-7.1.al7
    
    39.2.0-7.al8
    
    python-six
    
    1.9.0-2.1.al7
    
    1.11.0-8.1.al8
    
    python-slip
    
    0.4.0-4.1.al7
    
    0.6.4-13.al8
    
    python-sphinx
    
    1.1.3-11.4.al7
    
    1.7.6-3.al8
    
    python-suds
    
    0.4.1-5.1.al7
    
    0.7-0.11.94664ddd46a6.al8
    
    python-urllib3
    
    1.10.2-7.1.al7
    
    1.24.2-5.1.al8
    
    python-urwid
    
    1.1.1-3.1.al7
    
    1.3.1-4.2.al8
    
    python-yubico
    
    1.2.3-1.1.al7
    
    1.3.2-9.1.al8
    
    pytz
    
    2016.10-2.1.al7
    
    2017.2-9.1.al8
    
    pywbem
    
    0.7.0-25.20130827svn625.1.al7
    
    0.11.0-8.1.al8
    
    pyxattr
    
    0.5.1-5.1.al7
    
    0.5.3-18.1.al8
    
    PyYAML
    
    3.10-11.1.al7
    
    3.12-12.2.al8
    
    qdox
    
    1.12.1-10.4.al7
    
    2.0-3.M9.1.al8
    
    qemu-kvm
    
    1.5.3-175.1.al7.6
    
    6.2.0-33.0.2.al8
    
    qgnomeplatform
    
    0.3-5.2.al7
    
    0.7.1-3.0.2.al8
    
    qpdf
    
    5.0.1-4.1.al7
    
    7.1.1-10.3.al8
    
    qperf
    
    0.4.9-3.4.al7
    
    0.4.11-2.al8
    
    qrencode
    
    3.4.1-3.1.al7
    
    3.4.4-5.2.al8
    
    qt5-qt3d
    
    5.9.7-1.1.al7
    
    5.15.3-1.al8
    
    qt5-qtbase
    
    5.9.7-5.1.al7
    
    5.15.3-1.0.1.al8
    
    qt5-qtcanvas3d
    
    5.9.7-1.1.al7
    
    5.12.5-4.al8
    
    qt5-qtconnectivity
    
    5.9.7-1.1.al7
    
    5.15.3-1.al8
    
    qt5-qtdeclarative
    
    5.9.7-1.1.al7
    
    5.15.3-1.al8
    
    qt5-qtdoc
    
    5.9.7-1.1.al7
    
    5.15.3-1.al8
    
    qt5-qtgraphicaleffects
    
    5.9.7-1.1.al7
    
    5.15.3-1.al8
    
    qt5-qtimageformats
    
    5.9.7-2.1.al7
    
    5.15.3-1.al8
    
    qt5-qtlocation
    
    5.9.7-1.1.al7
    
    5.15.3-1.0.1.al8
    
    qt5-qtmultimedia
    
    5.9.7-1.1.al7
    
    5.15.3-1.al8
    
    qt5-qtquickcontrols
    
    5.9.7-1.1.al7
    
    5.15.3-1.al8
    
    qt5-qtquickcontrols2
    
    5.9.7-1.1.al7
    
    5.15.3-1.al8
    
    qt5-qtscript
    
    5.9.7-1.1.al7
    
    5.15.3-1.0.1.al8
    
    qt5-qtsensors
    
    5.9.7-1.1.al7
    
    5.15.3-1.al8
    
    qt5-qtserialbus
    
    5.9.7-1.1.al7
    
    5.15.3-1.al8
    
    qt5-qtserialport
    
    5.9.7-1.1.al7
    
    5.15.3-1.al8
    
    qt5-qtsvg
    
    5.9.7-1.1.al7
    
    5.15.3-1.al8
    
    qt5-qttools
    
    5.9.7-1.1.al7
    
    5.15.3-4.0.1.al8
    
    qt5-qttranslations
    
    5.9.7-1.1.al7
    
    5.15.3-1.al8
    
    qt5-qtwayland
    
    5.9.7-1.1.al7
    
    5.15.3-1.0.1.al8
    
    qt5-qtwebchannel
    
    5.9.7-1.1.al7
    
    5.15.3-1.al8
    
    qt5-qtwebsockets
    
    5.9.7-1.1.al7
    
    5.15.3-1.al8
    
    qt5-qtx11extras
    
    5.9.7-1.1.al7
    
    5.15.3-1.al8
    
    qt5-qtxmlpatterns
    
    5.9.7-1.1.al7
    
    5.15.3-1.al8
    
    quota
    
    4.01-19.1.al7
    
    4.06-6.al8
    
    radvd
    
    2.17-3.1.al7
    
    2.19-5.0.1.al8
    
    raptor2
    
    2.0.9-3.1.al7
    
    2.0.15-16.1.al8
    
    rasdaemon
    
    0.4.1-37.1.al7
    
    0.6.7-9.al8
    
    rasqal
    
    0.9.30-4.1.al7
    
    0.9.33-6.2.al8
    
    rdma-core
    
    22.4-6.1.al7
    
    44.0-2.0.1.al8.1
    
    readline
    
    6.2-11.1.al7
    
    7.0-10.2.al8
    
    realmd
    
    0.16.1-12.1.al7.1
    
    0.17.1-1.0.1.al8
    
    rear
    
    2.4-17.1.al7
    
    2.6-9.0.1.al8
    
    redfish-finder
    
    0.3-4.1.al7
    
    0.4-9.al8
    
    redhat-rpm-config
    
    9.1.0-88.2.al7
    
    125-1.4.al8
    
    redhat-support-lib-python
    
    0.12.1-1.1.al7
    
    0.13.0-0.0.1.al8
    
    redhat-support-tool
    
    0.12.2-1.1.al7
    
    0.13.0-0.0.1.al8
    
    redland
    
    1.0.16-6.1.al7
    
    1.0.17-14.1.al8
    
    relaxngDatatype
    
    1.0-11.1.al7
    
    2011.1-7.1.al8
    
    rhn-client-tools
    
    2.0.2-24.1.al7
    
    2.8.16-13.2.al8
    
    rhnlib
    
    2.5.65-8.1.al7
    
    2.8.6-8.1.al8
    
    rhnsd
    
    5.0.13-10.1.al7
    
    5.0.35-3.2.al8
    
    rng-tools
    
    6.3.1-5.1.al7
    
    6.15-3.0.1.al8
    
    rpcbind
    
    0.2.0-49.1.al7
    
    1.2.5-10.0.1.al8
    
    rpm
    
    4.11.3-48.1.al7
    
    4.14.3-26.0.4.al8
    
    rpmdevtools
    
    8.3-8.1.al7
    
    8.10-8.1.al8
    
    rpmlint
    
    1.5-4.1.al7
    
    1.10-14.1.al8
    
    rrdtool
    
    1.4.8-9.1.al7
    
    1.7.2-21.al8
    
    rsync
    
    3.1.2-12.1.al7
    
    3.1.3-19.0.1.al8.1
    
    rsyslog
    
    8.24.0-57.1.al7.3
    
    8.2102.0-13.al8
    
    ruby
    
    2.0.0.648-39.1.al7
    
    2.7.8-139.0.1.al8
    
    rubygem-abrt
    
    0.3.0-1.1.al7
    
    0.4.0-1.1.al8
    
    samba
    
    4.10.16-25.1.al7
    
    4.17.5-3.0.1.al8
    
    sane-backends
    
    1.0.24-12.2.al7
    
    1.0.32-7.al8
    
    sanlock
    
    3.7.3-1.1.al7
    
    3.8.4-4.0.1.al8
    
    sassist
    
    0.8.5-2.1.al7
    
    0.8.6-1.1.al8
    
    satyr
    
    0.13-15.1.al7
    
    0.26-2.2.al8
    
    sbc
    
    1.0-5.1.al7
    
    1.4-9.al8
    
    sbd
    
    1.4.0-15.1.al7
    
    1.5.1-2.0.1.al8
    
    sblim-cmpi-base
    
    1.6.2-8.4.al7
    
    1.6.4-14.1.al8
    
    sblim-indication\_helper
    
    0.4.2-12.1.al7
    
    0.5.0-2.2.al8
    
    sblim-sfcb
    
    1.3.16-12.1.al7
    
    1.4.9-17.1.al8
    
    sblim-sfcc
    
    2.2.5-6.1.al7
    
    2.2.8-9.2.al8
    
    sblim-wbemcli
    
    1.6.2-11.1.al7
    
    1.6.3-16.0.1.al8
    
    scl-utils
    
    20130529-19.1.al7
    
    2.0.3-4.al8
    
    scrub
    
    2.5.2-7.1.al7
    
    2.6.1-4.al8
    
    seabios
    
    1.11.0-2.2.al7
    
    1.16.0-4.al8
    
    sed
    
    4.2.2-7.1.al7
    
    4.5-5.0.1.al8
    
    selinux-policy
    
    3.13.1-268.1.al7.2
    
    3.14.3-117.0.1.al8
    
    sendmail
    
    8.14.7-6.1.al7
    
    8.16.1-10.al8
    
    setools
    
    3.3.8-4.1.al7
    
    4.3.0-3.al8
    
    setroubleshoot
    
    3.2.30-8.1.al7
    
    3.3.26-5.0.1.al8
    
    setroubleshoot-plugins
    
    3.0.67-4.1.al7
    
    3.3.14-1.0.1.al8
    
    setup
    
    2.8.71-11.1.al7
    
    2.12.2-9.0.1.al8
    
    sg3\_utils
    
    1.37-19.1.al7
    
    1.44-6.0.1.al8
    
    sgabios
    
    0.20110622svn-4.2.al7
    
    0.20170427git-3.3.al8
    
    shared-mime-info
    
    1.8-5.1.al7
    
    2.1-5.0.1.al8
    
    sharutils
    
    4.13.3-8.1.al7
    
    4.15.2-11.1.al8
    
    shim
    
    15-8.1.al7
    
    15.6-1.0.1.al8
    
    sil-nuosu-fonts
    
    2.1.1-5.1.al7
    
    2.200-2.0.1.al8
    
    sil-padauk-fonts
    
    2.8-5.1.al7
    
    3.003-1.1.al8
    
    sip
    
    4.14.6-4.1.al7
    
    4.19.25-1.al8
    
    sisu
    
    2.3.0-11.1.al7
    
    0.3.4-2.1.al8
    
    skkdic
    
    20130104-6.T1435.1.al7
    
    20170102-4.T1100.1.al8
    
    slang
    
    2.2.4-11.1.al7
    
    2.3.2-3.2.al8
    
    slf4j
    
    1.7.4-4.1.al7
    
    1.7.28-3.al8
    
    smartmontools
    
    7.0-2.1.al7
    
    7.1-1.1.al8
    
    smc-fonts
    
    6.0-7.1.al7
    
    6.1-10.1.al8
    
    snappy
    
    1.1.0-3.1.al7
    
    1.1.8-3.1.al8
    
    socat
    
    1.7.3.2-2.2.al7
    
    1.7.4.1-1.0.1.al8
    
    softhsm
    
    2.1.0-3.1.al7
    
    2.6.0-5.1.al8
    
    sos
    
    3.9-5.1.al7.11
    
    4.6.0-2.1.al8
    
    soundtouch
    
    1.4.0-9.1.al7
    
    2.1.1-8.al8
    
    source-highlight
    
    3.1.6-6.1.al7
    
    3.1.9-11.al8
    
    spamassassin
    
    3.4.0-6.1.al7
    
    3.4.6-1.0.1.al8
    
    speech-dispatcher
    
    0.7.1-15.1.al7
    
    0.8.8-6.2.al8
    
    speex
    
    1.2-0.19.rc1.1.al7
    
    1.2.0-1.2.al8
    
    spice
    
    0.14.0-9.1.al7.1
    
    0.14.3-4.1.al8
    
    spice-gtk
    
    0.35-5.1.al7.1
    
    0.39-5.al8
    
    spice-parent
    
    15-11.1.al7
    
    26-8.1.al8
    
    spice-protocol
    
    0.12.14-1.1.al7
    
    0.14.3-4.0.1.al8
    
    spice-streaming-agent
    
    0.2-4.1.al7
    
    0.3-2.1.al8
    
    spice-vdagent
    
    0.14.0-18.1.al7
    
    0.21.0-5.al8
    
    sqlite
    
    3.7.17-8.1.al7.1
    
    3.26.0-18.al8
    
    squid
    
    3.5.20-17.1.al7.8
    
    4.15-6.al8
    
    sssd
    
    1.16.5-10.1.al7.15
    
    2.8.2-3.al8
    
    star
    
    1.5.2-13.1.al7
    
    1.5.3-13.2.al8
    
    stax-ex
    
    1.7.1-6.1.al7
    
    1.7.7-8.1.al8
    
    strace
    
    4.12-9.1.al7
    
    5.18-2.0.1.al8
    
    stunnel
    
    4.56-6.1.al7
    
    5.56-5.1.al8
    
    subscription-manager
    
    1.24.52-2.1.al7
    
    1.28.13-2.2.al8
    
    subversion
    
    1.7.14-16.1.al7
    
    1.14.1-2.1.al8
    
    sudo
    
    1.8.23-10.1.al7.3
    
    1.8.29-10.al8
    
    suitesparse
    
    4.0.2-10.1.al7
    
    4.4.6-11.2.al8
    
    supermin
    
    5.1.19-1.2.al7
    
    5.2.1-2.0.2.al8
    
    swig
    
    2.0.10-5.1.al7
    
    4.1.1-1.al8
    
    syslinux
    
    4.05-15.1.al7
    
    6.04-6.0.1.al8
    
    sysstat
    
    10.1.5-20.1.al7
    
    11.7.3-9.0.1.al8
    
    system-config-printer
    
    1.4.1-23.1.al7
    
    1.5.11-13.2.al8
    
    system-storage-manager
    
    0.4-9.1.al7
    
    1.4-1.1.al8
    
    systemd
    
    219-78.5.al7.3
    
    239-74.0.3.al8
    
    systemtap
    
    4.0-13.1.al7
    
    4.8-2.0.2.al8
    
    taglib
    
    1.8-8.20130218git.1.al7
    
    1.11.1-8.2.al8
    
    tang
    
    6-2.1.al7
    
    7-6.1.al8
    
    tar
    
    1.26-35.1.al7
    
    1.30-9.0.1.al8
    
    tbb
    
    4.1-9.20130314.1.al7
    
    2018.2-9.2.al8
    
    tboot
    
    1.9.9-1.1.al7
    
    1.10.5-2.al8
    
    tcl
    
    8.5.13-8.1.al7
    
    8.6.8-2.2.al8
    
    tcpdump
    
    4.9.2-4.1.al7.1
    
    4.9.3-3.0.1.al8
    
    tcsh
    
    6.18.01-17.1.al7.1
    
    6.22.03-6.al8
    
    teckit
    
    2.5.1-11.1.al7
    
    2.5.8-1.2.al8
    
    testng
    
    6.8.7-3.1.al7
    
    6.14.3-5.1.al8
    
    texi2html
    
    1.82-10.1.al7
    
    5.0-8.1.al8
    
    texinfo
    
    5.1-5.1.al7
    
    6.5-7.0.1.al8
    
    texlive
    
    2012-45.20130427\_r30134.1.al7
    
    20200406-26.0.2.al8
    
    thai-scalable-fonts
    
    0.5.0-7.1.al7
    
    0.7.2-5.al8
    
    thunderbird
    
    78.8.0-1.1.al7
    
    68.5.0-1.3.al8
    
    tigervnc
    
    1.8.0-25.1.al7
    
    1.12.0-15.al8
    
    time
    
    1.7-45.1.al7
    
    1.9-3.2.al8
    
    tk
    
    8.5.13-6.1.al7
    
    8.6.8-1.2.al8
    
    tmux
    
    1.8-4.1.al7
    
    2.7-1.2.al8
    
    tomcatjss
    
    7.2.5-1.1.al7
    
    7.7.1-1.al8
    
    totem
    
    3.26.2-1.1.al7
    
    3.38.2-1.0.2.al8
    
    totem-pl-parser
    
    3.26.1-1.1.al7
    
    3.26.6-2.0.1.al8
    
    tpm-quote-tools
    
    1.0.2-3.1.al7
    
    1.0.3-4.2.al8
    
    tpm-tools
    
    1.3.9-6.1.al7
    
    1.3.9.2-1.1.al8
    
    tpm2-abrmd
    
    1.1.0-11.1.al7
    
    2.3.3-3.0.1.al8
    
    tpm2-tools
    
    3.0.4-3.1.al7
    
    4.1.1-5.0.4.al8
    
    tpm2-tss
    
    1.4.0-3.1.al7
    
    2.3.2-4.0.2.al8
    
    trace-cmd
    
    2.7.0-3.1.al7
    
    2.7-10.0.1.al8
    
    traceroute
    
    2.0.22-2.1.al7
    
    2.1.0-6.2.al8
    
    tracker
    
    1.10.5-8.1.al7
    
    3.1.2-3.0.1.al8
    
    transfig
    
    3.2.5d-13.1.al7
    
    3.2.6a-4.1.al8
    
    tree
    
    1.6.0-10.1.al7
    
    1.7.0-15.2.al8
    
    trousers
    
    0.3.14-2.1.al7
    
    0.3.15-1.1.al8
    
    tuna
    
    0.13-9.1.al7
    
    0.18-6.0.1.al8
    
    tuned
    
    2.11.0-8.1.al7
    
    2.20.0-1.0.2.al8
    
    ucx
    
    1.5.2-1.1.al7
    
    1.13.1-2.0.1.al8
    
    udftools
    
    1.0.0b3-26.1.al7
    
    2.3-2.al8
    
    udisks2
    
    2.8.4-1.1.al7
    
    2.9.0-13.0.1.al8
    
    unbound
    
    1.6.6-5.1.al7
    
    1.16.2-5.al8
    
    unicode-ucd
    
    6.3.0-2.1.al7
    
    11.0.0-2.0.1.al8
    
    units
    
    2.01-5.1.al7
    
    2.17-5.2.al8
    
    unixODBC
    
    2.3.1-14.1.al7
    
    2.3.7-1.2.al8
    
    upower
    
    0.99.7-1.1.al7
    
    0.99.14-1.0.2.al8
    
    urw-base35-fonts
    
    20170801-10.1.al7
    
    20200910-6.al8
    
    usb\_modeswitch
    
    2.5.1-1.1.al7
    
    2.5.2-1.2.al8
    
    usb\_modeswitch-data
    
    20170806-1.1.al7
    
    20191128-1.1.al8
    
    usbguard
    
    0.7.4-3.4.al7
    
    1.0.0-13.0.1.al8
    
    usbmuxd
    
    1.1.0-1.1.al7
    
    1.1.1-8.al8
    
    usbredir
    
    0.7.1-3.1.al7
    
    0.13.0-2.al8
    
    usbutils
    
    007-5.1.al7
    
    010-3.2.al8
    
    usermode
    
    1.111-6.1.al7
    
    1.113-2.0.1.al8
    
    util-linux
    
    2.23.2-65.1.al7.1
    
    2.32.1-42.0.1.al8
    
    v4l-utils
    
    0.9.5-4.1.al7
    
    1.14.2-3.2.al8
    
    vala
    
    0.40.8-1.1.al7
    
    0.48.19-1.0.1.al8
    
    valgrind
    
    3.15.0-11.1.al7
    
    3.19.0-3.al8
    
    vdo
    
    6.1.3.23-5.1.al7
    
    6.2.7.17-14.0.1.al8
    
    vim
    
    7.4.629-8.1.al7
    
    8.0.1763-19.0.1.al8.4
    
    virt-manager
    
    1.5.0-7.1.al7
    
    4.1.0-4.0.1.al8
    
    virt-viewer
    
    5.0-18.1.al7
    
    11.0-1.0.1.al8
    
    virt-what
    
    1.18-4.2.al7
    
    1.25-3.al8
    
    virt-who
    
    0.28.10-1.1.al7
    
    1.30.5-1.1.al8
    
    volume\_key
    
    0.3.9-9.1.al7
    
    0.3.11-5.2.al8
    
    vsftpd
    
    3.0.2-29.1.al7
    
    3.0.3-35.0.1.al8
    
    WALinuxAgent
    
    2.3.0.2-4.1.al7
    
    2.7.0.6-8.0.1.al8
    
    watchdog
    
    5.13-12.1.al7
    
    5.16-2.al8
    
    wavpack
    
    4.60.1-9.1.al7
    
    5.4.0-5.al8
    
    wayland
    
    1.15.0-1.1.al7
    
    1.21.0-1.al8
    
    wayland-protocols
    
    1.14-1.1.al7
    
    1.25-1.al8
    
    webrtc-audio-processing
    
    0.3-1.1.al7
    
    0.3.1-8.al8
    
    weld-parent
    
    17-9.1.al7
    
    34-5.1.al8
    
    wget
    
    1.14-18.1.al7.1
    
    1.19.5-11.0.1.al8
    
    which
    
    2.20-7.1.al7
    
    2.21-18.0.1.al8
    
    whois
    
    5.1.1-2.1.al7
    
    5.5.9-4.al8
    
    wireshark
    
    1.10.14-25.1.al7
    
    2.6.2-15.al8
    
    wpa\_supplicant
    
    2.6-12.1.al7.2
    
    2.10-1.al8
    
    x3270
    
    3.3.12ga12-4.1.al7
    
    3.6ga5-1.2.al8
    
    xbean
    
    3.13-6.1.al7
    
    4.8-1.1.al8
    
    xdelta
    
    3.0.7-4.1.al7
    
    3.1.0-4.2.al8
    
    xdg-desktop-portal
    
    1.0.2-1.1.al7
    
    1.8.1-1.al8
    
    xdg-desktop-portal-gtk
    
    1.0.2-1.1.al7
    
    1.12.0-3.al8
    
    xdg-user-dirs
    
    0.15-5.1.al7
    
    0.17-1.2.al8
    
    xdg-utils
    
    1.1.0-0.17.20120809git.1.al7
    
    1.1.3-11.al8
    
    xfsdump
    
    3.1.7-3.1.al7
    
    3.1.8-4.0.1.al8
    
    xfsprogs
    
    4.5.0-22.1.al7
    
    5.0.0-11.0.1.al8
    
    xkeyboard-config
    
    2.24-1.1.al7
    
    2.28-1.1.al8
    
    xmlgraphics-commons
    
    1.5-3.1.al7
    
    2.3-4.2.al8
    
    xmlrpc-c
    
    1.32.5-1905.svn2451.1.al7
    
    1.51.0-8.0.1.al8
    
    xmlsec1
    
    1.2.20-7.1.al7
    
    1.2.25-4.2.al8
    
    xmlto
    
    0.0.25-7.1.al7
    
    0.0.28-7.2.al8
    
    xmlunit
    
    1.4-6.1.al7
    
    2.6.3-2.1.al8
    
    xmvn
    
    1.3.0-6.1.al7
    
    4.0.0~20191028.da67577-3.3.al8
    
    xorg-sgml-doctools
    
    1.10-5.1.al7
    
    1.11-6.1.al8
    
    xorg-x11-docs
    
    1.6-7.1.al7
    
    1.7.1-7.1.al8
    
    xorg-x11-drv-ati
    
    19.0.1-3.1.al7
    
    19.1.0-1.1.al8
    
    xorg-x11-drv-libinput
    
    0.27.1-2.1.al7
    
    1.0.1-3.al8
    
    xorg-x11-drv-v4l
    
    0.2.0-49.2.al7
    
    0.3.0-2.2.al8
    
    xorg-x11-drv-wacom
    
    0.36.1-3.1.al7
    
    1.0.0-1.al8
    
    xorg-x11-proto-devel
    
    2018.4-1.1.al7
    
    2021.4-2.al8
    
    xorg-x11-server
    
    1.20.4-23.1.al7
    
    1.20.11-15.0.1.al8
    
    xorg-x11-util-macros
    
    1.19.0-3.1.al7
    
    1.19.2-1.1.al8
    
    xorg-x11-xauth
    
    1.0.9-1.1.al7
    
    1.1-10.al8
    
    xorg-x11-xinit
    
    1.3.4-2.1.al7
    
    1.4.0-11.al8
    
    xorg-x11-xtrans-devel
    
    1.3.5-1.1.al7
    
    1.4.0-4.al8
    
    xterm
    
    295-3.1.al7.1
    
    331-1.2.al8.2
    
    xz
    
    5.2.2-2.1.al7
    
    5.2.4-4.al8
    
    xz-java
    
    1.3-3.1.al7
    
    1.8-8.1.al8
    
    yajl
    
    2.0.4-4.1.al7
    
    2.1.0-11.0.1.al8
    
    yelp
    
    3.28.1-1.1.al7
    
    40.3-2.al8
    
    yelp-tools
    
    3.28.0-1.1.al7
    
    40.0-3.0.1.al8
    
    yelp-xsl
    
    3.28.0-1.1.al7
    
    40.2-1.0.1.al8
    
    yp-tools
    
    2.14-5.1.al7
    
    4.2.3-2.0.1.al8
    
    ypbind
    
    1.37.1-9.1.al7
    
    2.5-2.3.al8
    
    ypserv
    
    2.31-12.1.al7
    
    4.1-1.0.1.al8
    
    zlib
    
    1.2.7-21.1.al7
    
    1.2.11-20.9.al8.alnx
    
    zsh
    
    5.0.2-34.2.al7.2
    
    5.5.1-10.0.1.al8
    
    zziplib
    
    0.13.62-12.1.al7
    
    0.13.71-9.al8
    
    adobe-mappings-cmap
    
    20171205-3.1.al7
    
    20171205-12.al8
    
    adobe-mappings-pdf
    
    20180407-1.1.al7
    
    20180407-10.al8
    
    ant-contrib
    
    1.0-0.23.b3.2.al7
    
    1.0-0.32.b3.1.al8
    
    antlr
    
    2.7.7-30.2.al7
    
    2.7.7-56.2.al8
    
    aopalliance
    
    1.0-8.2.al7
    
    1.0-20.al8
    
    apache-commons-jxpath
    
    1.3-20.2.al7
    
    1.3-36.1.al8
    
    apache-commons-lang
    
    2.6-15.2.al7
    
    2.6-21.1.al8
    
    apache-resource-bundles
    
    2-11.2.al7
    
    2-20.1.al8
    
    arpwatch
    
    2.1a15-36.1.al7
    
    2.1a15-44.1.al8
    
    atinject
    
    1-13.20100611svn86.2.al7
    
    1-31.20100611svn86.al8
    
    atkmm
    
    2.24.2-1.1.al7
    
    2.24.2-7.1.al8
    
    autoconf
    
    2.69-11.2.al7
    
    2.69-29.0.1.al8
    
    autoconf213
    
    2.13-31.1.al7
    
    2.13-39.1.al8
    
    autotrace
    
    0.31.1-38.1.al7
    
    0.31.1-55.al8
    
    baobab
    
    3.28.0-2.1.al7
    
    3.28.0-4.1.al8
    
    bea-stax
    
    1.2.0-9.2.al7
    
    1.2.0-16.1.al8
    
    biosdevname
    
    0.7.3-2.1.al7
    
    0.7.3-2.2.al8
    
    bitmap-fonts
    
    0.3-21.1.al7
    
    0.3-28.1.al8
    
    bogofilter
    
    1.2.5-1.1.al7
    
    1.2.5-2.1.al8
    
    bpg-fonts
    
    20120413-3.2.al7
    
    20120413-11.1.al8
    
    brasero
    
    3.12.2-5.1.al7.1
    
    3.12.2-19.al8
    
    bsf
    
    2.4.0-19.2.al7
    
    2.4.0-32.1.al8
    
    byaccj
    
    1.15-8.1.al7
    
    1.15-17.1.al8
    
    bzip2
    
    1.0.6-13.2.al7
    
    1.0.6-26.2.al8
    
    cairomm
    
    1.12.0-1.1.al7
    
    1.12.0-8.1.al8
    
    cdparanoia
    
    10.2-17.1.al7
    
    10.2-27.2.al8
    
    cdrdao
    
    1.2.3-20.1.al7
    
    1.2.3-32.2.al8
    
    cdrkit
    
    1.1.11-25.1.al7
    
    1.1.11-39.2.al8
    
    celt051
    
    0.5.1.3-8.1.al7
    
    0.5.1.3-15.2.al8
    
    cgdcbxd
    
    1.0.2-7.4.al7
    
    1.0.2-9.2.al8
    
    chrome-gnome-shell
    
    10.1-4.1.al7
    
    10.1-7.1.al8
    
    chrpath
    
    0.16-0.1.al7
    
    0.16-7.2.al8
    
    cloud-init
    
    19.1.17-1.0.1.al7
    
    19.1.17-1.0.1.al8
    
    clucene
    
    2.3.3.4-11.2.al7
    
    2.3.3.4-31.20130812.e8e3d20git.2.al8
    
    clutter-gst2
    
    2.0.18-1.1.al7
    
    2.0.18-5.2.al8
    
    clutter-gtk
    
    1.8.4-1.1.al7
    
    1.8.4-3.2.al8
    
    codemodel
    
    2.6-9.2.al7
    
    2.6-24.1.al8
    
    color-filesystem
    
    1-13.2.al7
    
    1-20.1.al8
    
    compat-exiv2-026
    
    0.26-3.1.al7
    
    0.26-7.0.1.al8
    
    compat-libtiff3
    
    3.9.4-12.1.al7
    
    3.9.4-13.2.al8
    
    conntrack-tools
    
    1.4.4-7.1.al7
    
    1.4.4-11.0.1.al8
    
    crontabs
    
    1.11-6.20121102git.1.al7
    
    1.11-17.20190603git.1.al8
    
    ctags
    
    5.8-13.2.al7
    
    5.8-23.0.1.al8
    
    cups-pk-helper
    
    0.2.6-2.1.al7
    
    0.2.6-5.2.al8
    
    dconf
    
    0.28.0-4.1.al7
    
    0.28.0-4.1.al8
    
    dconf-editor
    
    3.28.0-1.1.al7
    
    3.28.0-1.2.al8
    
    ding-libs
    
    0.6.1-32.1.al7
    
    0.6.1-40.al8
    
    docbook-dtds
    
    1.0-60.2.al7
    
    1.0-69.1.al8
    
    docbook-style-dsssl
    
    1.79-18.2.al7
    
    1.79-25.1.al8
    
    docbook-utils
    
    0.6.14-36.2.al7
    
    0.6.14-44.1.al8
    
    dotconf
    
    1.3-8.2.al7
    
    1.3-18.2.al8
    
    dump
    
    0.4-0.23.b44.1.al7
    
    0.4-0.36.b46.2.al8
    
    dvd+rw-tools
    
    7.1-15.2.al7
    
    7.1-27.2.al8
    
    elinks
    
    0.12-0.37.pre6.1.al7
    
    0.12-0.58.pre6.al8
    
    enchant
    
    1.6.0-8.2.al7
    
    1.6.0-21.3.al8
    
    enscript
    
    1.6.6-7.1.al7
    
    1.6.6-17.2.al8
    
    felix-osgi-compendium
    
    1.4.0-19.2.al7
    
    1.4.0-26.1.al8
    
    felix-osgi-core
    
    1.4.0-15.2.al7
    
    1.4.0-23.1.al8
    
    felix-osgi-foundation
    
    1.2.0-16.1.al7
    
    1.2.0-23.1.al8
    
    file-roller
    
    3.28.1-2.1.al7
    
    3.28.1-4.0.2.al8
    
    flite
    
    1.3-22.2.al7
    
    1.3-31.2.al8
    
    fltk
    
    1.3.4-3.1.al7
    
    1.3.4-5.2.al8
    
    flute
    
    1.3.0-11.OOo31.1.al7
    
    1.3.0-18.OOo31.1.al8
    
    fontpackages
    
    1.44-8.2.al7
    
    1.44-22.1.al8
    
    foomatic-db
    
    4.0-41.20130911.1.al7
    
    4.0-57.20180102.1.al8
    
    ftp
    
    0.17-67.4.al7
    
    0.17-78.2.al8
    
    gamin
    
    0.1.10-16.1.al7
    
    0.1.10-32.1.al8
    
    gavl
    
    1.4.0-4.2.al7
    
    1.4.0-12.2.al8
    
    GConf2
    
    3.2.6-8.1.al7
    
    3.2.6-22.2.al8
    
    gegl
    
    0.2.0-19.1.al7.1
    
    0.2.0-39.1.al8
    
    geoipupdate
    
    2.5.0-2.1.al7
    
    2.5.0-2.2.al8
    
    geronimo-annotation
    
    1.0-15.1.al7
    
    1.0-26.al8
    
    geronimo-jms
    
    1.1.1-19.1.al7
    
    1.1.1-25.1.al8
    
    geronimo-parent-poms
    
    1.6-16.1.al7
    
    1.6-25.1.al8
    
    gettext
    
    0.19.8.1-3.1.al7
    
    0.19.8.1-17.2.al8
    
    gimp
    
    2.8.22-1.1.al7
    
    2.8.22-15.2.al8
    
    gl-manpages
    
    1.1-7.20130122.1.al7
    
    1.1-15.20161227.1.al8
    
    glade
    
    3.22.1-1.1.al7
    
    3.22.1-1.2.al8
    
    glib-networking
    
    2.56.1-1.1.al7
    
    2.56.1-1.1.2.al8
    
    glibmm24
    
    2.56.0-1.1.al7
    
    2.56.0-2.1.al8
    
    glusterfs
    
    6.0-61.1.al7
    
    6.0-61.3.0.1.al8
    
    gnome-calculator
    
    3.28.2-1.1.al7
    
    3.28.2-2.0.1.al8
    
    gnome-common
    
    3.18.0-1.1.al7
    
    3.18.0-5.1.al8
    
    gnome-online-miners
    
    3.26.0-1.1.al7
    
    3.26.0-3.2.al8
    
    gnome-system-monitor
    
    3.28.2-1.1.al7
    
    3.28.2-1.2.al8
    
    gnu-free-fonts
    
    20120503-8.1.al7
    
    20120503-18.1.al8.0.1
    
    gom
    
    0.4-1.1.al7
    
    0.4-6.al8
    
    google-crosextra-caladea-fonts
    
    1.002-0.4.20130214.1.al7
    
    1.002-0.10.20130214.1.al8
    
    google-crosextra-carlito-fonts
    
    1.103-0.2.20130920.1.al7
    
    1.103-0.8.20130920.1.al8
    
    gpm
    
    1.20.7-6.1.al7
    
    1.20.7-17.1.al8
    
    grub2
    
    2.02-0.87.1.al7.alnx
    
    2.02-148.0.1.al8.1
    
    gsound
    
    1.0.2-2.1.al7
    
    1.0.2-6.2.al8
    
    gtkmm24
    
    2.24.5-1.1.al7
    
    2.24.5-6.1.al8
    
    gtkmm30
    
    3.22.2-1.1.al7
    
    3.22.2-3.1.al8
    
    gtkspell
    
    2.0.16-8.1.al7
    
    2.0.16-15.2.al8
    
    gupnp-av
    
    0.12.10-1.1.al7
    
    0.12.10-6.2.al8
    
    gupnp-dlna
    
    0.10.5-1.1.al7
    
    0.10.5-9.2.al8
    
    gupnp-igd
    
    0.2.5-2.1.al7
    
    0.2.5-4.2.al8
    
    hamcrest
    
    1.3-6.1.al7
    
    1.3-29.1.al8
    
    hesiod
    
    3.2.1-3.1.al7
    
    3.2.1-11.2.al8
    
    hunspell-af
    
    0.20080825-8.1.al7
    
    0.20080825-16.1.al8
    
    hunspell-am
    
    0.20090704-7.1.al7
    
    0.20090704-14.1.al8
    
    hunspell-as
    
    1.0.3-9.1.al7
    
    1.0.3-17.1.al8
    
    hunspell-az
    
    0.20040827-10.1.al7
    
    0.20040827-17.1.al8
    
    hunspell-be
    
    1.1-7.1.al7
    
    1.1-15.1.al8
    
    hunspell-ber
    
    0.20080210-8.1.al7
    
    0.20080210-15.1.al8
    
    hunspell-bg
    
    4.3-6.1.al7
    
    4.3-13.1.al8
    
    hunspell-ca
    
    2.3-4.1.al7
    
    2.3-11.1.al8
    
    hunspell-cop
    
    0.3-5.1.al7
    
    0.3-13.1.al8
    
    hunspell-csb
    
    0.20050311-10.1.al7
    
    0.20050311-17.1.al8
    
    hunspell-cy
    
    0.20040425-10.1.al7
    
    0.20040425-18.1.al8
    
    hunspell-da
    
    1.7.42-2.1.al7
    
    1.7.42-9.1.al8
    
    hunspell-eo
    
    1.0-0.7.dev.1.al7
    
    1.0-0.15.dev.1.al8
    
    hunspell-et
    
    0.20030606-11.1.al7
    
    0.20030606-19.1.al8
    
    hunspell-fa
    
    0.20070116-9.1.al7
    
    0.20070116-16.1.al8
    
    hunspell-fj
    
    1.2-7.1.al7
    
    1.2-15.1.al8
    
    hunspell-fur
    
    0.20050912-9.1.al7
    
    0.20050912-16.1.al8
    
    hunspell-gd
    
    2.6-3.1.al7
    
    2.6-10.1.al8
    
    hunspell-gl
    
    0.20080515-8.1.al7
    
    0.20080515-16.1.al8
    
    hunspell-grc
    
    2.1.5-7.1.al7
    
    2.1.5-16.1.al8
    
    hunspell-gv
    
    0.20040505-9.1.al7
    
    0.20040505-16.1.al8
    
    hunspell-hil
    
    0.14-6.1.al7
    
    0.14-14.1.al8
    
    hunspell-hr
    
    0.20040608-10.1.al7
    
    0.20040608-17.1.al8
    
    hunspell-hsb
    
    0.20060327.3-5.1.al7
    
    0.20060327.3-12.1.al8
    
    hunspell-ht
    
    0.06-6.1.al7
    
    0.06-13.1.al8
    
    hunspell-hu
    
    1.6.1-6.1.al7
    
    1.6.1-13.1.al8
    
    hunspell-hy
    
    0.20.0-6.1.al7
    
    0.20.0-13.1.al8
    
    hunspell-ia
    
    0.20050226-9.1.al7
    
    0.20050226-16.1.al8
    
    hunspell-id
    
    0.20040812-8.1.al7
    
    0.20040812-16.1.al8
    
    hunspell-is
    
    0.20090823-6.1.al7
    
    0.20090823-14.1.al8
    
    hunspell-it
    
    2.4-0.10.20070901.1.al7
    
    2.4-0.17.20070901.1.al8
    
    hunspell-kk
    
    1.1-6.1.al7
    
    1.1-14.1.al8
    
    hunspell-kn
    
    1.0.3-7.1.al7
    
    1.0.3-15.1.al8
    
    hunspell-ku
    
    0.21-11.1.al7
    
    0.21-18.1.al8
    
    hunspell-ky
    
    0.20090415-8.1.al7
    
    0.20090415-15.1.al8
    
    hunspell-lb
    
    0.20121128-2.1.al7
    
    0.20121128-9.1.al8
    
    hunspell-ln
    
    0.02-7.1.al7
    
    0.02-14.1.al8
    
    hunspell-lt
    
    1.2.1-10.1.al7
    
    1.2.1-18.1.al8
    
    hunspell-mai
    
    1.0.1-7.1.al7
    
    1.0.1-15.1.al8
    
    hunspell-mg
    
    0.20050109-10.1.al7
    
    0.20050109-18.1.al8
    
    hunspell-mi
    
    0.20080630-8.1.al7
    
    0.20080630-16.1.al8
    
    hunspell-mk
    
    0.20051126-8.1.al7
    
    0.20051126-17.1.al8
    
    hunspell-ml
    
    0.1-10.1.al7
    
    0.1-18.1.al8
    
    hunspell-mn
    
    0.20080709-8.1.al7
    
    0.20080709-16.1.al8
    
    hunspell-mos
    
    0.20101130-6.1.al7
    
    0.20101130-13.1.al8
    
    hunspell-ms
    
    0.20050117-9.1.al7
    
    0.20050117-17.1.al8
    
    hunspell-nds
    
    0.1-8.1.al7
    
    0.1-15.1.al8
    
    hunspell-ne
    
    20080425-9.1.al7
    
    20080425-17.1.al8
    
    hunspell-no
    
    2.0.10-1.4.al7
    
    2.0.10-7.1.al8
    
    hunspell-nr
    
    0.20091030-6.1.al7
    
    0.20091030-14.1.al8
    
    hunspell-nso
    
    0.20091201-6.1.al7
    
    0.20091201-14.1.al8
    
    hunspell-ny
    
    0.01-6.1.al7
    
    0.01-14.1.al8
    
    hunspell-om
    
    0.04-6.1.al7
    
    0.04-15.1.al8
    
    hunspell-pt
    
    0.20130125-2.1.al7
    
    0.20130125-10.1.al8
    
    hunspell-qu
    
    0.9-5.1.al7
    
    0.9-13.1.al8
    
    hunspell-quh
    
    0.20110816-5.1.al7
    
    0.20110816-13.1.al8
    
    hunspell-ro
    
    3.3.7-5.1.al7
    
    3.3.7-12.1.al8
    
    hunspell-ru
    
    0.99g5-5.1.al7
    
    0.99g5-13.1.al8
    
    hunspell-rw
    
    0.20050109-8.1.al7
    
    0.20050109-16.1.al8
    
    hunspell-sc
    
    0.20081101-11.1.al7
    
    0.20081101-19.1.al8
    
    hunspell-se
    
    1.0-0.7.beta7.1.al7
    
    1.0-0.14.beta7.1.al8
    
    hunspell-shs
    
    0.20090828-6.1.al7
    
    0.20090828-13.1.al8
    
    hunspell-si
    
    0.2.1-9.1.al7
    
    0.2.1-16.1.al8
    
    hunspell-sk
    
    0.20110228-5.1.al7
    
    0.20110228-12.1.al8
    
    hunspell-sl
    
    0.20070127-10.1.al7
    
    0.20070127-18.1.al8
    
    hunspell-smj
    
    1.0-0.7.beta7.1.al7
    
    1.0-0.14.beta7.1.al8
    
    hunspell-so
    
    1.0.2-5.1.al7
    
    1.0.2-13.1.al8
    
    hunspell-sq
    
    1.6.4-5.1.al7
    
    1.6.4-12.1.al8
    
    hunspell-ss
    
    0.20091030-6.1.al7
    
    0.20091030-14.1.al8
    
    hunspell-st
    
    0.20091030-6.1.al7
    
    0.20091030-14.1.al8
    
    hunspell-sw
    
    0.20050819-9.1.al7
    
    0.20050819-17.1.al8
    
    hunspell-tet
    
    0.20050108-10.1.al7
    
    0.20050108-18.1.al8
    
    hunspell-th
    
    0.20061212-10.1.al7
    
    0.20061212-18.1.al8
    
    hunspell-ti
    
    0.20090911-6.1.al7
    
    0.20090911-13.1.al8
    
    hunspell-tk
    
    0.02-4.1.al7
    
    0.02-12.1.al8
    
    hunspell-tl
    
    0.20050109-9.1.al7
    
    0.20050109-17.1.al8
    
    hunspell-ur
    
    0.64-7.1.al7
    
    0.64-14.1.al8
    
    hunspell-uz
    
    0.6-8.1.al7
    
    0.6-16.1.al8
    
    hunspell-ve
    
    0.20091030-6.1.al7
    
    0.20091030-14.1.al8
    
    hunspell-xh
    
    0.20091030-6.1.al7
    
    0.20091030-14.1.al8
    
    hunspell-yi
    
    1.1-7.1.al7
    
    1.1-15.1.al8
    
    hunspell-zu
    
    0.20100126-8.1.al7
    
    0.20100126-16.1.al8
    
    hyperv-daemons
    
    0-0.34.20180415git.1.al7
    
    0-0.41.20190303git.0.1.al8
    
    hyphen-as
    
    0.7.0-4.1.al7
    
    0.7.0-11.1.al8
    
    hyphen-bg
    
    4.3-6.1.al7
    
    4.3-13.1.al8
    
    hyphen-bn
    
    0.7.0-4.1.al7
    
    0.7.0-11.1.al8
    
    hyphen-ca
    
    0.9.3-6.1.al7
    
    0.9.3-14.1.al8
    
    hyphen-cy
    
    0.20110620-5.1.al7
    
    0.20110620-12.1.al8
    
    hyphen-da
    
    0.20070903-8.1.al7
    
    0.20070903-17.1.al8
    
    hyphen-de
    
    0.20060120-11.1.al7
    
    0.20060120-19.1.al8
    
    hyphen-el
    
    0.20051018-9.1.al7
    
    0.20051018-17.1.al8
    
    hyphen-fo
    
    0.20040420-6.1.al7
    
    0.20040420-13.1.al8
    
    hyphen-ga
    
    0.20040220-8.1.al7
    
    0.20040220-16.1.al8
    
    hyphen-gl
    
    0.99-7.1.al7
    
    0.99-15.1.al8
    
    hyphen-grc
    
    0.20110913-5.1.al7
    
    0.20110913-12.1.al8
    
    hyphen-gu
    
    0.7.0-4.1.al7
    
    0.7.0-11.1.al8
    
    hyphen-hi
    
    0.7.0-4.1.al7
    
    0.7.0-11.1.al8
    
    hyphen-hsb
    
    0.20110620-5.1.al7
    
    0.20110620-12.1.al8
    
    hyphen-hu
    
    0.20090612-10.1.al7
    
    0.20090612-19.1.al8
    
    hyphen-ia
    
    0.20050628-7.1.al7
    
    0.20050628-14.1.al8
    
    hyphen-id
    
    0.20040812-8.1.al7
    
    0.20040812-16.1.al8
    
    hyphen-is
    
    0.20030920-10.1.al7
    
    0.20030920-19.1.al8
    
    hyphen-it
    
    0.20071127-10.1.al7
    
    0.20071127-18.1.al8
    
    hyphen-kn
    
    0.7.0-4.1.al7
    
    0.7.0-11.1.al8
    
    hyphen-ku
    
    1.71.2-6.1.al7
    
    1.71.2-14.1.al8
    
    hyphen-lt
    
    0.20100531-6.1.al7
    
    0.20100531-13.1.al8
    
    hyphen-mi
    
    0.20080630-8.1.al7
    
    0.20080630-16.1.al8
    
    hyphen-ml
    
    0.7.0-4.1.al7
    
    0.7.0-11.1.al8
    
    hyphen-mn
    
    0.20100531-6.1.al7
    
    0.20100531-13.1.al8
    
    hyphen-mr
    
    0.7.0-4.1.al7
    
    0.7.0-11.1.al8
    
    hyphen-nl
    
    0.20050617-10.1.al7
    
    0.20050617-18.1.al8
    
    hyphen-or
    
    0.7.0-5.1.al7
    
    0.7.0-12.1.al8
    
    hyphen-pa
    
    0.7.0-4.1.al7
    
    0.7.0-11.1.al8
    
    hyphen-pl
    
    0.20060726-9.1.al7
    
    0.20060726-17.1.al8
    
    hyphen-ro
    
    3.3.6-6.1.al7
    
    3.3.6-13.1.al8
    
    hyphen-ru
    
    0.20020727-9.1.al7
    
    0.20020727-17.1.al8
    
    hyphen-sa
    
    0.20110915-5.1.al7
    
    0.20110915-13.1.al8
    
    hyphen-sk
    
    0.20031227-10.1.al7
    
    0.20031227-18.1.al8
    
    hyphen-sl
    
    0.20070127-8.1.al7
    
    0.20070127-16.1.al8
    
    hyphen-sv
    
    1.00.1-10.1.al7
    
    1.00.1-18.1.al8
    
    hyphen-ta
    
    0.7.0-4.1.al7
    
    0.7.0-11.1.al8
    
    hyphen-te
    
    0.7.0-4.1.al7
    
    0.7.0-11.1.al8
    
    hyphen-tk
    
    0.20110620-5.1.al7
    
    0.20110620-12.1.al8
    
    hyphen-uk
    
    0.20030903-8.1.al7
    
    0.20030903-16.1.al8
    
    ibus-m17n
    
    1.3.4-13.1.al7
    
    1.3.4-26.2.al8
    
    ibus-sayura
    
    1.3.2-3.1.al7
    
    1.3.2-13.2.al8
    
    iotop
    
    0.6-4.1.al7
    
    0.6-17.0.1.al8
    
    ipmitool
    
    1.8.18-10.1.al7
    
    1.8.18-18.0.2.al8
    
    ipset
    
    7.1-1.1.al7
    
    7.1-1.2.al8
    
    isorelax
    
    0-0.15.release20050331.1.al7
    
    0-0.23.release20050331.1.al8
    
    jakarta-commons-httpclient
    
    3.1-16.1.al7
    
    3.1-28.1.al8
    
    jakarta-oro
    
    2.0.8-16.1.al7
    
    2.0.8-25.1.al8
    
    java-1.8.0-openjdk
    
    1.8.0.382.b05-1.1.al7
    
    1.8.0.382.b05-2.0.3.al8
    
    java-11-openjdk
    
    11.0.20.0.8-1.1.al7
    
    11.0.20.0.8-3.0.2.al8
    
    javacc-maven-plugin
    
    2.6-17.1.al7
    
    2.6-25.1.al8
    
    jdepend
    
    2.9.1-10.1.al7
    
    2.9.1-20.1.al8
    
    jdom
    
    1.1.3-6.1.al7
    
    1.1.3-17.1.al8
    
    jomolhari-fonts
    
    0.003-17.1.al7
    
    0.003-24.1.al8
    
    jose
    
    10-1.1.al7
    
    10-2.3.al8
    
    jsr-305
    
    0-0.18.20090319svn.1.al7
    
    0-0.25.20130910svn.1.al8
    
    jtidy
    
    1.0-0.16.20100930svn1125.1.al7
    
    1.0-0.28.20100930svn1125.1.al8
    
    jvnet-parent
    
    4-2.1.al7
    
    4-10.1.al8
    
    kacst-fonts
    
    2.0-12.1.al7
    
    2.0-27.al8
    
    khmeros-fonts
    
    5.0-17.1.al7
    
    5.0-25.1.al8
    
    ksh
    
    20120801-144.1.al7
    
    20120801-257.0.1.al8
    
    kurdit-unikurd-web-fonts
    
    20020502-11.1.al7
    
    20020502-19.1.al8
    
    ladspa
    
    1.13-12.1.al7
    
    1.13-20.1.al8
    
    libappindicator
    
    12.10.0-13.1.al7
    
    12.10.0-19.2.al8
    
    libasyncns
    
    0.8-7.1.al7
    
    0.8-14.2.al8
    
    libatasmart
    
    0.19-6.1.al7
    
    0.19-14.2.al8
    
    libbase
    
    1.1.3-10.1.al7
    
    1.1.3-18.1.al8
    
    libcanberra
    
    0.30-9.1.al7
    
    0.30-18.1.al8
    
    libcgroup
    
    0.41-21.1.al7
    
    0.41-19.2.al8
    
    libcroco
    
    0.6.12-6.1.al7
    
    0.6.12-4.3.al8.1
    
    libdaemon
    
    0.14-7.1.al7
    
    0.14-15.2.al8
    
    libdbusmenu
    
    16.04.0-4.1.al7
    
    16.04.0-12.2.al8
    
    libdmapsharing
    
    2.9.37-1.1.al7
    
    2.9.37-5.2.al8
    
    libdv
    
    1.0.0-17.1.al7
    
    1.0.0-27.2.al8
    
    libexif
    
    0.6.22-2.1.al7
    
    0.6.22-6.al8
    
    libfontenc
    
    1.1.3-3.1.al7
    
    1.1.3-8.2.al8
    
    libfonts
    
    1.1.3-13.1.al7
    
    1.1.3-21.1.al8
    
    libformula
    
    1.1.3-10.1.al7
    
    1.1.3-18.1.al8
    
    libgdither
    
    0.6-8.1.al7
    
    0.6-17.2.al8
    
    libgnomekbd
    
    3.26.0-3.1.al7
    
    3.26.0-4.2.al8
    
    libhangul
    
    0.1.0-8.1.al7
    
    0.1.0-16.2.al8
    
    libhbaapi
    
    2.2.9-6.1.al7
    
    2.2.9-13.2.al8
    
    libhbalinux
    
    1.0.17-2.1.al7
    
    1.0.17-7.2.al8
    
    libIDL
    
    0.8.14-8.1.al7
    
    0.8.14-15.1.al8
    
    libiec61883
    
    1.2.0-10.1.al7
    
    1.2.0-18.2.al8
    
    libieee1284
    
    0.2.11-15.1.al7
    
    0.2.11-28.2.al8
    
    libindicator
    
    12.10.1-6.1.al7
    
    12.10.1-14.2.al8
    
    liblayout
    
    0.2.10-8.1.al7
    
    0.2.10-17.1.al8
    
    libloader
    
    1.1.3-9.1.al7
    
    1.1.3-17.1.al8
    
    libmatchbox
    
    1.9-15.1.al7
    
    1.9-23.2.al8
    
    libmodman
    
    2.0.1-8.1.al7
    
    2.0.1-17.2.al8
    
    libmpcdec
    
    1.2.6-12.1.al7
    
    1.2.6-20.2.al8
    
    libnetfilter\_conntrack
    
    1.0.6-1.1.al7
    
    1.0.6-5.2.al8
    
    libnetfilter\_cthelper
    
    1.0.0-11.1.al7
    
    1.0.0-15.1.al8
    
    libnetfilter\_cttimeout
    
    1.0.0-7.1.al7
    
    1.0.0-11.2.al8
    
    libnfnetlink
    
    1.0.1-4.1.al7
    
    1.0.1-13.2.al8
    
    libotf
    
    0.9.13-4.1.al7
    
    0.9.13-11.2.al8
    
    libpciaccess
    
    0.14-1.1.al7
    
    0.14-1.2.al8
    
    libpeas
    
    1.22.0-1.1.al7
    
    1.22.0-6.2.al8
    
    librepository
    
    1.1.3-9.1.al7
    
    1.1.3-17.1.al8
    
    libserializer
    
    1.1.2-10.1.al7
    
    1.1.2-18.1.al8
    
    libsigc++20
    
    2.10.0-1.1.al7
    
    2.10.0-6.1.al8
    
    libsmi
    
    0.4.8-13.1.al7
    
    0.4.8-23.1.al8
    
    libtheora
    
    1.1.1-8.1.al7
    
    1.1.1-21.2.al8
    
    libutempter
    
    1.1.6-4.1.al7
    
    1.1.6-14.2.al8
    
    libvisual
    
    0.4.0-16.1.al7
    
    0.4.0-25.1.al8
    
    libXaw
    
    1.0.13-4.1.al7
    
    1.0.13-10.2.al8
    
    libXfixes
    
    5.0.3-1.1.al7
    
    5.0.3-7.2.al8
    
    libXfont2
    
    2.0.3-1.1.al7
    
    2.0.3-2.2.al8
    
    libxklavier
    
    5.4-7.1.al7
    
    5.4-11.2.al8
    
    libXrender
    
    0.9.10-1.1.al7
    
    0.9.10-7.2.al8
    
    libXres
    
    1.2.0-1.1.al7
    
    1.2.0-4.2.al8
    
    libXtst
    
    1.2.3-1.1.al7
    
    1.2.3-7.2.al8
    
    libXv
    
    1.0.11-1.1.al7
    
    1.0.11-7.2.al8
    
    libXxf86vm
    
    1.1.4-1.1.al7
    
    1.1.4-9.2.al8
    
    libzmf
    
    0.0.2-1.1.al7
    
    0.0.2-3.2.al8
    
    lklug-fonts
    
    0.6-10.20090803cvs.1.al7
    
    0.6-17.20090803cvs.1.al8
    
    lldpad
    
    1.0.1-7.git036e314.1.al7
    
    1.0.1-19.git036e314.0.1.al8
    
    lockdev
    
    1.0.4-0.13.20111007git.1.al7
    
    1.0.4-0.28.20111007git.2.al8
    
    lpsolve
    
    5.5.2.0-8.1.al7
    
    5.5.2.0-21.0.1.al8
    
    lrzsz
    
    0.12.20-36.1.al7
    
    0.12.20-43.2.al8
    
    ltrace
    
    0.7.91-16.1.al7
    
    0.7.91-28.1.al8
    
    lz4
    
    1.8.3-1.1.al7
    
    1.8.3-3.1.al8
    
    lzop
    
    1.03-10.1.al7
    
    1.03-20.2.al8
    
    madan-fonts
    
    2.000-11.1.al7
    
    2.000-20.1.al8
    
    mailx
    
    12.5-19.1.al7
    
    12.5-29.2.al8
    
    malaga
    
    7.12-16.1.al7
    
    7.12-23.2.al8
    
    marisa
    
    0.2.4-4.1.al7
    
    0.2.4-36.2.al8
    
    matchbox-window-manager
    
    1.2-16.1.20070628svn.4.al7
    
    1.2-23.20070628svn.2.al8
    
    maven-artifact-resolver
    
    1.0-10.1.al7
    
    1.0-20.1.al8
    
    maven-reporting-api
    
    3.0-5.1.al7
    
    3.0-14.1.al8
    
    maven-shared-incremental
    
    1.1-6.1.al7
    
    1.1-14.1.al8
    
    maven2
    
    2.2.1-47.1.al7
    
    2.2.1-64.1.al8
    
    meanwhile
    
    1.1.0-12.1.al7
    
    1.1.0-23.2.al8
    
    memtest86+
    
    5.01-2.4.al7
    
    5.01-20.1.al8
    
    mesa-libGLw
    
    8.0.0-5.1.al7
    
    8.0.0-18.1.al8
    
    mlocate
    
    0.26-8.1.al7
    
    0.26-20.2.al8
    
    mod\_auth\_mellon
    
    0.14.0-9.1.al7
    
    0.14.0-12.1.0.1.al8.1
    
    mod\_fcgid
    
    2.3.9-6.1.al7
    
    2.3.9-17.1.al8
    
    mod\_intercept\_form\_submit
    
    1.1.0-1.1.al7
    
    1.1.0-5.2.al8
    
    mod\_lookup\_identity
    
    1.0.0-1.1.al7
    
    1.0.0-4.2.al8
    
    motif
    
    2.3.4-14.1.al7
    
    2.3.4-19.al8
    
    mousetweaks
    
    3.12.0-1.1.al7
    
    3.12.0-11.2.al8
    
    mozilla-filesystem
    
    1.9-11.1.al7
    
    1.9-19.al8
    
    mozjs52
    
    52.9.0-1.1.al7
    
    52.9.0-2.0.2.al8
    
    mt-st
    
    1.1-14.1.al7
    
    1.1-24.2.al8
    
    mtdev
    
    1.1.5-5.1.al7
    
    1.1.5-12.2.al8
    
    mtools
    
    4.0.18-5.1.al7
    
    4.0.18-14.2.al8
    
    mtx
    
    1.3.12-14.4.al7
    
    1.3.12-17.2.al8
    
    munge-maven-plugin
    
    1.0-2.1.al7
    
    1.0-11.1.al8
    
    mythes-bg
    
    4.3-6.1.al7
    
    4.3-12.1.al8
    
    mythes-ca
    
    1.5.0-9.1.al7
    
    1.5.0-15.1.al8
    
    mythes-cs
    
    0.20070926-10.1.al7
    
    0.20070926-19.1.al8
    
    mythes-da
    
    0.20100629.15.16-6.1.al7
    
    0.20100629.15.16-14.1.al8
    
    mythes-el
    
    0.20070412-11.1.al7
    
    0.20070412-19.1.al8
    
    mythes-en
    
    3.0-13.1.al7
    
    3.0-23.1.al8
    
    mythes-fr
    
    2.3-4.1.al7
    
    2.3-10.1.al8
    
    mythes-ga
    
    0.20071001-11.1.al7
    
    0.20071001-19.1.al8
    
    mythes-hu
    
    0.20101019-7.1.al7
    
    0.20101019-15.1.al8
    
    mythes-it
    
    2.0.9l-10.1.al7
    
    2.0.9l-18.1.al8
    
    mythes-mi
    
    0.20080630-9.1.al7
    
    0.20080630-17.1.al8
    
    mythes-ne
    
    1.1-6.1.al7
    
    1.1-14.1.al8
    
    mythes-nl
    
    0.20130131-2.1.al7
    
    0.20130131-8.1.al8
    
    mythes-pl
    
    1.5-11.1.al7
    
    1.5-20.1.al8
    
    mythes-pt
    
    0.20060817-11.1.al7
    
    0.20060817-19.1.al8
    
    mythes-ro
    
    3.3-7.1.al7
    
    3.3-13.1.al8
    
    mythes-ru
    
    0.20070613-9.1.al7
    
    0.20070613-17.1.al8
    
    mythes-sk
    
    0.20130130-2.1.al7
    
    0.20130130-11.1.al8
    
    mythes-sl
    
    0.20130130-2.1.al7
    
    0.20130130-11.1.al8
    
    mythes-sv
    
    1.3-6.1.al7
    
    1.3-13.1.al8
    
    mythes-uk
    
    1.6.5-6.1.al7
    
    1.6.5-14.1.al8
    
    nafees-web-naskh-fonts
    
    1.2-11.1.al7
    
    1.2-18.1.al8
    
    nautilus-sendto
    
    3.8.6-1.1.al7
    
    3.8.6-2.2.al8
    
    navilu-fonts
    
    1.2-3.1.al7
    
    1.2-11.1.al8
    
    ncompress
    
    4.2.4.4-3.1.1.al7
    
    4.2.4.4-13.1.al8
    
    net-tools
    
    2.0-0.25.20131004git.1.al7
    
    2.0-0.52.20160912git.1.al8
    
    netcf
    
    0.2.8-4.1.al7
    
    0.2.8-12.2.al8
    
    nss
    
    3.79.0-4.1.al7
    
    3.79.0-11.al8
    
    numad
    
    0.5-18.20150602git.1.al7
    
    0.5-26.20150602git.2.al8
    
    ocaml-srpm-macros
    
    5-2.1.al7
    
    5-4.1.al8
    
    omping
    
    0.0.4-6.1.al7
    
    0.0.4-18.1.al8
    
    open-sans-fonts
    
    1.10-1.1.al7
    
    1.10-6.1.al8
    
    openchange
    
    2.3-3.1.al7
    
    2.3-31.0.2.al8
    
    openhpi
    
    3.8.0-1.1.al7
    
    3.8.0-10.0.2.al8
    
    openjade
    
    1.3.2-45.1.al7
    
    1.3.2-57.2.al8
    
    openslp
    
    2.0.0-8.1.al7
    
    2.0.0-20.0.1.al8
    
    opensp
    
    1.5.2-19.1.al7
    
    1.5.2-28.2.al8
    
    pakchois
    
    0.4-10.1.al7
    
    0.4-17.2.al8
    
    paktype-naqsh-fonts
    
    4.1-2.1.al7
    
    4.1-8.1.al8
    
    paktype-naskh-basic-fonts
    
    4.1-3.1.al7
    
    4.1-9.1.al8
    
    paktype-tehreer-fonts
    
    4.1-2.1.al7
    
    4.1-8.1.al8
    
    pangomm
    
    2.40.1-1.1.al7
    
    2.40.1-6.1.al8
    
    parfait
    
    0.5.4-2.1.al7
    
    0.5.4-4.al8
    
    pavucontrol
    
    3.0-5.4.al7
    
    3.0-11.2.al8
    
    pentaho-libxml
    
    1.1.3-10.1.al7
    
    1.1.3-17.1.al8
    
    pentaho-reporting-flow-engine
    
    0.9.4-8.1.al7
    
    0.9.4-15.1.al8
    
    perl-Class-Data-Inheritable
    
    0.08-14.1.al7
    
    0.08-27.1.al8
    
    perl-Class-ISA
    
    0.36-1010.1.al7
    
    0.36-1022.1.al8
    
    perl-Digest
    
    1.17-245.1.al7
    
    1.17-395.1.al8
    
    perl-Digest-HMAC
    
    1.03-5.1.al7
    
    1.03-17.1.al8
    
    perl-Digest-SHA1
    
    2.13-9.1.al7
    
    2.13-23.2.al8
    
    perl-Encode-Detect
    
    1.01-13.1.al7
    
    1.01-28.2.al8
    
    perl-Env
    
    1.04-2.1.al7
    
    1.04-395.1.al8
    
    perl-File-CheckTree
    
    4.42-3.1.al7
    
    4.42-303.1.al8
    
    perl-File-Listing
    
    6.04-7.1.al7
    
    6.04-17.1.al8
    
    perl-File-Slurp
    
    9999.19-6.1.al7
    
    9999.19-19.1.al8
    
    perl-GSSAPI
    
    0.28-9.1.al7
    
    0.28-25.0.1.al8
    
    perl-HTML-Tagset
    
    3.20-15.1.al7
    
    3.20-34.1.al8
    
    perl-HTTP-Daemon
    
    6.01-8.1.al7
    
    6.01-23.1.al8
    
    perl-HTTP-Date
    
    6.02-8.1.al7
    
    6.02-19.1.al8
    
    perl-HTTP-Negotiate
    
    6.01-5.1.al7
    
    6.01-19.1.al8
    
    perl-IO-String
    
    1.08-19.1.al7
    
    1.08-32.1.al8
    
    perl-libxml-perl
    
    0.08-19.1.al7
    
    0.08-33.1.al8
    
    perl-LWP-MediaTypes
    
    6.02-2.1.al7
    
    6.02-15.1.al8
    
    perl-Mozilla-LDAP
    
    1.5.3-12.1.al7
    
    1.5.3-25.2.al8
    
    perl-Number-Compare
    
    0.03-6.1.al7
    
    0.03-19.1.al8
    
    perl-Params-Check
    
    0.38-2.1.al7
    
    0.38-395.1.al8
    
    perl-Params-Util
    
    1.07-6.1.al7
    
    1.07-22.2.al8
    
    perl-Pod-Coverage
    
    0.23-3.1.al7
    
    0.23-14.1.al8
    
    perl-Pod-LaTeX
    
    0.61-2.1.al7
    
    0.61-302.1.al8
    
    perl-prefork
    
    1.04-11.1.al7
    
    1.04-26.1.al8
    
    perl-SGMLSpm
    
    1.03ii-31.1.al7
    
    1.03ii-42.1.al8
    
    perl-SNMP\_Session
    
    1.13-5.1.al7
    
    1.13-17.1.al8
    
    perl-srpm-macros
    
    1-8.1.al7
    
    1-25.1.al8
    
    perl-String-ShellQuote
    
    1.04-10.1.al7
    
    1.04-24.1.al8
    
    perl-Taint-Runtime
    
    0.03-19.1.al7
    
    0.03-32.1.al8
    
    perl-Test-NoWarnings
    
    1.04-2.1.al7
    
    1.04-16.al8
    
    perl-Test-Taint
    
    1.06-5.1.al7
    
    1.06-19.1.al8
    
    perl-Text-CharWidth
    
    0.04-18.1.al7
    
    0.04-32.1.al8
    
    perl-Text-WrapI18N
    
    0.06-17.1.al7
    
    0.06-30.1.al8
    
    perl-TimeDate
    
    2.30-2.1.al7
    
    2.30-15.1.al8
    
    perl-WWW-RobotRules
    
    6.02-5.1.al7
    
    6.02-18.1.al8
    
    perl-XML-RegExp
    
    0.04-2.1.al7
    
    0.04-14.1.al8
    
    perl-XML-TokeParser
    
    0.05-12.1.al7
    
    0.05-25.1.al8
    
    pinfo
    
    0.6.10-9.1.al7
    
    0.6.10-18.2.al8
    
    plexus-ant-factory
    
    1.0-0.12.a2.3.1.al7
    
    1.0-0.20.a2.2.1.al8
    
    plexus-bsh-factory
    
    1.0-0.14.a7.1.al7
    
    1.0-0.19.a7.1.al8
    
    plexus-build-api
    
    0.0.7-11.1.al7
    
    0.0.7-20.1.al8
    
    plexus-cipher
    
    1.7-5.1.al7
    
    1.7-17.al8
    
    plexus-component-api
    
    1.0-0.16.alpha15.1.al7
    
    1.0-0.24.alpha15.1.al8
    
    plexus-component-factories-pom
    
    1.0-0.7.alpha11.1.al7
    
    1.0-0.15.alpha11.1.al8
    
    plexus-i18n
    
    1.0-0.6.b10.4.1.al7
    
    1.0-0.11.b10.4.1.al8
    
    plexus-interactivity
    
    1.0-0.14.alpha6.1.al7
    
    1.0-0.27.alpha6.1.al8
    
    plexus-resources
    
    1.0-0.15.a7.1.al7
    
    1.0-0.23.a7.1.al8
    
    plexus-sec-dispatcher
    
    1.4-13.1.al7
    
    1.4-29.al8
    
    pnm2ppa
    
    1.04-28.1.al7
    
    1.04-40.2.al8
    
    polkit-pkla-compat
    
    0.1-4.1.al7
    
    0.1-12.2.al8
    
    portreserve
    
    0.0.5-11.4.al7
    
    0.0.5-19.2.al8
    
    procmail
    
    3.22-36.1.al7.1
    
    3.22-47.2.al8
    
    pyatspi
    
    2.26.0-3.1.al7
    
    2.26.0-6.1.al8
    
    pygtk2
    
    2.24.0-9.1.al7
    
    2.24.0-24.2.al8
    
    python-augeas
    
    0.5.0-2.1.al7
    
    0.5.0-12.1.al8
    
    python-cpio
    
    0.1-16.1.al7
    
    0.1-29.1.al8
    
    python-iniparse
    
    0.4-9.1.al7
    
    0.4-31.1.al8
    
    python-kmod
    
    0.9-4.1.al7
    
    0.9-20.2.al8
    
    python-pip
    
    9.0.3-8.1.al7
    
    9.0.3-22.0.1.al8
    
    python-prettytable
    
    0.7.2-3.1.al7
    
    0.7.2-14.1.al8
    
    python-pycparser
    
    2.14-1.1.al7
    
    2.14-14.1.al8
    
    python-rpm-macros
    
    3-34.1.al7
    
    3-45.al8
    
    python3
    
    3.6.8-19.1.al7
    
    3.6.8-51.0.1.al8.1
    
    pyusb
    
    1.0.0-0.11.b1.1.al7
    
    1.0.0-9.1.al8
    
    rarian
    
    0.8.1-11.1.al7
    
    0.8.1-19.2.al8
    
    recode
    
    3.6-38.1.al7
    
    3.6-47.2.al8
    
    redhat-menus
    
    12.0.2-8.4.al7
    
    12.0.2-12.1.al8
    
    regexp
    
    1.5-13.1.al7
    
    1.5-28.1.al8
    
    rest
    
    0.8.1-2.1.al7
    
    0.8.1-2.2.al8
    
    rhythmbox
    
    3.4.2-2.1.al7
    
    3.4.2-8.2.al8
    
    rootfiles
    
    8.1-11.1.al7
    
    8.1-22.1.al8
    
    rtkit
    
    0.11-10.1.al7
    
    0.11-19.2.al8
    
    saab-fonts
    
    0.91-10.1.al7
    
    0.91-18.0.1.al8
    
    sac
    
    1.3-17.1.al7
    
    1.3-30.al8
    
    samyak-fonts
    
    1.2.2-12.1.al7
    
    1.2.2-19.1.al8
    
    sane-frontends
    
    1.0.14-19.1.al7
    
    1.0.14-30.2.al8
    
    sblim-cmpi-devel
    
    2.0.3-5.1.al7
    
    2.0.3-15.2.al8
    
    scap-security-guide
    
    0.1.69-1.1.al7
    
    0.1.69-2.0.2.al8
    
    SDL
    
    1.2.15-17.1.al7
    
    1.2.15-39.1.al8
    
    seahorse
    
    3.20.0-1.1.al7
    
    3.20.0-9.2.al8
    
    setserial
    
    2.17-33.1.al7
    
    2.17-45.2.al8
    
    sgml-common
    
    0.6.3-39.1.al7
    
    0.6.3-50.1.al8
    
    sgpio
    
    1.2.0.10-13.1.al7
    
    1.2.0.10-21.2.al8
    
    shadow-utils
    
    4.6-5.1.al7
    
    4.6-17.0.1.al8
    
    si-units
    
    0.6.5-1.1.al7
    
    0.6.5-2.1.al8
    
    sil-abyssinica-fonts
    
    1.200-6.1.al7
    
    1.200-13.1.al8
    
    slapi-nis
    
    0.60.0-3.1.al7
    
    0.60.0-3.0.1.al8
    
    sonatype-oss-parent
    
    7-6.1.al7
    
    7-14.1.al8
    
    sonatype-plugins-parent
    
    8-6.1.al7
    
    8-12.1.al8
    
    sos-collector
    
    1.8-2.1.al7
    
    1.8-2.1.al8
    
    sound-theme-freedesktop
    
    0.8-3.1.al7
    
    0.8-9.1.al8
    
    squashfs-tools
    
    4.3-0.21.gitaae0aff4.1.al7
    
    4.3-20.1.al8
    
    startup-notification
    
    0.12-8.1.al7
    
    0.12-15.2.al8
    
    stix-fonts
    
    1.1.0-5.1.al7
    
    1.1.0-12.1.al8
    
    sushi
    
    3.28.3-1.1.al7
    
    3.28.3-1.2.al8
    
    symlinks
    
    1.4-10.1.al7
    
    1.4-19.2.al8
    
    sysfsutils
    
    2.1.0-16.1.al7
    
    2.1.0-25.0.1.al8
    
    tagsoup
    
    1.2.1-8.1.al7
    
    1.2.1-15.1.al8
    
    targetcli
    
    2.1.53-1.1.al7
    
    2.1.53-2.1.al8
    
    telnet
    
    0.17-66.1.al7
    
    0.17-76.1.al8
    
    tex-fonts-hebrew
    
    0.1-21.1.al7
    
    0.1-28.1.al8
    
    tftp
    
    5.2-22.1.al7
    
    5.2-26.0.1.al8
    
    tibetan-machine-uni-fonts
    
    1.901-12.1.al7
    
    1.901-20.1.al8
    
    tix
    
    8.4.3-12.1.al7
    
    8.4.3-23.2.al8
    
    tmpwatch
    
    2.11-6.1.al7
    
    2.11-14.2.al8
    
    tog-pegasus
    
    2.14.1-8.1.al7
    
    2.14.1-46.1.al8
    
    tokyocabinet
    
    1.4.48-3.1.al7
    
    1.4.48-10.2.al8
    
    ttmkfdir
    
    3.0.9-42.1.al7
    
    3.0.9-54.2.al8
    
    tzdata
    
    2023c-1.1.al7
    
    2023c-1.0.1.al8
    
    ucs-miscfixed-fonts
    
    0.3-11.1.al7
    
    0.3-17.1.al8
    
    unit-api
    
    1.0-3.1.al7
    
    1.0-5.1.al8
    
    unzip
    
    6.0-22.1.al7
    
    6.0-46.0.1.al8
    
    uom-lib
    
    1.0.1-5.1.al7
    
    1.0.1-6.1.al8
    
    uom-parent
    
    1.0.3-2.1.al7
    
    1.0.3-3.1.al8
    
    update-motd
    
    1.1.2-2.1.al7
    
    1.1.2-2.5.al8
    
    urlview
    
    0.9-15.20121210git6cfcad.1.al7
    
    0.9-23.20131022git08767a.2.al8
    
    ustr
    
    1.0.4-16.1.al7
    
    1.0.4-26.1.al8
    
    uuid
    
    1.6.2-26.1.al7
    
    1.6.2-43.1.al8
    
    velocity
    
    1.7-10.1.al7
    
    1.7-24.1.al8
    
    vinagre
    
    3.22.0-14.1.al7
    
    3.22.0-23.1.al8
    
    vino
    
    3.22.0-7.1.al7
    
    3.22.0-11.0.1.al8
    
    virt-top
    
    1.0.8-24.2.al7
    
    1.0.8-37.0.1.al8
    
    vorbis-tools
    
    1.4.0-13.1.al7
    
    1.4.0-28.2.al8
    
    vte291
    
    0.52.4-1.1.al7
    
    0.52.4-2.1.al8
    
    words
    
    3.0-22.1.al7
    
    3.0-28.1.al8
    
    wqy-microhei-fonts
    
    0.2.0-0.12.beta.1.al7
    
    0.2.0-0.22.beta.1.al8
    
    wqy-unibit-fonts
    
    1.1.0-13.1.al7
    
    1.1.0-20.1.al8
    
    wsmancli
    
    2.6.0-2.1.al7
    
    2.6.0-11.0.1.al8
    
    xalan-j2
    
    2.7.1-23.1.al7
    
    2.7.1-38.1.al8
    
    xcb-proto
    
    1.13-1.1.al7
    
    1.13-4.1.al8
    
    xcb-util
    
    0.4.0-2.1.al7
    
    0.4.0-10.2.al8
    
    xcb-util-image
    
    0.4.0-2.1.al7
    
    0.4.0-9.2.al8
    
    xcb-util-keysyms
    
    0.4.0-1.1.al7
    
    0.4.0-7.2.al8
    
    xcb-util-renderutil
    
    0.3.9-3.1.al7
    
    0.3.9-10.2.al8
    
    xcb-util-wm
    
    0.4.1-5.1.al7
    
    0.4.1-12.2.al8
    
    xdg-user-dirs-gtk
    
    0.10-4.1.al7
    
    0.10-13.2.al8
    
    xerces-j2
    
    2.11.0-17.1.al7
    
    2.11.0-34.1.al8
    
    xhtml1-dtds
    
    1.0-20020801.11.1.al7
    
    1.0-20020801.13.1.al8.4
    
    xinetd
    
    2.3.15-14.1.al7
    
    2.3.15-25.0.1.al8
    
    xml-commons-apis
    
    1.4.01-16.1.al7
    
    1.4.01-31.1.al8
    
    xml-commons-resolver
    
    1.2-15.1.al7
    
    1.2-26.1.al8
    
    xmltoman
    
    0.4-9.1.al7
    
    0.4-17.1.al8
    
    xorg-x11-apps
    
    7.7-7.1.al7
    
    7.7-21.1.al8
    
    xorg-x11-drivers
    
    7.7-6.1.al7
    
    7.7-30.1.al8
    
    xorg-x11-drv-dummy
    
    0.3.7-1.2.al7
    
    0.3.7-6.2.al8.1
    
    xorg-x11-drv-evdev
    
    2.10.6-1.1.al7
    
    2.10.6-2.2.al8
    
    xorg-x11-drv-fbdev
    
    0.5.0-1.2.al7
    
    0.5.0-2.2.al8
    
    xorg-x11-drv-intel
    
    2.99.917-28.20180530.2.al7
    
    2.99.917-41.20210115.al8
    
    xorg-x11-drv-nouveau
    
    1.0.15-1.2.al7
    
    1.0.15-4.2.al8.1
    
    xorg-x11-drv-qxl
    
    0.1.5-5.1.al7
    
    0.1.5-11.1.al8
    
    xorg-x11-drv-vesa
    
    2.4.0-3.1.al7
    
    2.4.0-3.2.al8
    
    xorg-x11-drv-vmware
    
    13.2.1-1.2.al7
    
    13.2.1-8.2.al8
    
    xorg-x11-font-utils
    
    7.5-21.1.al7
    
    7.5-41.0.2.al8
    
    xorg-x11-fonts
    
    7.5-9.1.al7
    
    7.5-19.1.al8
    
    xorg-x11-server-utils
    
    7.7-20.1.al7
    
    7.7-27.2.al8
    
    xorg-x11-utils
    
    7.5-23.1.al7
    
    7.5-28.2.al8
    
    xorg-x11-xbitmaps
    
    1.1.1-6.1.al7
    
    1.1.1-13.1.al8
    
    xorg-x11-xkb-utils
    
    7.7-14.1.al7
    
    7.7-28.1.al8
    
    xrestop
    
    0.4-14.1.al7
    
    0.4-21.2.al8
    
    xsom
    
    0-10.20110809svn.1.al7
    
    0-19.20110809svn.1.al8
    
    zaf
    
    0-0.9.20080714svn.1.al7
    
    0-0.25.20080714svn.al8
    
    zenity
    
    3.28.1-2.1.al7
    
    3.28.1-2.0.1.al8
    
    zip
    
    3.0-11.1.al7
    
    3.0-23.2.al8
    
    alinux-bookmarks
    
    7-1.5.al7
    
    7-1.5.al8
    
    apache-commons-daemon
    
    1.0.13-7.1.al7
    
    1.0.13-7.1.al8
    
    geolite2
    
    20180605-1.1.al7
    
    20180605-1.1.al8
    
    gnome-getting-started-docs
    
    3.28.2-1.1.al7
    
    3.28.2-1.1.al8
    
    libchamplain
    
    0.12.16-2.1.al7
    
    0.12.16-2.1.al8
    
    uom-se
    
    1.0.4-3.1.al7
    
    1.0.4-3.1.al8
    
    uom-systems
    
    0.7-1.1.al7
    
    0.7-1.1.al8
    

## **Port differences**

**Version**

**Protocol**

**Port**

**Service**

Alibaba Cloud Linux 2

TCP6/UDP6/TCP/UDP

111

SunRPC

TCP

22

SSH

UDP

68

bootpc

UDP/UDP6

323

RPKI-RTR

Alibaba Cloud Linux 3

TCP6/UDP6/TCP/UDP

111

SunRPC

TCP

22

SSH

UDP

68

bootpc

UDP/UDP6

323

RPKI-RTR

TCP6/TCP

2049

NFS

TCP6/UDP6/TCP/UDP

5355

Hostmon

UDP

53

domain
