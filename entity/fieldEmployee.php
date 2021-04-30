<?php


class FieldEmployee extends Employee{

    private $projects=array();
    private $score;

    public FieldEmployee(){

    }

    public function getProjects(){

        return $this->projects;
    }

    public function setProjects($project){

        $this->projects[]= $project;
    }
    
    public function getScore(){

        return $this->score;
    }

    public function setScore($points){

        $this->score= $points;
    }
    
    
    
}


?>