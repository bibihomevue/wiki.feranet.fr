# Share SAMBA

Update and installation
```bash
apt update && apt install smbclient cifs-utils -y
```

Directory creation
```bash
mkdir /home/share
```

Add authentication information

`/etc/samba/user`
```bash
username=<user>
password=<password>
```

Mount the directory automatically on boot

`/etc/fstab`
```bash
//SRV-WINDOWS/prod/share /home/share cifs  credentials=/etc/samba/user,noexec  0 0
```