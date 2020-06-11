<?php

namespace App\Entity\Bookmark;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 *  Bookmark category entity
 *  @ApiResource
 *  @ORM\Entity
 */
class BookmarkCategory
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
    * @var string category's name
    * 
    * @ORM\Column(type="string")
    * @Assert\NotBlank
    */
    private $name;

    /**
    * @var string category's icon
    * 
    * @ORM\Column(type="string")
    * @Assert\NotBlank
    */
    private $icon;

    /**
    * @var string category's color
    * 
    * @ORM\Column(type="string")
    * @Assert\NotBlank
    */
    private $color;

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
     * Get category's name
     *
     * @return  string
     */ 
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set category's name
     *
     * @param  string  $name  category's name
     *
     * @return  self
     */ 
    public function setName(string $name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get category's icon
     *
     * @return  string
     */ 
    public function getIcon()
    {
        return $this->icon;
    }

    /**
     * Set category's icon
     *
     * @param  string  $icon  category's icon
     *
     * @return  self
     */ 
    public function setIcon(string $icon)
    {
        $this->icon = $icon;

        return $this;
    }

    /**
     * Get category's color
     *
     * @return  string
     */ 
    public function getColor()
    {
        return $this->color;
    }

    /**
     * Set category's color
     *
     * @param  string  $color  category's color
     *
     * @return  self
     */ 
    public function setColor(string $color)
    {
        $this->color = $color;

        return $this;
    }
}
