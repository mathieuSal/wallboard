<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 *  Todo entity
 *  @ApiResource
 *  @ORM\Entity
 */
class Todo
{
    /**
    * @var int The entity Id
    *
    * @ORM\Id
    * @ORM\GeneratedValue
    * @ORM\Column(type="integer")
    */
    private $id;

    /**
     * @var string todo's name
     * 
     * @ORM\Column(type="string")
     * @Assert\NotBlank
     */
    private $name;

    /**
     * @var boolean
     * 
     * @ORM\Column(type="boolean", options={"default": false})
     */
    private $completed;


    /**
     * Get the entity Id
     *
     * @return  int
     */ 
    public function getId()
    {
        return $this->id;
    }

    /**
     * Get todo's name
     *
     * @return  string
     */ 
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set todo's name
     *
     * @param  string  $name  todo's name
     *
     * @return  self
     */ 
    public function setName(string $name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get the value of completed
     *
     * @return  boolean
     */ 
    public function getCompleted()
    {
        return $this->completed;
    }

    /**
     * Set the value of completed
     *
     * @param  boolean  $completed
     *
     * @return  self
     */ 
    public function setCompleted($completed)
    {
        $this->completed = $completed;

        return $this;
    }
}