<?php

namespace App\Models;

use App\Models\Board;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CardList extends Model
{
    use HasFactory, SoftDeletes;

    public function cards(): HasMany
    {
        return $this->hasMany(Card::class, 'list_id');
    }
    public function board(): BelongsTo
    {
        return $this->belongsTo(Board::class, 'board_id');
    }


}
