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
service tomcat7 stop

apt-get -y install maven

rm /etc/tomcat7/tomcat-users.xml
cp /vagrant/WorkPlace/tomcat/tomcat-users.xml /etc/tomcat7/
cd /vagrant/WorkPlace

apt-get install -y unzip

mkdir extjs
cd extjs

wget https://olex-secure.openlogic.com/content/private/5e6a6f0815e830bba705e79e4a0470fbee8a5880//olex-secure.openlogic.com/ext-5.1.0-gpl.zip
unzip ext-5.1.0-gpl.zip
rm ext-5.1.0-gpl.zip

cd /vagrant/WorkPlace
mvn tomcat7:run
