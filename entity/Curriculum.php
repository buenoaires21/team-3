<?php

class Curriculum {

    private $adress;
    private $telephone;
    private $aEducation=array();
    private $aWorkExperience=array();
    private $id;


    public Curriculum(){

    }

    public function getAdress(){

        return $this->adress;
    }

    public function setAdress($adress){

        $this->adress = $adress;
    }

    public function getTelephone(){

        return $this->telephone;
    }

    public function setTelephone($telephone){

        $this->telephone = $telephone;
    }

    public function getId(){

        return $this->id;
    }

    public function setId($id){

        $this->id = $id;
    }

    public function getaEducation(){

        return $this->aEducation;
    }

    public function setaEducation($aEducation){

        $this->aEducation = $aEducation;
    }

    public function getaWorkExperience(){

        return $this->aWorkExperience;
    }

    public function setaWorkExperience($aWorkExperience){

        $this->aWorkExperience = $aWorkExperience;
    }

}

?>