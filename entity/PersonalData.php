<?php

class PersonalData{

    private $dni;
    private $birthDate;
    private $name;
    private $lastName;
    private $email;
    private $cuil;
    private $cbu;
    private $id;


    public PersonalData(){

    }

    public function getDni{

        return $this->dni;
    }

    public function setDni($dni){

        $this->dni = $dni;
    }

    public function getBirthDate{

        return $this->birthDate;
    }

    public function setBirthDate($birthDate){

        $this->dni = $dnibirthDate;
    }

    public function getName{

        return $this->name;
    }

    public function setName($name){

        $this->name = $name;
    }

    public function getLastName{

        return $this->lastName;
    }

    public function setLastName($lastName){

        $this->lastname = $lastName;
    }

    public function getEmail {

        return $this->email;
    }

    public function setEmail($email){

        $this->email = $email;
    }

    public function getCuil{

        return $this->cuil;
    }

    public function setCuil($cuil){

        $this->cuil = $cuil;
    }

    public function getCbu {

        return $this->cbu;
    }

    public function setCbu($cbu){

        $this->cbu = $cbu;
    }

    public function getId{

        return $this->id;
    }

    public function setId($id){

        $this->id = $id;
    }

}

?>