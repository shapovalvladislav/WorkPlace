#!/bin/bash


sudo su
apt-get update

# install add-apt-repository
apt-get install -y software-properties-common python-software-properties
apt-get update

# install java
add-apt-repository -y ppa:webupd8team/java
apt-get update
echo debconf shared/accepted-oracle-license-v1-1 select true | sudo debconf-set-selections
echo debconf shared/accepted-oracle-license-v1-1 seen true | sudo debconf-set-selections
apt-get install -y oracle-java7-installer


# install tomcat
apt-get -y install tomcat7
echo "JAVA_HOME=/usr" >> /etc/default/tomcat7
apt-get -y install tomcat7-admin
service tomcat7 stop

apt-get -y install vim
java -jar json-web-key-generator.jar -t RSA -s 2048 -i 1 -u sig -S | sed '1d' > /vagrant/WorkPlace/src/main/resources/keys.json
apt-get -y install maven

rm /etc/tomcat7/tomcat-users.xml
cp -f /vagrant/WorkPlace/tomcat/tomcat-users.xml /etc/tomcat7/
cp -f /vagrant/WorkPlace/tomcat/extjs.xml /etc/tomcat7/Catalina/localhost/
cp -f /vagrant/WorkPlace/tomcat/tomcat7 /etc/default/
cd /vagrant/WorkPlace

apt-get install -y unzip

export DEBIAN_FRONTEND=noninteractive
apt-get -q -y install mysql-server
mysql -u root -e 'CREATE DATABASE WorkPlace;'
mysqladmin -u root password 123456
mysql -u root -p'123456' WorkPlace < /vagrant/dump.sql

if [ -d /vagrant/ext-5.1.0 ]; then
    mv /vagrant/ext-5.1.0 /usr
else
    cd /usr
    wget https://olex-secure.openlogic.com/content/private/5e6a6f0815e830bba705e79e4a0470fbee8a5880//olex-secure.openlogic.com/ext-5.1.0-gpl.zip
    unzip ext-5.1.0-gpl.zip
    rm ext-5.1.0-gpl.zip
fi

service tomcat7 start

cd /vagrant/WorkPlace
mvn tomcat7:redeploy
