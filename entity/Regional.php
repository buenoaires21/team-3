<?php

class Regional{

    private $name;
    private $province;
    private $city;
    private $adress;
    private $zipCode;
    private $aprojects = array();
    private $aEmployees = array();
    private $id;


    public Regional(){

    }

    public function getName(){

        return $this->name;
    }

    public function setName($name){

        $this->name = $name;
    }

    public function getProvince(){

        return $this->province;
    }

    public function setProvince($Province){

        $this->province = $province;
    }

    public function getCity(){

        return $this->city;
    }

    public function setCity($city){

        $this->city = $city;
    }

    public function getAdress(){

        return $this->adress;
    }

    public function setAdress($adress){

        $this->adress = $adress;
    }

    public function getZipCode(){

        return $this->zipCode;
    }

    public function setZipCode($zipCode){

        $this->zipCode = $zipCode;
    }

    public function getid(){

        return $this->id;
    }

    public function setid($id){

        $this->id = $id;
    }

    public function getaprojects(){

        return $this->aprojects;
    }

    public function setaprojects($aprojects){

        $this->aprojects = $aprojects;
    }

    public function getaEmployees(){

        return $this->aEmployees;
    }

    public function setaEmployees($aEmployees){

        $this->aEmployees = $aEmployees;
    }

}

?>