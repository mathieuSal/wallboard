<?php

namespace App\Entity\Bookmark;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\ManyToMany;
use Symfony\Component\Validator\Constraints as Assert;

/**
 *  Bookmark tag entity
 *  @ApiResource
 *  @ORM\Entity
 */
class BookmarkTag
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
    * @var string tag's name
    * 
    * @ORM\Column(type="string")
    * @Assert\NotBlank
    */
    private $name;

    /**
     * @ManyToMany(targetEntity="Bookmark", mappedBy="tags")
     */
    private $bookmarks;

    public function __construct() {
      $this->bookmarks = new \Doctrine\Common\Collections\ArrayCollection();
    }

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
     * Get tag's name
     *
     * @return  string
     */ 
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set tag's name
     *
     * @param  string  $name  tag's name
     *
     * @return  self
     */ 
    public function setName(string $name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get the value of bookmarks
     */ 
    public function getBookmarks()
    {
        return $this->bookmarks;
    }

    /**
     * Set the value of bookmarks
     *
     * @return  self
     */ 
    public function setBookmarks($bookmarks)
    {
        $this->bookmarks = $bookmarks;

        return $this;
    }
}
