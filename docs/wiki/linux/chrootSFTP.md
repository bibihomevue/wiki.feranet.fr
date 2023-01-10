# Chroot SFTP

> In the example, the user myuser will be chrooted in the directory myuser

Add group 'sftp_users' and user 'myuser'
```bash
groupadd sftp_users
useradd -G sftp_users myuser
```

Add user password (optional)
```bash
echo "myuser:<my_password>" | chpasswd
```

Create directory
```bash
mkdir -p /var/share/myuser
```

Adding right
```bash
chown -R root:root /var/share
chmod -R 755 /var/share
chown myuser:sftp_users /var/share/myuser
```

`/etc/ssh/sshd_config`
```bash
Subsystem sftp internal-sftp

Match Group sftp_users
        ChrootDirectory /var/share/%u
        ForceCommand internal-sftp
        AllowTcpForwarding no
        X11Forwarding no
```